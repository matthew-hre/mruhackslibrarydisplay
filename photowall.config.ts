interface CalendarEvent {
  title: string;
  location: string;
  startDateTime: string;
  endDateTime: string;
}

interface CalendarConfig {
  events: CalendarEvent[];
}

interface CountdownConfig {
  hackingStartTime: string;
  hackingEndTime: string;
}

interface LibraryDisplayConfig {
  calendar: CalendarConfig;
  countdown: CountdownConfig;
  socials: SocialsConfig;
  photowall: PhotoWallConfig;
}

interface SocialMedia {
  name: string;
  title: string;
  qrCodeSrc: string;
}

interface SocialsConfig {
  socialMedias: SocialMedia[];
}

interface PhotoWallConfig {
  refreshRate: number;
  rotationRate: number;
}

const config: LibraryDisplayConfig = {
  countdown: {
    hackingStartTime: "2024-10-05T10:00:00",
    hackingEndTime: "2024-10-06T11:00:00",
  },
  photowall: {
    refreshRate: 30 * 60 * 1000,
    rotationRate: 10000,
  },
  socials: {
    socialMedias: [
      {
        name: "Instagram",
        title: "Follow our Instagram",
        qrCodeSrc: "/qrcodes/insta.png",
      },
      {
        name: "Discord",
        title: "Join the Discord",
        qrCodeSrc: "/qrcodes/discord.png",
      },
      {
        name: "Hackerpack",
        title: "View the Hackerpack",
        qrCodeSrc: "/qrcodes/hackerpack.png",
      },
    ],
  },
  calendar: {
    events: [
      {
        title: "Check-In",
        startDateTime: "2024-10-05T08:30:00",
        endDateTime: "2024-10-05T10:00:00",
        location: "MRUHacks Help Desk",
      },
      {
        title: "Opening Ceremony",
        startDateTime: "2024-10-05T10:00:00",
        endDateTime: "2024-10-05T10:30:00",
        location: "Ideas Lounge",
      },
      {
        title: "Hacking Begins",
        startDateTime: "2024-10-05T10:30:00",
        endDateTime: "2024-10-05T10:45:00",
        location: "First Floor",
      },
      {
        title: "Lunch",
        startDateTime: "2024-10-05T12:00:00",
        endDateTime: "2024-10-05T13:00:00",
        location: "The Atrium",
      },
      {
        title: "Dinner",
        startDateTime: "2024-10-05T19:45:00",
        endDateTime: "2024-10-05T21:00:00",
        location: "Ideas Lounge",
      },
      {
        title: "Hackathon Movie Screening",
        startDateTime: "2024-10-05T22:00:00",
        endDateTime: "2024-10-06T01:00:00",
        location: "Visualization Classroom",
      },
      {
        title: "Video Games Night Session",
        startDateTime: "2024-10-05T22:00:00",
        endDateTime: "2024-10-06T01:00:00",
        location: "Ideas Lounge",
      },
      {
        title: "Breakfast",
        startDateTime: "2024-10-06T09:00:00",
        endDateTime: "2024-10-06T10:00:00",
        location: "Ideas Lounge",
      },
      {
        title: "Hacking Ends",
        startDateTime: "2024-10-06T11:00:00",
        endDateTime: "2024-10-06T11:00:00",
        location: "First Floor",
      },
      {
        title: "Lunch",
        startDateTime: "2024-10-06T12:00:00",
        endDateTime: "2024-10-06T13:00:00",
        location: "Ideas Lounge",
      },
      {
        title: "Judging Tables Released",
        startDateTime: "2024-10-06T12:45:00",
        endDateTime: "2024-10-06T12:50:00",
        location: "Ideas Lounge",
      },
      {
        title: "Judging",
        startDateTime: "2024-10-06T13:00:00",
        endDateTime: "2024-10-06T14:30:00",
        location: "Ideas Lounge",
      },
      {
        title: "Closing Ceremony",
        startDateTime: "2024-10-06T15:00:00",
        endDateTime: "2024-10-06T15:30:00",
        location: "Main Stage",
      },
    ],
  },
};

export default config;
