import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-start justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="wordmark wordmark-compact mt-4">You slipped</h1>
      <p className="lede mt-5 max-w-md text-muted">
        That page does not exist. Peel back to the arena and wishlist Duel Me Bro.
      </p>
      <div className="mt-8">
        <Button href="/">Back home</Button>
      </div>
    </Container>
  );
}
