"use client";

import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { typography } from "@/lib/type";

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
          <p className={`${typography.body} mt-4 text-muted`}>
            {copy.about.whoBody}
          </p>
        </Card>
        <Card className="bg-panel-2">
          <p className="eyebrow">{copy.about.howEyebrow}</p>
          <ul className={`${typography.body} mt-4 space-y-4 text-muted`}>
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
            <p className={`mt-3 ${typography.h3}`} style={{ color: "var(--title)" }}>
              {item.value}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button href={copy.studio.wishlistUrl} external>
          {copy.about.ctaLabel}
        </Button>
        <Button href={copy.studio.discordUrl} external variant="secondary">
          Join {copy.studio.discordLabel}
        </Button>
      </div>
    </Container>
  );
}
