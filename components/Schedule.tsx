"use client";

import { useEffect, useState } from "react";

export function Schedule() {
  const events = [
    {
      name: "Test",
      startTime: new Date("2024-10-03T07:00:00"),
      endTime: new Date("2024-10-03T10:19:00"),
      location: "Test Location",
    },
    {
      name: "Check-In",
      startTime: new Date("2024-10-05T08:30:00"),
      endTime: new Date("2024-10-05T10:00:00"),
      location: "MRUHacks Help Desk",
    },
    {
      name: "Opening Ceremony",
      startTime: new Date("2024-10-05T10:00:00"),
      endTime: new Date("2024-10-05T10:30:00"),
      location: "Ideas Lounge",
    },
    {
      name: "Hacking Begins",
      startTime: new Date("2024-10-05T10:30:00"),
      endTime: new Date("2024-10-05T10:45:00"),
      location: "First Floor",
    },
    {
      name: "Lunch",
      startTime: new Date("2024-10-05T12:00:00"),
      endTime: new Date("2024-10-05T13:00:00"),
      location: "The Atrium",
    },
    {
      name: "Dinner",
      startTime: new Date("2024-10-05T19:45:00"),
      endTime: new Date("2024-10-05T21:00:00"),
      location: "Ideas Lounge",
    },
    {
      name: "Mini-Competition",
      startTime: new Date("2024-10-05T20:00:00"),
      endTime: new Date("2024-10-05T21:00:00"),
      location: "Ideas Lounge",
    },
    {
      name: "Hackathon Movie Screening",
      startTime: new Date("2024-10-05T22:00:00"),
      endTime: new Date("2024-10-06T01:00:00"),
      location: "Visualization Classroom",
    },
    {
      name: "Video Games Night Session",
      startTime: new Date("2024-10-05T22:00:00"),
      endTime: new Date("2024-10-06T01:00:00"),
      location: "Ideas Lounge",
    },
    {
      name: "Breakfast",
      startTime: new Date("2024-10-06T09:00:00"),
      endTime: new Date("2024-10-06T10:00:00"),
      location: "Ideas Lounge",
    },
    {
      name: "Hacking Ends",
      startTime: new Date("2024-10-06T11:00:00"),
      endTime: new Date("2024-10-06T11:00:00"),
      location: "First Floor",
    },
    {
      name: "Lunch",
      startTime: new Date("2024-10-05T12:00:00"),
      endTime: new Date("2024-10-05T13:00:00"),
      location: "Ideas Lounge",
    },
    {
      name: "Closing Ceremony",
      startTime: new Date("2024-10-05T15:00:00"),
      endTime: new Date("2024-10-05T15:30:00"),
      location: "Main Stage",
    },
  ];

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
              title={event.name}
              startTime={event.startTime}
              endTime={event.endTime}
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
  startTime: Date;
  endTime: Date;
  location: string;
}) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const isCurrentEvent = currentTime >= startTime && currentTime <= endTime;

  if (endTime < currentTime) {
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
          {startTime
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
