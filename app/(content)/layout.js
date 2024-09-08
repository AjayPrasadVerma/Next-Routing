import MainHeader from "@/components/main-header";
import "../globals.css";

export const metadata = {
  title: "Next.js 13 Routing and Page Rendering Deep Dive",
  description:
    "Explore advanced concepts of Next.js 13 routing, including dynamic routes, nested layouts, and optimized page rendering techniques.",
  keywords: [
    "Next.js",
    "React",
    "Routing",
    "Page Rendering",
    "Web Development",
  ],
  author: "Ajay Prasad Verma",
  openGraph: {
    title: "Next.js 13 Routing and Rendering Mastery",
    description:
      "Learn how to create efficient and dynamic web applications with Next.js 13's powerful routing and rendering features.",
    type: "website",
    url: "https://your-website.com/nextjs-routing-rendering",
    image: "https://your-website.com/og-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
