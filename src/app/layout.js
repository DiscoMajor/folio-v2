import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Victor's Folio",
    description: "Next JS APP",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="overflow-y-scroll no-scrollbar scroll-smooth">
            <body className="bg-black">{children}</body>
        </html>
    );
}
