import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { studio } from "@/content/studio";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy practices for ${studio.name} and Duel Me Bro VR.`,
};

const sections = [
  {
    title: "We do not collect your data",
    body: [
      "Neither Duel Me Bro VR nor Noetic Realms collect, transmit, distribute, or sell your data. The game uses no third-party analytics or advertising services. No email, name, address, or any other personal information is requested or required to play.",
    ],
  },
  {
    title: "What stays on your device",
    body: [
      "Storage permission on the device where the application is installed is requested in order to store save data such as high scores and settings preferences. This save data is entirely local to your device and is never transmitted or accessed remotely.",
      "If you wish to delete your data, simply uninstall the game.",
    ],
  },
  {
    title: "If you email us",
    body: [
      "If you email the developer for support or other feedback, emails and email addresses will be retained for quality assurance purposes. Those addresses will be used only to reply to the concerns or suggestions raised and will never be used for any marketing purpose.",
    ],
  },
  {
    title: "Questions",
    body: [
      `If you have any questions concerning this policy or our privacy practices, you can email the developer at ${studio.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <Container as="article" width="narrow" className="py-16 sm:py-24">
      <SectionHeader
        as="h1"
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy covers Duel Me Bro VR and the Noetic Realms studio website."
      />
      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-chaos text-3xl tracking-wide">{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-8 text-muted sm:text-base">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
        <p className="text-xs text-muted">Last updated August 2026.</p>
      </div>
    </Container>
  );
}
