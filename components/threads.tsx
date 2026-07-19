"use client";

import { useEffect, useRef } from "react";
import { Color, Mesh, Program, Renderer, Triangle } from "ogl";

type ThreadsProps = {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
  className?: string;
};

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragmentShader = `
precision highp float;
uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;
#define PI 3.1415926538
const int u_line_count = 40;
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
  vec2 Pi = floor(P);
  vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
  vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
  Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
  Pt += vec2(26.0, 161.0).xyxy;
  Pt *= Pt;
  Pt = Pt.xzxz * Pt.yyww;
  vec4 hash_x = fract(Pt * (1.0 / 951.135664));
  vec4 hash_y = fract(Pt * (1.0 / 642.949883));
  vec4 grad_x = hash_x - 0.49999;
  vec4 grad_y = hash_y - 0.49999;
  vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
    * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
  grad_results *= 1.4142135623730950;
  vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
    * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
  vec4 blend2 = vec4(blend, vec2(1.0 - blend));
  return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
  return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, vec2 mouse, float time, float amplitude, float distance) {
  float split_point = 0.1 + (perc * 0.4);
  float amplitude_normal = smoothstep(split_point, 0.7, st.x);
  float finalAmplitude = amplitude_normal * 0.5 * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);
  float time_scaled = time / 10.0 + (mouse.x - 0.5);
  float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;
  float xnoise = mix(
    Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
    Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
    st.x * 0.3
  );
  float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;
  float line_start = smoothstep(
    y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur), y, st.y
  );
  float line_end = smoothstep(
    y, y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur), st.y
  );
  return clamp((line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))), 0.0, 1.0);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;
  float line_strength = 1.0;
  for (int i = 0; i < u_line_count; i++) {
    float p = float(i) / float(u_line_count);
    line_strength *= (1.0 - lineFn(
      uv, u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
      p, uMouse, iTime, uAmplitude, uDistance
    ));
  }
  float colorVal = 1.0 - line_strength;
  fragColor = vec4(uColor * colorVal, colorVal);
}

void main() { mainImage(gl_FragColor, gl_FragCoord.xy); }`;

