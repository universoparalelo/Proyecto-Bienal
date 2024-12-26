import localFont from "next/font/local";
import "./reactComponents/estilos/globals.css";
import { RootFooter } from "./reactComponents/componentes/footer";
import { RootHeader } from "./reactComponents/componentes/header";

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
  title: "Bienal de Escultura",
  description: "Descubre la Bienal de Escultura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"${geistMono.variable} ${geistSans.variable}"}>
        <RootHeader />
        {children}
        <RootFooter />
      </body>
    </html>
  );
}
