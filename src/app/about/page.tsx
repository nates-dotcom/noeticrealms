import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { studio } from "@/content/studio";

export const metadata: Metadata = {
  title: "About",
  description: studio.description,
};

export default function AboutPage() {
  return (
    <Container as="section" className="py-16 sm:py-24">
      <SectionHeader
        as="h1"
        eyebrow="Studio"
        title="Independent VR. Loud on purpose."
        highlight="Loud"
        description={studio.description}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card>
          <p className="eyebrow">Who we are</p>
          <p className="mt-4 text-sm leading-8 text-muted sm:text-base">
            {studio.about} The studio makes games for {studio.platformsLine},
            starting with the upcoming 1v1 VR duel Duel Me Bro VR.
          </p>
        </Card>
        <Card className="bg-panel-2">
          <p className="eyebrow">How we build</p>
          <ul className="mt-4 space-y-4 text-sm leading-7 text-muted sm:text-base">
            <li>VR-native movement and combat, not a flat game with a headset slapped on.</li>
            <li>Characters and arenas with enough personality to survive a clip compilation.</li>
            <li>Player-respecting software: local saves, no ads, no silent data harvest.</li>
          </ul>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          { label: "Focus", value: "VR games" },
          { label: "Platforms", value: "Quest + PCVR" },
          { label: "Lead title", value: "Duel Me Bro VR" },
        ].map((item) => (
          <Card key={item.label}>
            <p className="eyebrow">{item.label}</p>
            <p className="mt-3 font-chaos text-3xl tracking-wide">{item.value}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button href="/games/duel-me-bro">See Duel Me Bro VR</Button>
        <Button href={studio.discordUrl} external variant="secondary">
          Join Discord
        </Button>
      </div>
    </Container>
  );
}
