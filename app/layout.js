import "./globals.css";

export const metadata = {
  title: "Lanes — Future of Shipping",
  description:
    "Lanes is a shipping facilitation partner that orchestrates carriers, customs, and logistics so your team can focus on growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


