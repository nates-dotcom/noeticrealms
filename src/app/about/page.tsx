"use client";

import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function AboutPage() {
  const { copy } = useSiteCopy();

  return (
    <Container as="section" className="py-16 sm:py-24">
      <SectionHeader
        as="h1"
        eyebrow={copy.about.eyebrow}
        title={copy.about.title}
        highlight={copy.about.highlight}
        description={copy.about.description}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card>
          <p className="eyebrow">{copy.about.whoEyebrow}</p>
          <p className="mt-4 text-sm leading-8 text-muted sm:text-base">
            {copy.about.whoBody}
          </p>
        </Card>
        <Card className="bg-panel-2">
          <p className="eyebrow">{copy.about.howEyebrow}</p>
          <ul className="mt-4 space-y-4 text-sm leading-7 text-muted sm:text-base">
            {copy.about.howItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {copy.about.stats.map((item) => (
          <Card key={item.label}>
            <p className="eyebrow">{item.label}</p>
            <p className="mt-3 font-chaos text-3xl tracking-wide" style={{ color: "var(--title)" }}>
              {item.value}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button href="/games/duel-me-bro">{copy.about.ctaLabel}</Button>
        <Button href={copy.studio.discordUrl} external variant="secondary">
          Join {copy.studio.discordLabel}
        </Button>
      </div>
    </Container>
  );
}
