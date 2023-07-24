import './globals.css'
import { Inter } from 'next/font/google'

import SearchBar from './search-bar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Logo />
          <SearchBar />
        </nav>
        {children}
      </body>
    </html>
  );
}

function Logo() {
  return <img src="/next.svg" />;
}
