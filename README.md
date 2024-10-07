# MRUHacks Library Display

This is a web app that displays a photo wall, calendar, countdown, and social media QR codes for the MRUHacks 2024 hackathon. The photo wall is populated with photos from a Google Drive folder, and the calendar is populated with events from the `photowall.config.ts` file.

## Setup

1. Generate a Google Drive API key and add it to your .env.local
2. Create a Google Drive folder for your photos. Make sure the folder is **Public: Anyone can view**, and is in your personal drive. This will not work if the folder is in a shared drive, or if you're not the owner.
3. Grab the Google Drive folder id. The folder id is the last part of the URL when you're viewing the folder in Google Drive. For example, if the URL is `https://drive.google.com/drive/u/0/folders/1X2Y3Z4A5B6C7D8E9F0G`, the folder id is `1X2Y3Z4A5B6C7D8E9F0G`.
4. Add the folder id to your .env.local
5. Run `npm install` to install dependencies
6. Run `npm run dev` to start the development server
7. Share the Google Drive with whoever will be uploading photos

## Configuration

All configuration is done through the `photowall.config.ts` file. The following options are available:

### Calendar

Calendar events are displayed on the home page. You can add events to the calendar by adding them to the `calendar` array in the config file. Each event should have the following properties:

- `title`: The title of the event
- `startDateTime`: The starting date and time of the event in ISO 8601 format
- `endDateTime`: The ending date and time of the event in ISO 8601 format
- `location`: The location of the event

### Photos

Photos are displayed on the photo wall page. You can configure the photo wall by setting the following properties in the config file:

- `refreshRate`: The interval in milliseconds at which the photos are refreshed
- `rotationRate`: The interval in milliseconds at which the photos are rotated

The Google Drive data should be configured in the `.env.local` file.

### Countdown

The countdown is displayed on the home page. You can configure the countdown by setting the following properties in the config file:

- `hackingStartTime`: The starting date and time of the hackathon in ISO 8601 format
- `hackingEndTime`: The ending date and time of the hackathon in ISO 8601 format

### Socials

Social media QR codes are displayed on the home page. You can configure the social media links by adding them to the `socials` array in the config file. Each social media link should have the following properties:

- `name`: The name of the social media platform
- `title`: The title of the social media platform, shown on the QR code
- `qrCode`: The path to the QR code image, relative to the `public` directory
