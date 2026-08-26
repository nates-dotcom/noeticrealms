"use client";

import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { Button } from "@/components/ui/Button";
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

      <div className="mt-16 grid gap-12 border-t border-line pt-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">{copy.about.whoEyebrow}</p>
          <p className={`${typography.bodyLg} mt-5 text-muted`}>
            {copy.about.whoBody}
          </p>
        </div>
        <div>
          <p className="eyebrow">{copy.about.howEyebrow}</p>
          <ul className={`${typography.body} mt-5 space-y-5 text-muted`}>
            {copy.about.howItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <dl className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
        {copy.about.stats.map((item) => (
          <div key={item.label}>
            <dt className="eyebrow">{item.label}</dt>
            <dd className={`mt-3 ${typography.h2}`} style={{ color: "var(--title)" }}>
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-14 flex flex-wrap gap-4">
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
