import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ana's Portfolio",
  description: "Web site created with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/44428bec62.js" />
      </head>
      <body style={{ margin: 0 }}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
