import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./provider/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
// import ClientOnly from "./components/ClientOnly";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone by nubicoder",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        {/* <ClientOnly> */}
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser} />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  );
}
