import Navbar from '../components/Navbar.jsx';
import RejosariBg from '../assets/rejosari-bg.png';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero section */}
      <div
        className="w-full h-[600px] bg-center bg-cover"
        style={{
          backgroundImage: `url(${RejosariBg})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full py-12 ">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mt-8 mb-6 text-4xl font-bold text-gray-100 lg:text-5xl">
                  Selamat Datang di Website Dusun Rejosari!
                </h2>
                <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                  Platform informasi digital yang memberikan akses mudah dan
                  terkini kepada warga dusun mengenai kegiatan masyarakat yang
                  relevan dan bermanfaat.
                </p>
                <a
                  className="inline-block w-full px-3 py-3 mb-4 text-gray-100 transition duration-200 border-2 border-transparent rounded bg-hijau md:w-auto md:mr-6 hover:bg-hijau-gelap"
                  href="#"
                >
                  Lihat Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
