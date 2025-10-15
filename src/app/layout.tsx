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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
