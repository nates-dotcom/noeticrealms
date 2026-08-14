import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-start justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="wordmark mt-4 text-7xl sm:text-8xl">Lost in the realm</h1>
      <p className="mt-5 max-w-md text-muted">
        That page does not exist. The arena is still this way.
      </p>
      <div className="mt-8">
        <Button href="/">Back home</Button>
      </div>
    </Container>
  );
}
