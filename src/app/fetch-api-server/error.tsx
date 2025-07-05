"use client";

import { useEffect } from "react";

export default function Loading({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <div className="text-center text-red-400">{error.message}</div>;
}
