import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-950 to-amber-800">
      <Header />
      <About />
      <Footer />
    </main>
  );
}
