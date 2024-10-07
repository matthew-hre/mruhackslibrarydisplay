"use client";

import { useState, useEffect } from "react";

function getGreeting(hour: number): string {
  if (hour >= 5 && hour < 12) {
    return hour < 9 ? "Rise and Shine Hackers!" : "Good Morning Hackers!";
  } else if (hour >= 12 && hour < 18) {
    return hour < 15 ? "Good Afternoon Hackers!" : "Good Evening Hackers!";
  } else {
    return "Good Night Hackers!";
  }
}

export function Greeting() {
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const updateGreeting = () => {
      const now = new Date();
      const mstTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Denver",
        hour: "numeric",
        hour12: false,
      }).format(now);

      const hour = parseInt(mstTime, 10);
      if (isNaN(hour)) {
        setGreeting("Time not available");
      } else {
        setGreeting(getGreeting(hour));
      }
    };

    updateGreeting();
    const timer = setInterval(updateGreeting, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className="text-4xl font-bold text-white" aria-live="polite">
      {greeting}
    </h1>
  );
}
