import { Schedule } from "@/components/Schedule";
import { PhotoWall } from "@/components/PhotoWall";
import { Socials } from "@/components/Socials";
import { Countdown } from "@/components/Countdown";

export default async function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full h-screen bg-gradient-to-br from-blue-500 to-purple-500 gap-4 p-4 flex flex-row">
      <div className="flex flex-col flex-1 gap-4">
        {(() => {
          const now = new Date();
          const mstTimePart = new Intl.DateTimeFormat("en-US", {
            timeZone: "America/Denver",
            hour: "2-digit",
            hour12: false,
          })
            .formatToParts(now)
            .find((part) => part.type === "hour");
          if (!mstTimePart) {
            return (
              <h1 className="text-2xl font-bold text-white">
                Time not available
              </h1>
            );
          }
          const hours = parseInt(mstTimePart.value, 10);
          let greeting;
          if (hours >= 6 && hours < 9) {
            greeting = "Rise and Shine Hackers!";
          } else if (hours >= 9 && hours < 12) {
            greeting = "Good Morning Hackers!";
          } else if (hours >= 12 && hours < 15) {
            greeting = "Good Afternoon Hackers!";
          } else if (hours >= 15 && hours < 21) {
            greeting = "Good Evening Hackers!";
          } else {
            greeting = "Good Night Hackers!";
          }
          return <h1 className="text-2xl font-bold text-white">{greeting}</h1>;
        })()}
        <Countdown />
        <Socials />
      </div>
      <PhotoWall />
      <Schedule />
    </div>
  );
}
