import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/testimonials')({
  component: () => <div>testimonials</div>,
});
