import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: "Bhavya Ngo",
  description: "Let's Help Others With Your Charity",
  openGraph: {
    url: "https://bhavya-ngo.vercel.app/",
    title: "Bhavya Ngo",
    description:
      "Let's Help Others With Your Charity. We are dedicated to making a difference in child education by providing financial assistance and educational support to underprivileged children",
    images: [
      {
        url: "/BhvyaLogo.png",
        alt: "Bhavya NGO Logo",
        width:100,
        height:100
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: "#0F2B28" }}>
        {children}
      </body>
    </html>
  );
}
