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
        "relative bg-panel",
        padded && "p-6 sm:p-7",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
