import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Spotless Cleaning | Leaving Horry County Spotless",
  description: "Leaving Horry County Spotless. Professional residential, vacation rental, and commercial cleaning. Serving Aynor, Conway, Carolina Forest, Myrtle Beach & all of Horry County. Book your spotless clean today.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Spotless Cleaning | Professional Home Cleaning Services",
    description: "Leaving Horry County Spotless. Expert residential, vacation rental & commercial cleaning. Serving Aynor, Conway, Carolina Forest, Myrtle Beach and all of Horry County. Same-week availability.",
    images: [{ url: "/hero-kitchen.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
