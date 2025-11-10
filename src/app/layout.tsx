import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import AnimatedBackgroundPro from "@/components/ui/AnimatedBackground";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "VTR soluçoes digtas",
  description: "Criando soluções digitas para seu negocio",
  icons: {
    icon: "/images/navbar/logo2.0.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative text-white">
        <Navbar/>
        <AnimatedBackgroundPro/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
