"use client";

import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function ContactPage() {
  const { copy } = useSiteCopy();

  return (
    <Container as="section" className="py-16 sm:py-24">
      <SectionHeader
        as="h1"
        eyebrow={copy.contact.eyebrow}
        title={copy.contact.title}
        description={copy.contact.description}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card className="glow-lime">
          <p className="eyebrow">{copy.contact.discordEyebrow}</p>
          <h2 className="mt-4 font-chaos text-4xl tracking-wide" style={{ color: "var(--title)" }}>
            {copy.contact.discordTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            {copy.contact.discordBody}
          </p>
          <div className="mt-8">
            <Button href={copy.studio.discordUrl} external>
              Join {copy.studio.discordLabel}
            </Button>
          </div>
        </Card>

        <Card>
          <p className="eyebrow">{copy.contact.emailEyebrow}</p>
          <h2 className="mt-4 font-chaos text-4xl tracking-wide" style={{ color: "var(--title)" }}>
            {copy.contact.emailTitle}
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            {copy.contact.emailBody}
          </p>
          <a
            href={`mailto:${copy.studio.email}`}
            className="mt-6 inline-block font-display text-sm tracking-[0.08em] text-lime"
          >
            {copy.studio.email}
          </a>
          <div className="mt-8">
            <Button href={`mailto:${copy.studio.email}`} variant="secondary">
              {copy.contact.emailCta}
            </Button>
          </div>
        </Card>
      </div>
    </Container>
  );
}
