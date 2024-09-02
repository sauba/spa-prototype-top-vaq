import About from "@/components/About";
import Bull from "@/components/Bull";
import Cowboy from "@/components/Cowboy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Horse from "@/components/Horse";

export default function Home() {

  return (
    <div className={`w-full min-h-screen mx-auto flex flex-col justify-center items-center bg-amber-950 text-zinc-100 font-pt-mono`}>
      <Header />
      <About />
      <div className={`w-full flex justify-center items-center xl:px-32 bg-bois bg-center bg-cover`}>
        <Bull />
      </div>

      <div className={`w-full flex justify-center items-center my-16 xl:px-32 bg-cavalos bg-center bg-cover`}>
        <Horse />
      </div>

      <div className={`w-full flex justify-center items-center xl:px-32 bg-vaqueiros bg-center bg-cover`}>
        <Cowboy />
      </div>
      <Footer />
    </div>
  )
}
