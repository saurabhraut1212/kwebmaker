
"use client"
import localFont from "next/font/local";
import "./globals.css";
import dynamic from 'next/dynamic';
import client from '../../lib/apolloClient';

const ApolloProvider = dynamic(
  () => import('@apollo/client').then(mod => mod.ApolloProvider),
  { ssr: false }
);

const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}