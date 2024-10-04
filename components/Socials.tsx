import { FaDiscord, FaInstagram } from "react-icons/fa";

export function Socials() {
  return (
    <div className="rounded-lg bg-white p-8">
      <h2 className="text-xl font-bold text-black pb-2">Connect With Us</h2>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-2 items-center">
          <FaInstagram size={24} />
          <span className="text-semibold text-xl">@mruhacks</span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FaDiscord size={24} />
          <span className="text-semibold text-xl">discord.gg/mruhacks</span>
        </div>
      </div>
    </div>
  );
}
