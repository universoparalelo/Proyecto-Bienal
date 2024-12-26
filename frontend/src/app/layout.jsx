import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "./componentes/Footer";
import { Header } from "./componentes/Header";
import Container from "./componentes/Container";

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

export default function Page({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} ${geistSans.variable}`}>
        <Header />
          <Container>
            {children}
          </Container>
        <Footer />
      </body>
    </html>
  );
}
