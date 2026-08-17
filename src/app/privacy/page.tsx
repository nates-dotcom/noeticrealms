"use client";

import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function PrivacyPage() {
  const { copy } = useSiteCopy();

  return (
    <Container as="article" width="narrow" className="py-16 sm:py-24">
      <SectionHeader
        as="h1"
        eyebrow={copy.privacy.eyebrow}
        title={copy.privacy.title}
        description={copy.privacy.description}
      />
      <div className="mt-12 space-y-10">
        {copy.privacy.sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-chaos text-3xl tracking-wide" style={{ color: "var(--title)" }}>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-8 text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <p className="text-xs text-muted">{copy.privacy.updated}</p>
      </div>
    </Container>
  );
}
