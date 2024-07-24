import type { ComponentPropsWithRef } from "react";

export function RoomServices({ className = "" }: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M24,22a1,1,0,0,1-1,1H1a1,1,0,0,1,0-2H23A1,1,0,0,1,24,22ZM2,19H22a1,1,0,0,0,1-1V17A11.01,11.01,0,0,0,13,6.051V4.723a2,2,0,1,0-2,0V6.051A11.01,11.01,0,0,0,1,17v1A1,1,0,0,0,2,19Z" />
    </svg>
  );
}
