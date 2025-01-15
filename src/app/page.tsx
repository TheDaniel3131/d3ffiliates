// page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { ThemeProvider } from "@/components/ThemeProvider"; // Adjust the path as necessary

export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Hero />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
