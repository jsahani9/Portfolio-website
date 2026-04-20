import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jasveensingh.dev"),
  title: "Jasveen Singh — AI/ML Engineer",
  description:
    "Junior AI/ML Engineer specializing in Generative AI, RAG pipelines, and agentic systems. CS graduate from York University, based in Toronto, Canada.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "RAG",
    "LLM",
    "AWS Bedrock",
    "LangChain",
    "Toronto",
    "Jasveen Singh",
  ],
  authors: [{ name: "Jasveen Singh" }],
  creator: "Jasveen Singh",
  openGraph: {
    type: "website",
    locale: "en_CA",
    title: "Jasveen Singh — AI/ML Engineer",
    description:
      "Junior AI/ML Engineer specializing in Generative AI, RAG pipelines, and agentic systems.",
    siteName: "Jasveen Singh Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jasveen Singh — AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasveen Singh — AI/ML Engineer",
    description:
      "Junior AI/ML Engineer specializing in Generative AI, RAG pipelines, and agentic systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
