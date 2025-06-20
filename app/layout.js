import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Link } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  logo:<link href="logo.svg"/>,
  title: "AIJobCoach",
  description: "Your Job Mentor",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
