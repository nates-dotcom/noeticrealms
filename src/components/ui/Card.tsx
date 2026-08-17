import { cn } from "@/lib/cn";

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
  index,
  title,
  body,
}: {
  index?: string;
  title: string;
  body: string;
}) {
  return (
    <Card className="h-full transition duration-200 hover:-translate-y-1 hover:border-lime/40">
      {index ? (
        <p className="eyebrow mb-4 text-magenta">{index}</p>
      ) : null}
      <h3 className="font-chaos text-3xl tracking-wide" style={{ color: "var(--title)" }}>{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-7 text-muted">{body}</p>
    </Card>
  );
}
