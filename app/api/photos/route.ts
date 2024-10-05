import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const folderId = process.env.GOOGLE_FOLDER_ID;
  const apiKey = process.env.GOOGLE_DRIVE_KEY;

  const response = await fetch(
    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,webContentLink)&timestamp=${Date.now()}`,
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );

  https: if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch photos" },
      { status: 500 }
    );
  }

  const data = await response.json();
  interface Photo {
    id: string;
    name: string;
    webContentLink: string;
  }

  const photos = data.files.map((photo: Photo) => {
    const fileId = photo.webContentLink.split("id=")[1].split("&")[0];
    return `https://lh3.googleusercontent.com/d/${fileId}=w3000`;
  });
  return NextResponse.json(photos);
}
