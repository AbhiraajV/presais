"use client";

import * as React from "react";

interface CountdownTimerProps {
  targetTime: string;
}

export function CountdownTimer({ targetTime }: CountdownTimerProps) {
  const [time, setTime] = React.useState<string | null>(null);
  const TIME = 60 * 60 * 1000;

  React.useEffect(() => {
    console.log({targetTime})
    const targetDate = new Date(targetTime);
    const endDate = new Date(targetDate.getTime() + TIME);

    function updateTimer() {
      const now = new Date();
      const remainingTime = endDate.getTime() - now.getTime();

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        return;
      }
      const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
      const seconds = Math.floor((remainingTime / 1000) % 60);

      setTime(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
          2,
          "0"
        )}:${String(seconds).padStart(2, "0")}`
      );
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(timerInterval);
  }, [targetTime]);

  return (
    <div className="space-y-2">
      <div className="text-2xl font-bold text-center text-blue-600">
        Next request in: {time}
      </div>
      <p className="text-center text-gray-500">
        We have received your current request.
        <br />
        An email will be sent when your report is ready!
      </p>
    </div>
  );
}