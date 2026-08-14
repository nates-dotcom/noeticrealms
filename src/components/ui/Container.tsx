import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
  width?: "default" | "narrow" | "wide";
  id?: string;
};

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  className,
  as: Tag = "div",
  width = "default",
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn("mx-auto w-full px-5 sm:px-8", widths[width], className)}
    >
      {children}
    </Tag>
  );
}
