// src/app/layout.tsx
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer"; 
import ContentWrapper from "@/components/common/ContentWrapper";

export const metadata = {
  title: "RR Foods",
  description: "Premium Premixes and Vending Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Use the client component for conditional padding */}
        <ContentWrapper>
          {children}
        </ContentWrapper>
        <Footer />
      </body>
    </html>
  );
}
