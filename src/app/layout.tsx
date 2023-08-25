import Sidebar from "@/components/Sidebar";
import AuthContext from "@/contexts/AuthContext";
import ModalProvider from "@/providers/ModalProvider";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <AuthContext>
          <ModalProvider />
          <Sidebar>{children}</Sidebar>
        </AuthContext>
      </body>
    </html>
  );
}
