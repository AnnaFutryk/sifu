import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/modules/Header";
import Footer from "../components/modules/Footer";

export const metadata: Metadata = {
  title: "SIFU",
  description: "ON THE PATH OF VENGEANCE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden" }}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
