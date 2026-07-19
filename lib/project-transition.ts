type PendingProjectTransition = {
  slug: string;
  state: unknown;
};

let pendingTransition: PendingProjectTransition | null = null;

export function stageProjectTransition(slug: string, state: unknown) {
  pendingTransition = { slug, state };
}

export function consumeProjectTransition(slug: string) {
  if (pendingTransition?.slug !== slug) return null;

  const state = pendingTransition.state;
  pendingTransition = null;
  return state;
}
