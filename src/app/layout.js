import { PT_Sans } from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/Navbar';

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],

})

export const metadata = {
  title: "Movies",
  description: "Mark Your Watched Movies!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ptSans.className} antialiased`} style={{ backgroundColor: '#FFEEAD' }}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
