import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/academy')({
  component: () => <div>academy</div>,
});
