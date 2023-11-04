import { Inter } from "next/font/google";
import "./globals.css";
import ContactButton from "@/components/ui/contact-button";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Script from "next/script";

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
        {/* Global site tag (gtag.js) - Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K5BCRCHP85"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K5BCRCHP85');
        `}
        </Script>
        <Script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/e65e08f9954f75984d70ecce/script.js"
        />
      </body>
    </html>
  );
}
