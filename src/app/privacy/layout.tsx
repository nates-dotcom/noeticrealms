import type { Metadata } from "next";
import { studio } from "@/content/studio";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `This Privacy Policy covers Duel Me Bro VR and the ${studio.name} studio website.`,
};

export default function PrivacyLayout({ children }: LayoutProps<"/privacy">) {
  return children;
}
