import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";
import "./globals.css";

export const metadata = {
  title: "DinFlor",
  description: "Онлайн-магазин цветов",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-[#E8F3F2] overflow-y-auto">
        <Header />
        <div className="mb-[130px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
