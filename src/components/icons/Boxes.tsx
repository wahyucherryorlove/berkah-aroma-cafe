import type { ComponentPropsWithRef } from "react";

export function Boxes({ className = "" }: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M11,13H3c-1.657,0-3,1.343-3,3v8H11V13Zm-7.5,5v-2H7.5v2H3.5Zm17.5-5H13v11h11v-8c0-1.657-1.343-3-3-3Zm-.5,5h-4v-2h4v2ZM15,0h-6c-1.654,0-3,1.346-3,3V11h12V3c0-1.654-1.346-3-3-3Zm-1,5h-4V3h4v2Z" />
    </svg>
  );
}
