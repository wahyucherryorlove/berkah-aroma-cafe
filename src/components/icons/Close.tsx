import type { ComponentPropsWithRef } from "react";

export function Close({ className = "" }: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 511.991 511.991"
      className={className}
    >
      <g>
        <path d="M286.161,255.867L505.745,36.283c8.185-8.474,7.951-21.98-0.523-30.165c-8.267-7.985-21.375-7.985-29.642,0   L255.995,225.702L36.411,6.118c-8.475-8.185-21.98-7.95-30.165,0.524c-7.985,8.267-7.985,21.374,0,29.641L225.83,255.867   L6.246,475.451c-8.328,8.331-8.328,21.835,0,30.165l0,0c8.331,8.328,21.835,8.328,30.165,0l219.584-219.584l219.584,219.584   c8.331,8.328,21.835,8.328,30.165,0l0,0c8.328-8.331,8.328-21.835,0-30.165L286.161,255.867z" />
      </g>
    </svg>
  );
}
