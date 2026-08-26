import { cn } from "@/lib/cn";
import { typography } from "@/lib/type";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
  chaos?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
  as: Heading = "h2",
  chaos = false,
}: SectionHeaderProps) {
  const highlighted = highlight
    ? title.split(new RegExp(`(${highlight})`, "i")).map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className="text-lime">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )
    : title;

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className={`${typography.eyebrow} mb-4 text-lime`}>{eyebrow}</p> : null}
      <Heading
        className={chaos ? typography.chaos : typography.h1}
        style={{ color: "var(--title)" }}
      >
        {highlighted}
      </Heading>
      {description ? (
        <p className={`${typography.bodyLg} mt-4 text-muted`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
