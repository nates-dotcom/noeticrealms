import { cn } from "@/lib/cn";
import { typography } from "@/lib/type";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  padded?: boolean;
};

export function Card({
  children,
  className,
  as: Tag = "div",
  padded = true,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-[var(--radius)] border border-line bg-panel",
        padded && "p-6 sm:p-7",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function FeatureCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <Card className="h-full">
      <h3 className={typography.h3} style={{ color: "var(--title)" }}>{title}</h3>
      <p className={`${typography.small} mt-3 max-w-sm text-muted`}>{body}</p>
    </Card>
  );
}
