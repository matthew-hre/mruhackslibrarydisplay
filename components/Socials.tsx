import { FaInstagram } from "react-icons/fa";

import DiscordQR from "@/app/discord.png";
import HackerpackQR from "@/app/hackerpack.png";

export function Socials() {
  return (
    <>
      <div className="rounded-lg bg-white p-8">
        <h2 className="text-xl font-bold text-black pb-2">Connect With Us</h2>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center">
            <FaInstagram size={24} />
            <span className="text-semibold text-xl">@mruhacks</span>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-8">
        <h2 className="text-xl font-bold text-black pb-2">Join the Discord</h2>
        <div className="flex flex-col gap-3 pb-4">
          <div className="flex flex-row gap-2 items-center">
            <img src={DiscordQR.src} alt="Discord Logo" className="w-24 h-24" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-black pb-2">
          View the Hackerpack
        </h2>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center">
            <img
              src={HackerpackQR.src}
              alt="Discord Logo"
              className="w-24 h-24"
            />
          </div>
        </div>
      </div>
    </>
  );
}
