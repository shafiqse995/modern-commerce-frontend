import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return <h1>React + TypeScript + Tailwind + Tanstack Router Starter</h1>;
}
