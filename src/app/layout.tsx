import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
      <Header />
      <body className="">
        
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
