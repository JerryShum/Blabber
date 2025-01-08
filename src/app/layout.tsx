import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav/Navbar';
import Providers from './Providers';
import Footer from '@/components/footer/Footer';

const notoSans = Noto_Sans({
   subsets: ['latin'],
   variable: '--font-noto-sans',
});

const josefinSans = Josefin_Sans({
   subsets: ['latin'],
   variable: '--font-josefin-sans',
});

export const metadata: Metadata = {
   title: 'Blabber',
   description: 'Minimalistic and simple blog platform.',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${josefinSans.variable} ${notoSans.variable} antialiased `}
         >
            <Providers>
               <div className="sm:px-10 md:px-20 xl:px-30 2xl:px-60 relative">
                  <Navbar />
                  <main>{children}</main>
                  <Footer />
               </div>
            </Providers>
         </body>
      </html>
   );
}
