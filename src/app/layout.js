import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    title: "Victor's PortFolio",
    description: "PortFolio NextJS & TailwindCSS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="overflow-y-scroll no-scrollbar scroll-smooth">
            <body className="bg-black">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
