import "./globals.css";
import NavbarDock from "@/components/NavbarDock";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <NavbarDock />
        {children}
      </body>
    </html>
  );
}
