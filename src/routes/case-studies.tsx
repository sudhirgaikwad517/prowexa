import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/case-studies')({
  component: () => <div>case-studies</div>,
});
