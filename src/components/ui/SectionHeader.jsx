export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  as: HeadingTag = "h2",
  labelClassName = "",
  titleClassName = "",
  subtitleClassName = "",
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {label ? (
        <span
          className={`text-primary-blue text-sm font-semibold uppercase tracking-wide ${labelClassName}`}
        >
          {label}
        </span>
      ) : null}
      <HeadingTag
        className={`text-foreground font-bold font-display ${titleClassName}`}
      >
        {title}
      </HeadingTag>
      {subtitle ? (
        <p
          className={`text-muted-foreground text-lg md:text-base font-sans ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
