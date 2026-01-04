import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdul Hadi - Full Stack Engineer & Security Architect",
  description: "Professional portfolio of Abdul Hadi, a full-stack engineer and security-focused architect specializing in building secure, scalable web applications.",
  keywords: ["full stack engineer", "security architect", "web development", "cybersecurity", "Next.js", "TypeScript"],
  authors: [{ name: "Abdul Hadi" }],
  openGraph: {
    title: "Abdul Hadi - Full Stack Engineer & Security Architect",
    description: "Professional portfolio showcasing projects and expertise in full-stack development and security architecture.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Hadi - Full Stack Engineer & Security Architect",
    description: "Professional portfolio showcasing projects and expertise in full-stack development and security architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
