"use client";

import { useEffect, useState } from "react";

export function TypingRole({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && subIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && subIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      }, 300);
    } else {
      timeout = setTimeout(
        () => setSubIndex((s) => s + (deleting ? -1 : 1)),
        deleting ? 35 : 65
      );
    }
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  const current = roles[index % roles.length];

  return (
    <span className="text-gradient animate-gradient bg-[length:200%_auto]">
      {current.substring(0, subIndex)}
      <span
        className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle"
        style={{ height: "0.85em" }}
      />
    </span>
  );
}
