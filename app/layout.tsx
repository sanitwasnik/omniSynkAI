import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-4 border-b bg-black   text-emerald-50 grid justify-center gap-2 md:flex   " >
          <div className="text-center pt-1"><h3 className=""> We`re hiring - Join our team!</h3></div>
          <div className="text-center"><a href="https://www.omnisynkai.com/grow-with-us/careers"><button type="button" className="border-2 rounded-full border-indigo-600 p-1 hover:border-gray-400">⚡Open Positions</button></a></div>
        </div>
        {children}
      </body>
    </html>
  );
}
{/* <div className="p-4 border-b bg-black  text-emerald-50 flex justify-center gap-2  " >
          <div className="text-center pt-1"><h3 className=""> We`re hiring - Join our team!</h3></div>
          <div ><a href="https://www.omnisynkai.com/grow-with-us/careers"><button type="button" className="border-2 rounded-full border-indigo-600 p-1 hover:border-gray-400">⚡Open Positions</button></a></div>
        </div> */}