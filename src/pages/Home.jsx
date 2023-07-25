import Navbar from '../components/Navbar.jsx';
import RejosariBg from '../assets/rejosari-bg.png';
import MenuProfile from '../assets/menu_profile.png';
import NewsProfile from '../assets/menu_news.png';
import UmkmProfile from '../assets/menu_umkm.png';
import GalleryProfile from '../assets/menu_gallery.png';

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
      {/* Menu icons */}
      <div className="w-full h-[280px] bg-[#F2F2F2]">
        <div className="px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] mx-auto flex justify-center items-center h-full">
          <div className="w-1/4 h-[192px] mx-4 flex flex-col items-center text-[#99A2BC]">
            <a className="text-center" href="/">
              <img src={MenuProfile} alt="" className="h-[160px] mb-2" />
              Profil Dusun
            </a>
          </div>
          <div className="w-1/4 h-[192px] mx-4 flex flex-col items-center text-[#99A2BC]">
            <a className="text-center" href="/">
              <img src={NewsProfile} alt="" className="h-[160px] mb-2" />
              Berita & Informasi
            </a>
          </div>
          <div className="w-1/4 h-[192px] mx-4 flex flex-col items-center text-[#99A2BC]">
            <a className="text-center" href="/">
              <img src={UmkmProfile} alt="" className="h-[160px] mb-2" />
              UMKM
            </a>
          </div>
          <div className="w-1/4 h-[192px] mx-4 flex flex-col items-center text-[#99A2BC]">
            <a className="text-center" href="/">
              <img src={GalleryProfile} alt="" className="h-[160px] mb-2" />
              Galeri
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
