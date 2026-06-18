"use client";

import { useEffect, useState } from "react";

interface Props {
  createdAt: string;
}

const EXPIRE_MINUTES = 15;

export function Countdown({ createdAt }: Props) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    function calculateRemaining() {
      const created = new Date(createdAt).getTime();

      const expired = created + EXPIRE_MINUTES * 60 * 1000;

      const remain = Math.floor((expired - Date.now()) / 1000);

      return remain > 0 ? remain : 0;
    }

    setSeconds(calculateRemaining());

    const timer = setInterval(() => {
      setSeconds(calculateRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [createdAt]);

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

      {seconds === 0 && (
        <div className="mt-3 text-sm font-medium text-red-500">
          Invoice telah kadaluarsa
        </div>
      )}
    </div>
  );
}
