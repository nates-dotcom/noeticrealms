import type { Metadata } from "next";
import { studio } from "@/content/studio";

export const metadata: Metadata = {
  title: "Contact",
  description: `Talk to ${studio.name} over Discord or email.`,
};

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return children;
}
