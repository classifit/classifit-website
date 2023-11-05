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

        <Script type="text/javascript">
          {`
          var _iub = _iub || [];
          _iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"cookiePolicyInOtherWindow":true,"floatingPreferencesButtonCaptionColor":"#FFFFFF00","floatingPreferencesButtonColor":"#FFFFFF","floatingPreferencesButtonDisplay":"anchored-bottom-right","perPurposeConsent":true,"siteId":3181733,"whitelabel":false,"cookiePolicyId":40888749,"lang":"it", "banner":{ "acceptButtonDisplay":true,"closeButtonRejects":true,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-bottom-right" }};
        `}
        </Script>
        <Script
          type="text/javascript"
          src="https://cs.iubenda.com/autoblocking/3181733.js"
        />
        <Script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          charSet="UTF-8"
          async
        />
      </body>
    </html>
  );
}
