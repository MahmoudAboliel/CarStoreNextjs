import "./globals.css";
import type { Metadata } from "next";
import { tajawal } from "@/lib/fonts";
import { ToastContainer } from "react-toastify";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import AppLoader from "@/components/AppLoader";

export const metadata: Metadata = {
  title: "سيارتي",
  description: "وجهتك الأولى لشراء وبيع السيارات الجديدة والمستعملة في العالم العربي! نقدم لكم منصة متكاملة تتيح لك تصفح آلاف السيارات من مختلف الماركات والموديلات، مع تفاصيل دقيقة حول المواصفات والأسعار وفحص الجودة.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Readonly<RootLayoutProps>) {

  // fetchSettings();

  return (
    <html lang="en">
      <body
        className={`${tajawal.variable} antialiased`}
      >
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />

          <main className="overflow-hidden">
            <AppLoader />
            <Header />
            <div className="mt-[67px]">
              {children}
            </div>
            <Footer />
          </main>
      </body>
    </html>
  );
}
