import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-950">
      <Header />
      <About />
      <Footer />
    </main>
  );
}
