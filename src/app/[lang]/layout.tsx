import Sidebar from "@/components/Sidebar";
import AuthContext from "@/contexts/AuthContext";
import ModalProvider from "@/providers/ModalProvider";
import { getDictionary } from "@/utils/dictionary";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Locale, i18n } from "../../../i18n-config";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music!",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { page, component } = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={figtree.className}>
        <AuthContext>
          <ModalProvider loginComponent={component.login} />
          <Sidebar navigation={page.navigation} library={page.library}>
            {children}
          </Sidebar>
        </AuthContext>
      </body>
    </html>
  );
}
