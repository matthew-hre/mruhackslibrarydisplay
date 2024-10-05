"use client";

import { useEffect, useState } from "react";

export function Countdown() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // countdown to event of event (oct 6th, 11am)
  const eventDate = new Date("2024-10-06T11:00:00");
  const timeLeft = eventDate.getTime() - time.getTime();
  const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutesLeft = String(
    Math.floor((timeLeft / (1000 * 60)) % 60)
  ).padStart(2, "0");
  const secondsLeft = String(Math.floor((timeLeft / 1000) % 60)).padStart(
    2,
    "0"
  );

  // countdown till hacking starts (oct 5th, 11am)
  const startTime = new Date("2024-10-05T10:30:00");
  const hackingTimeLeft = startTime.getTime() - time.getTime();
  const hackingHoursLeft = Math.floor(hackingTimeLeft / (1000 * 60 * 60));
  const hackingMinutesLeft = String(
    Math.floor((hackingTimeLeft / (1000 * 60)) % 60)
  ).padStart(2, "0");
  const hackingSecondsLeft = String(
    Math.floor((hackingTimeLeft / 1000) % 60)
  ).padStart(2, "0");

  return (
    <div className="rounded-lg bg-white p-8 flex-1 flex-col flex items-center justify-center gap-4">
      <div className="flex flex-col">
        <h3 className="text-lg text-gray-500">
          {time.toLocaleDateString([], {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h3>
        <h2 className="text-3xl font-bold text-black">
          {time
            .toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })
            .replace("a.m.", "AM")
            .replace("p.m.", "PM")}
        </h2>
      </div>
      <div className="flex flex-col items-center">
        {startTime > time ? (
          <>
            <h2 className="text-xl text-gray-500">Hacking Starts In</h2>
            <h2 className="text-3xl font-bold text-black">
              {hackingHoursLeft}:{hackingMinutesLeft}:{hackingSecondsLeft}
            </h2>
          </>
        ) : (
          <>
            <h2 className="text-xl text-gray-500">Hacking Ends In</h2>
            {hoursLeft < 0 ? (
              <h2 className="text-3xl font-bold text-black">
                Hacking has ended!
              </h2>
            ) : (
              <h2 className="text-3xl font-bold text-black">
                {hoursLeft}:{minutesLeft}:{secondsLeft}
              </h2>
            )}
          </>
        )}
      </div>
    </div>
  );
}
