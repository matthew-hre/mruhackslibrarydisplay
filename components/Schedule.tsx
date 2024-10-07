"use client";

import { useEffect, useState } from "react";

import config from "@/photowall.config";

export function Schedule() {
  const events = config.calendar.events;

  return (
    <div className="flex flex-col flex-[1] bg-white rounded-lg overflow-hidden h-full max-h-screen relative">
      <div className="rounded-lg bg-white p-8">
        <h2 className="text-xl font-bold text-black pb-6">
          Hackathon Schedule
        </h2>
        <div className="flex flex-col gap-3 relative">
          {events.map((event, index) => (
            <Event
              key={index}
              title={event.title}
              startTime={event.startDateTime}
              endTime={event.endDateTime}
              location={event.location}
            />
          ))}
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
  );
}

function Event({
  title,
  startTime,
  endTime,
  location,
}: {
  title: string;
  startTime: string;
  endTime: string;
  location: string;
}) {
  const [currentTime, setCurrentTime] = useState(new Date());

  const startDateTime = new Date(startTime);
  const endDateTime = new Date(endTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const isCurrentEvent =
    currentTime >= startDateTime && currentTime <= endDateTime;

  if (endDateTime < currentTime) {
    return null;
  }

  return (
    <div
      className={`flex flex-col gap-1 w-full p-2 ${
        isCurrentEvent
          ? "border-l-4 border-green-500 bg-green-50 rounded-r-lg"
          : ""
      }`}
    >
      <div className="flex flex-row gap-2 w-full justify-between">
        <span
          className={`font-semibold ${
            isCurrentEvent ? "font-bold" : "text-primary"
          }`}
        >
          {title}
        </span>
        <span className="text-gray-500 w-max">
          {startDateTime
            .toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })
            .replace("a.m.", "AM")
            .replace("p.m.", "PM")}
        </span>
      </div>
      <span className="text-gray-500">{location}</span>
    </div>
  );
}
