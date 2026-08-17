import type { Metadata } from "next";
import { studio } from "@/content/studio";

export const metadata: Metadata = {
  title: "About",
  description: studio.description,
};

export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return children;
}
