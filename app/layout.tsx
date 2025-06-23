import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Brain, Github } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neurodiversity Screener | ADHD & Autism Self-Assessment",
  description: "Take validated ADHD and Autism screening questionnaires. Quick, private, and scientifically-backed self-assessments with instant results.",
  keywords: ["ADHD", "Autism", "neurodiversity", "screening", "self-assessment", "ASRS", "AQ-10"],
  authors: [{ name: "Faraja Bien", url: "https://github.com/farajabien" }],
  creator: "Faraja Bien",
  publisher: "Faraja Bien",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Neurodiversity Screener | ADHD & Autism Self-Assessment",
    description: "Take validated ADHD and Autism screening questionnaires with instant results.",
    type: "website",
    locale: "en_US",
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mobile-safe-padding flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity nav-item">
          <Brain className="h-6 w-6 text-primary flex-shrink-0" />
          <span className="text-xl font-bold">NeuroScreen</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="nav-item text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/adhd" className="nav-item text-sm font-medium hover:text-primary transition-colors">
            ADHD Screener
          </Link>
          <Link href="/autism" className="nav-item text-sm font-medium hover:text-primary transition-colors">
            Autism Screener
          </Link>
          <Link href="/analytics" className="nav-item text-sm font-medium hover:text-primary transition-colors">
            Analytics
          </Link>
          <Link href="/about" className="nav-item text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <Link 
          href="https://github.com/farajabien/neurodiversity-screener"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors nav-item min-w-[60px] justify-end"
        >
          <Github className="h-4 w-4 flex-shrink-0" />
          <span className="hidden sm:inline">GitHub</span>
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mobile-safe-padding py-8">
        <div className="grid-stable gap-8 md:grid-cols-4">
          {/* Branding */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Brain className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">NeuroScreen</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Validated neurodiversity screening tools to help you understand yourself better.
            </p>
          </div>

          {/* Screening Tools */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Screening Tools</h3>
            <div className="space-y-2 text-sm">
              <div>
                <Link href="/adhd" className="text-muted-foreground hover:text-foreground transition-colors">
                  ADHD Screener
                </Link>
              </div>
              <div>
                <Link href="/autism" className="text-muted-foreground hover:text-foreground transition-colors">
                  Autism Screener
                </Link>
              </div>
              <div>
                <Link href="/questionnaires/adhd-questionnaire-ASRS111.pdf" className="text-muted-foreground hover:text-foreground transition-colors">
                  ADHD PDF
                </Link>
              </div>
              <div>
                <Link href="/questionnaires/AQ-10_for_adults.pdf" className="text-muted-foreground hover:text-foreground transition-colors">
                  Autism PDF
                </Link>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Platform</h3>
            <div className="space-y-2 text-sm">
              <div>
                <Link href="/analytics" className="text-muted-foreground hover:text-foreground transition-colors">
                  📊 Analytics Dashboard
                </Link>
              </div>
              <div>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  ℹ️ About NeuroScreen
                </Link>
              </div>
              <div>
                <Link 
                  href="https://github.com/farajabien/neurodiversity-screener"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  🔗 GitHub Repository
                </Link>
              </div>
              <div>
                <Link 
                  href="https://github.com/farajabien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  👨‍💻 Developer
                </Link>
              </div>
            </div>
          </div>

          {/* Legal & Support */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Important</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>These are screening tools, not diagnostic instruments.</p>
              <p>Always consult healthcare professionals for proper evaluation.</p>
              <p className="pt-2 text-xs">
                Built with ❤️ for the neurodivergent community by{" "}
                <Link 
                  href="https://github.com/farajabien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Faraja Bien
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} NeuroScreen. Built with ❤️ for the neurodivergent community.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
