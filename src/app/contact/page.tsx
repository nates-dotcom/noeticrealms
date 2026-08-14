import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { studio } from "@/content/studio";

export const metadata: Metadata = {
  title: "Contact",
  description: `Talk to ${studio.name} over Discord or email.`,
};

export default function ContactPage() {
  return (
    <Container as="section" className="py-16 sm:py-24">
      <SectionHeader
        as="h1"
        eyebrow="Ping us"
        title="Contact"
        description="Discord is the fastest way to catch development updates. Email is for support, press, and anything that needs a paper trail."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card className="glow-lime">
          <p className="eyebrow">Community</p>
          <h2 className="mt-4 font-chaos text-4xl tracking-wide">Discord</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Playtests, patches, and the usual headset-on yelling. Come hang out.
          </p>
          <div className="mt-8">
            <Button href={studio.discordUrl} external>
              Join Discord
            </Button>
          </div>
        </Card>

        <Card>
          <p className="eyebrow">Direct</p>
          <h2 className="mt-4 font-chaos text-4xl tracking-wide">Email</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Support, feedback, and studio questions. We use the address only to
            reply — never for marketing.
          </p>
          <a
            href={`mailto:${studio.email}`}
            className="mt-6 inline-block font-display text-sm tracking-[0.08em] text-lime"
          >
            {studio.email}
          </a>
          <div className="mt-8">
            <Button href={`mailto:${studio.email}`} variant="secondary">
              Write an email
            </Button>
          </div>
        </Card>
      </div>
    </Container>
  );
}
