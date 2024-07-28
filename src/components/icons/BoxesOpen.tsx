import type { ComponentPropsWithRef } from "react";

export function BoxesOpen({ className = "" }: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M3,3L12,0l9,3-8.992,3.001L3,2.989v.011Zm-1,2L.3,7.834c-.667,1.112-.133,2.555,1.097,2.965l5.081,1.694c.889,.296,1.865-.065,2.347-.868l2.175-3.624L2,5Zm11,3l2.175,3.624c.482,.804,1.458,1.165,2.347,.868l5.118-1.706c1.211-.404,1.737-1.825,1.08-2.92l-1.72-2.866-9,3Zm-2.46,4.654c-.742,1.236-2.044,1.945-3.415,1.945-.425,0-.856-.067-1.28-.209l-3.845-1.281v7.892l9,3V11.887l-.46,.766Zm7.615,1.736c-.424,.142-.855,.209-1.28,.209-1.371,0-2.673-.708-3.415-1.945l-.46-.766v12.113l9-3v-7.892l-3.845,1.282Z" />
    </svg>
  );
}