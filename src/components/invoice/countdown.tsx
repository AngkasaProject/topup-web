"use client";

import { useEffect, useState } from "react";

export function Countdown() {
  const [seconds, setSeconds] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(seconds / 60);

  const remainSeconds = seconds % 60;

  return (
    <div className="text-center">
      <div className="text-sm text-muted-foreground">
        Batas Waktu Pembayaran
      </div>

      <div className="mt-2 text-3xl font-bold text-orange-500">
        {String(minutes).padStart(2, "0")}:
        {String(remainSeconds).padStart(2, "0")}
      </div>
    </div>
  );
}