// Adapted from React Bits' open-source Threads background (TS + Tailwind variant).
export function Threads({
  color = [0.72, 0.95, 0.42],
  amplitude = 0.8,
  distance = 0.22,
  enableMouseInteraction = true,
  className,
}: ThreadsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const propsRef = useRef({ color, amplitude, distance, enableMouseInteraction });

  useEffect(() => {
    propsRef.current = { color, amplitude, distance, enableMouseInteraction };
  }, [color, amplitude, distance, enableMouseInteraction]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const initialProps = propsRef.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;
    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
    };
    const removeMotionPreferenceListener = () => {
      if (typeof motionQuery.removeEventListener === "function") {
        motionQuery.removeEventListener("change", onMotionPreferenceChange);
      } else {
        motionQuery.removeListener(onMotionPreferenceChange);
      }
    };
    if (typeof motionQuery.addEventListener === "function") {
      motionQuery.addEventListener("change", onMotionPreferenceChange);
    } else {
      motionQuery.addListener(onMotionPreferenceChange);
    }

    let renderer: Renderer | undefined;
    let gl: Renderer["gl"] | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let intersectionObserver: IntersectionObserver | undefined;
    let renderedOnce = false;
    let visible = true;

    try {
      renderer = new Renderer({ alpha: true });
      gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      container.appendChild(gl.canvas);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: new Color(1, 1, 1) },
          uColor: { value: new Color(...initialProps.color) },
          uAmplitude: { value: initialProps.amplitude },
          uDistance: { value: initialProps.distance },
          uMouse: { value: new Float32Array([0.5, 0.5]) },
        },
      });
      const mesh = new Mesh(gl, { geometry, program });

      const resize = () => {
        if (!renderer || !gl) return;
        const width = Math.max(container.clientWidth, 1);
        const height = Math.max(container.clientHeight, 1);
        const baseDpr = Math.min(window.devicePixelRatio || 1, 2);
        const longestSide = Math.max(width, height) * baseDpr;
        renderer.dpr = longestSide > 1920 ? (baseDpr * 1920) / longestSide : baseDpr;
        renderer.setSize(width, height);
        program.uniforms.iResolution.value.set(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height);
      };

      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);
      } else {
        window.addEventListener("resize", resize);
      }
      resize();

      const currentMouse = [0.5, 0.5];
      let targetMouse = [0.5, 0.5];
      const onPointerMove = (event: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        targetMouse = [
          (event.clientX - rect.left) / rect.width,
          1 - (event.clientY - rect.top) / rect.height,
        ];
      };
      const onPointerLeave = () => {
        targetMouse = [0.5, 0.5];
      };
      container.addEventListener("pointermove", onPointerMove);
      container.addEventListener("pointerleave", onPointerLeave);

      if (typeof IntersectionObserver !== "undefined") {
        intersectionObserver = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
        });
        intersectionObserver.observe(container);
      }

      const onContextLost = (event: Event) => {
        event.preventDefault();
        container.classList.remove("threads--webgl-ready");
      };
      const onContextRestored = () => {
        renderedOnce = false;
        resize();
      };
      gl.canvas.addEventListener("webglcontextlost", onContextLost);
      gl.canvas.addEventListener("webglcontextrestored", onContextRestored);

      let elapsed = 0;
      let lastRenderedAt = 0;
      const update = (time: number) => {
        frameRef.current = requestAnimationFrame(update);
        const minimumFrameTime = reducedMotion ? 1000 / 20 : 1000 / 60;
        if (!visible || document.hidden || time - lastRenderedAt < minimumFrameTime) return;
        const delta = lastRenderedAt ? Math.min(time - lastRenderedAt, 80) : 16;
        lastRenderedAt = time;
        elapsed += delta * (reducedMotion ? 0.3 : 1);

        const next = propsRef.current;
        program.uniforms.uColor.value.set(...next.color);
        program.uniforms.uAmplitude.value = next.amplitude * (reducedMotion ? 0.55 : 1);
        program.uniforms.uDistance.value = next.distance;
        if (next.enableMouseInteraction && !reducedMotion) {
          currentMouse[0] += 0.05 * (targetMouse[0] - currentMouse[0]);
          currentMouse[1] += 0.05 * (targetMouse[1] - currentMouse[1]);
        }
        program.uniforms.uMouse.value[0] = next.enableMouseInteraction && !reducedMotion ? currentMouse[0] : 0.5;
        program.uniforms.uMouse.value[1] = next.enableMouseInteraction && !reducedMotion ? currentMouse[1] : 0.5;
        program.uniforms.iTime.value = elapsed * 0.001;
        renderer?.render({ scene: mesh });

        if (!renderedOnce) {
          renderedOnce = true;
          container.classList.add("threads--webgl-ready");
        }
      };
      frameRef.current = requestAnimationFrame(update);

      return () => {
        cancelAnimationFrame(frameRef.current);
        resizeObserver?.disconnect();
        intersectionObserver?.disconnect();
        if (!resizeObserver) window.removeEventListener("resize", resize);
        container.removeEventListener("pointermove", onPointerMove);
        container.removeEventListener("pointerleave", onPointerLeave);
        gl?.canvas.removeEventListener("webglcontextlost", onContextLost);
        gl?.canvas.removeEventListener("webglcontextrestored", onContextRestored);
        removeMotionPreferenceListener();
        container.classList.remove("threads--webgl-ready");
        if (gl && container.contains(gl.canvas)) container.removeChild(gl.canvas);
        gl?.getExtension("WEBGL_lose_context")?.loseContext();
      };
    } catch {
      removeMotionPreferenceListener();
      if (gl && container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl?.getExtension("WEBGL_lose_context")?.loseContext();
      container.classList.remove("threads--webgl-ready");
    }
  }, []);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <svg className="threads-fallback" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <g className="threads-fallback-motion">
          {[120, 170, 220, 270, 320, 370, 420, 470].map((y, index) => (
            <path
              key={y}
              d={`M-80 ${y} C170 ${y - 150 + index * 8}, 310 ${y + 145 - index * 5}, 520 ${y - 8} S810 ${y - 150 + index * 6}, 1080 ${y + 20}`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
