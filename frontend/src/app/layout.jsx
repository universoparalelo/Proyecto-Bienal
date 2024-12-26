import localFont from "next/font/local";
import "./reactComponents/estilos/globals.css";
import { Footer } from "./reactComponents/componentes/Footer";
import { Header } from "./reactComponents/componentes/Header";
import Container from "./reactComponents/componentes/Container";

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
