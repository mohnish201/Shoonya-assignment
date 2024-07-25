import { Poppins } from "next/font/google";
import { Navbar } from "./Components/Navbar";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800'] });

export const metadata = {
  title: "Shoonya Wellness Retreat",
  description: "A Healthcare Wellness Web Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
