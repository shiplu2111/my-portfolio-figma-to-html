import "./globals.css";
import "animate.css";

export const metadata = {
  title: "My Portfolio",
  description: "By Shiplu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
