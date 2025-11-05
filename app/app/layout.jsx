export const metadata = { title: "Tooro Youth Programme" };

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ padding: "40px", fontSize: "24px" }}>
        {children}
      </body>
    </html>
  );
}
