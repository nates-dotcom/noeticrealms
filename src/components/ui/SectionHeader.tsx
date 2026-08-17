import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className,
  as: Heading = "h2",
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
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <Heading className="font-chaos text-4xl sm:text-6xl" style={{ color: "var(--title)" }}>
        {highlighted}
      </Heading>
      {description ? (
        <p className="lede mt-4 text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
