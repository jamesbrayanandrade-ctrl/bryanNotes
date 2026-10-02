import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Night//Notes',
  description: 'A private, local-first archive for ideas worth keeping.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
