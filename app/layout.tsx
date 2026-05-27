import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Spotless Cleaning | Professional House Cleaning Services",
  description: "Trusted professional cleaning services. Residential & specialty cleaning in Rockville and Montgomery County. Licensed, insured, and background-checked cleaners. Book your spotless clean today.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Spotless Cleaning | Professional Home Cleaning Services",
    description: "Expert house cleaning, deep cleans, move-in/out, and more. Serving Rockville and Montgomery County. Same-week availability. 100% satisfaction guaranteed.",
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
