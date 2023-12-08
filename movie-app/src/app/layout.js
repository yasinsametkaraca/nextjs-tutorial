import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/header";
import Providers from "@/app/Providers";
import Tabs from "@/components/Tabs";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie App',
  description: 'Movie App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>
              <Header></Header>
              {children}
          </Providers>
      </body>
    </html>
  )
}
