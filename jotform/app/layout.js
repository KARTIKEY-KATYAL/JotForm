import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
// import { Button } from "@/components/ui/Button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "JotForm",
  description: "Your Personalised Form Builder",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" data-theme="night">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer className="bg-gray-800 text-white p-4" />
        </div>
      </body>
    </html>
      </ClerkProvider>
  );
}
