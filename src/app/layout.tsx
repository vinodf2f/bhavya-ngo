import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhavya Ngo",
  description: "Let's Help Others With Your Charity",
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
