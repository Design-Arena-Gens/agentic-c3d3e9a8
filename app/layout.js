import "./globals.css";
export const metadata = {
  title: "Jungle Tales",
  description: "A short animated story with a lion, a rabbit, and an owl.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  );
}

