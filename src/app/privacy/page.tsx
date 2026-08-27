"use client";

import { useSiteCopy } from "@/components/content/SiteCopyProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { typography } from "@/lib/type";

const EMAIL_CAPTURE = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
const EMAIL_ONLY = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function LinkedPrivacyText({ text }: { text: string }) {
  const parts = text.split(EMAIL_CAPTURE);

  return (
    <>
      {parts.map((part, index) =>
        EMAIL_ONLY.test(part) ? (
          <a
            key={`${part}-${index}`}
            href={`mailto:${part}`}
            className="text-lime underline-offset-4 hover:underline"
          >
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}

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
            <h2 className={typography.h2} style={{ color: "var(--title)" }}>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className={`${typography.body} mt-3 text-muted`}>
                <LinkedPrivacyText text={paragraph} />
              </p>
            ))}
            {section.items?.length ? (
              <ul className={`${typography.body} mt-3 list-disc space-y-2 pl-5 text-muted`}>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        <p className={`${typography.small} text-muted`}>{copy.privacy.updated}</p>
      </div>
    </Container>
  );
}
