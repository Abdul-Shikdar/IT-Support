import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdul's Tech Solutions — Computer Repair Willenhall & West Midlands",
  description: "Friendly, honest computer repair and IT support in Willenhall and the West Midlands. Call or WhatsApp Abdul: 07356 287590. No fix, no fee.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
