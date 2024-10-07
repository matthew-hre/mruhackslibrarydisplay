import Image from "next/image";
import config from "@/photowall.config";

export function Socials() {
  return (
    <div className="rounded-lg bg-white p-8">
      <h2 className="text-2xl font-bold text-black pb-2">Connect With Us</h2>
      {config.socials.socialMedias.map((social, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-bold text-black pb-2">{social.title}</h2>
          <div className="flex flex-col gap-3 pb-4">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={social.qrCodeSrc}
                alt={`${social.name} QR`}
                width={96}
                height={96}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
