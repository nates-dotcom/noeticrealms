import type { Metadata } from "next";
import { studio } from "@/content/studio";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy practices for ${studio.name} and Duel Me Bro.`,
};

export default function PrivacyLayout({ children }: LayoutProps<"/privacy">) {
  return children;
}
