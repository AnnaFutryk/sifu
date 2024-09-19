import type { Metadata } from "next";
import "./globals.css";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
