"use client";

import { useState } from "react";
import Image from "next/image";
import { toImageSlug } from "@/utils/teams";

interface Props {
  teamName: string;
}

export function TeamBgImage({ teamName }: Props) {
  const [err, setErr] = useState(false);
  if (err) return null;

  return (
    <Image
      src={`/general/${toImageSlug(teamName)}.jpg`}
      alt={teamName}
      fill
      className="object-cover object-center opacity-40"
      onError={() => setErr(true)}
      sizes="(max-width: 1024px) 100vw, 75vw"
      priority={false}
    />
  );
}
