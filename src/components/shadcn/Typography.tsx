import { type ReactNode, forwardRef } from "react";

interface TypographyProps {
  children?: ReactNode;
  className?: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p1" | "p2" | "p3" | "p4";
  font?: "nunito" | "karla";
  weight?: "light" | "normal" | "bold";
}

const Typography = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(
  (
    { children, className, variant, font = "karla", weight = "normal" },
    ref
  ) => {
    const fontWeight = determineFontWeight(weight);
    const variantFont = font === "karla" ? "font-karla" : "font-nunito";

    switch (variant) {
      // Font Heading
      case "h1":
        return (
          <h1
            ref={ref}
            className={`${variantFont} ${fontWeight} ${className} text-6xl`}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            ref={ref}
            className={`${variantFont} ${fontWeight} ${className} text-5xl`}
          >
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3
            ref={ref}
            className={`${variantFont} ${fontWeight} ${className} text-4xl`}
          >
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4
            ref={ref}
            className={`${variantFont} ${fontWeight} ${className} text-3xl`}
          >
            {children}
          </h4>
        );
      case "h5":
        return (
          <h5
            ref={ref}
            className={`${variantFont} ${fontWeight} ${className} text-2xl`}
          >
            {children}
          </h5>
        );
      case "h6":
        return (
          <h6
            ref={ref}
            className={`${variantFont} ${fontWeight} ${className} text-xl`}
          >
            {children}
          </h6>
        );

      // Paragraph
      case "p1":
        return (
          <p
            ref={ref}
            className={`${variantFont} ${fontWeight} ${className} text-lg`}
          >
            {children}
          </p>
        );
      case "p2":
        return (
          <p
            ref={ref}
            className={`${variantFont} ${fontWeight} ${className} text-base`}
          >
            {children}
          </p>
        );
      case "p3":
        return (
          <p
            ref={ref}
            className={`${variantFont} ${fontWeight} ${className} text-sm`}
          >
            {children}
          </p>
        );
      case "p4":
        return (
          <p
            ref={ref}
            className={`${variantFont} ${fontWeight} ${className} text-xs`}
          >
            {children}
          </p>
        );
    }
  }
);

Typography.displayName = "Typography";

function determineFontWeight(fontWeight: string) {
  let tailwindClass = "";

  switch (fontWeight) {
    case "light": {
      tailwindClass = "font-light";
      break;
    }
    case "normal": {
      tailwindClass = "font-normal";
      break;
    }
    case "bold": {
      tailwindClass = "font-bold";
      break;
    }
  }
}

export { Typography };
