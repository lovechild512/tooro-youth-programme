export const metadata = {
  title: "Tooro Youth Programme",
  description: "Empowering youth through skills, culture, and leadership in the Tooro region.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
