import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HabitQuest Gamification Prototype",
  description: "A clickable habit-tracking experience where small steps build real momentum.",
  openGraph: {
    title: "HabitQuest Gamification Prototype",
    description: "Small steps. Real momentum.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "HabitQuest — Small steps. Real momentum." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HabitQuest Gamification Prototype",
    description: "Small steps. Real momentum.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
