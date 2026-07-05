import "./globals.css";

export const metadata = {
  title: "Mirabel & Godspower - Wedding Invite",
  description: "A cinematic love story • 2026",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>💍</text></svg>"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0b0814" />
      </head>
      <body>{children}</body>
    </html>
  );
}
