import type { Metadata } from "next";
import { AdminApp } from "@/components/admin/AdminApp";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminPage() {
  return (
    <Container className="py-12 sm:py-16">
      <AdminApp />
    </Container>
  );
}
