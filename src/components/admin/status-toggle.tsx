"use client";

import { useState } from "react";

interface Props {
  defaultValue?: boolean;
}

export function StatusToggle({ defaultValue = true }: Props) {
  const [enabled, setEnabled] = useState(defaultValue);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative h-6 w-11 rounded-full transition-colors ${
        enabled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
          enabled ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}
