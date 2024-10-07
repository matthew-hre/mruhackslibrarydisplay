import { Schedule } from "@/components/Schedule";
import { PhotoWall } from "@/components/PhotoWall";
import { Socials } from "@/components/Socials";
import { Countdown } from "@/components/Countdown";
import { Greeting } from "@/components/Greeting";

export default async function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full h-screen bg-gradient-to-br from-blue-500 to-purple-500 gap-4 p-4 flex flex-row">
      <div className="flex flex-col flex-1 gap-4">
        <Greeting />
        <Countdown />
        <Socials />
      </div>
      <PhotoWall />
      <Schedule />
    </div>
  );
}
