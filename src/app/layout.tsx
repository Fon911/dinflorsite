import { LoginModalWrapper } from "@/features/auth";
import { CartProvider, FavoritesProvider } from "@/shared/store";
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

const Login = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-[#E8F3F2] overflow-y-auto w-full">
        <CartProvider>
          <FavoritesProvider>
            <Header isLoggedIn={Login} />
            <div className="mb-[130px]">{children}</div>

            <Footer />

            {/* Модальное окно входа - показывается только если пользователь не залогинен */}
            <LoginModalWrapper isLoggedIn={Login} />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
