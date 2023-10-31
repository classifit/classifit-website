import { Inter } from "next/font/google";
import "./globals.css";
import ContactButton from "@/components/ui/contact-button";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ContactButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
