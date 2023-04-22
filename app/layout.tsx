import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./provider/ToasterProvider";
// import ClientOnly from "./components/ClientOnly";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone by nubicoder",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly> */}
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  );
}
