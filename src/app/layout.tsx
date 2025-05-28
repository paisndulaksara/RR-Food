// src/app/layout.tsx
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ContentWrapper from '@/components/common/ContentWrapper'; 
import Providers from './providers'; // 🟨 import this 
import FloatingButtons from '@/components/common/FloatingButtons';

export const metadata = {
  title: 'RR Foods',
  description: 'Premium Premixes and Vending Solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <Providers>
          <Header />
          <ContentWrapper>{children}</ContentWrapper>
          <Footer />
          <FloatingButtons />
        </Providers>
      </body>
    </html>
  );
}
