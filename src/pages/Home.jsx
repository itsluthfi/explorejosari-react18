import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Tooltip } from '@chakra-ui/react';
import Navbar from '../components/Navbar.jsx';
import RejosariBg from '../assets/rejosari-bg.png';
import RejosariBg2 from '../assets/rejosari-bg2.jpg';
import MenuProfile from '../assets/menu_profile.png';
import NewsProfile from '../assets/menu_news.png';
import UmkmProfile from '../assets/menu_umkm.png';
import GalleryProfile from '../assets/menu_gallery.png';
import News1 from '../assets/news_1.jpg';
import News2 from '../assets/news_2.jpg';
import News3 from '../assets/news_3.jpg';
import Gale1 from '../assets/gale_1.jpg';
import Gale2 from '../assets/gale_2.jpg';
import Gale3 from '../assets/gale_3.jpg';
import Gale4 from '../assets/gale_4.jpg';
import OrgPaper from '../assets/org_paper.png';
import OrgRw from '../assets/org_rw.png';
import Footer from '../components/Footer.jsx';

export default function Home() {
  const positionCenter = [-7.6907, 110.4006];
  // markers
  const markers = [
    {
      id: 1,
      geocode: [-7.6879, 110.40283],
      popUp: 'Masjid Zaelani',
    },
    {
      id: 2,
      geocode: [-7.68759, 110.40309],
      popUp: 'Rumah RT 01 Rejosari',
    },
    {
      id: 3,
      geocode: [-7.68714, 110.40265],
      popUp: 'Rumah RT 02 Rejosari',
    },
    {
      id: 4,
      geocode: [-7.68738, 110.40242],
      popUp: 'Rumah RW 20 Rejosari',
    },
    {
      id: 5,
      geocode: [-7.69442, 110.40046],
      popUp: 'Balai Padukuhan Rejosari',
    },
    {
      id: 6,
      geocode: [-7.69442, 110.40035],
      popUp: 'Rumah Dukuh Rejosari',
    },
    {
      id: 7,
      geocode: [-7.69332, 110.39962],
      popUp: 'Lapangan Mrisen',
    },
    {
      id: 7,
      geocode: [-7.68747, 110.40149],
      popUp: 'SD Negeri Rejosari',
    },
  ];

  return (
    <>
      <Navbar />
      {/* Hero section */}
      <div
        className="w-full h-[600px] bg-center bg-cover animate-background"
        style={{
          backgroundImage: `url(${RejosariBg})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full py-12 ">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mt-8 mb-6 text-3xl font-bold text-gray-100 lg:text-5xl">
                  Selamat Datang di Website Dusun Rejosari!
                </h2>
                <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                  Platform informasi digital yang memberikan akses mudah dan
                  terkini kepada warga dusun mengenai kegiatan masyarakat yang
                  relevan dan bermanfaat.
                </p>
                <a
                  className="inline-block w-full px-3 py-3 mb-4 text-gray-100 transition duration-200 border-2 border-transparent rounded bg-hijau md:w-auto md:mr-6 hover:bg-hijau-gelap"
                  href="#berita"
                >
                  Lihat Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu icons */}
      <div className="w-full h-[280px] bg-[#F2F2F2] mb-[40px]">
        <div className="px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] mx-auto flex justify-center items-center h-full">
          <div className="w-1/4 h-[192px] mx-4 flex flex-col items-center text-[#99A2BC]">
            <a className="text-center" href="/profil">
              <img src={MenuProfile} alt="" className="h-[160px] mb-2" />
              Profil Dusun
            </a>
          </div>
          <div className="w-1/4 h-[192px] mx-4 flex flex-col items-center text-[#99A2BC]">
            <a className="text-center" href="/berita">
              <img src={NewsProfile} alt="" className="h-[160px] mb-2" />
              Berita & Informasi
            </a>
          </div>
          <div className="w-1/4 h-[192px] mx-4 flex flex-col items-center text-[#99A2BC]">
            <a className="text-center" href="/umkm">
              <img src={UmkmProfile} alt="" className="h-[160px] mb-2" />
              UMKM
            </a>
          </div>
          <div className="w-1/4 h-[192px] mx-4 flex flex-col items-center text-[#99A2BC]">
            <a className="text-center" href="/galeri">
              <img src={GalleryProfile} alt="" className="h-[160px] mb-2" />
              Galeri
            </a>
          </div>
        </div>
      </div>
      {/* News & gallery */}
      <div id="berita" className="w-full h-auto md:h-[520px]">
        <div className="px-[10px] md:px-[50px] lg:px-[100px] xl:px-[200px] mx-auto h-full">
          <div className="grid grid-cols-12">
            <div className="flex items-center col-span-12 md:col-span-7 mr-0 md:mr-[15px] border-b border-hijau">
              <a href="/berita">
                <div className="flex items-center">
                  <div className="text-xl text-hijau mr-[5px] flex items-center">
                    Berita <span className="ml-[5px] font-bold">Terkini</span>
                  </div>
                  <div>
                    <Tooltip
                      hasArrow
                      label="Lihat lainnya"
                      bg="black"
                      color="gray.300"
                      placement="right"
                    >
                      <svg
                        width="15"
                        height="18"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 9L0 17.6603L0 0.339746L15 9Z"
                          fill="#416100"
                        />
                      </svg>
                    </Tooltip>
                  </div>
                </div>
              </a>
            </div>
            <div className="hidden lg:block md:hidden items-center col-span-12 md:col-span-5 mt-5 md:mt-0 ml-0 md:ml-[15px] border-b border-hijau">
              <a href="/galeri">
                <div className="flex items-center">
                  <div className="text-xl text-hijau mr-[5px] flex items-center">
                    Galeri <span className="ml-[5px] font-bold">Foto</span>
                  </div>
                  <div>
                    <Tooltip
                      hasArrow
                      label="Lihat lainnya"
                      bg="black"
                      color="gray.300"
                      placement="right"
                    >
                      <svg
                        width="15"
                        height="18"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 9L0 17.6603L0 0.339746L15 9Z"
                          fill="#416100"
                        />
                      </svg>
                    </Tooltip>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="flex flex-col md:flex-row items-center col-span-12 md:col-span-7 mr-0 md:mr-[15px] mt-[20px]">
              <div className="news-card w-full md:w-[250px]">
                {/* News Card 1 */}
                <div className="relative">
                  <img
                    src={News1}
                    alt="News"
                    className="w-full h-[186px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-2 text-sm text-white bg-opacity-50 bg-hijau">
                    Jul 15, 2023 {/* Replace with the actual date */}
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-bold text-hijau">
                  Sosialisasi Potensi Desa Wisata dan Pembuatan...
                </h3>
                <p className="mt-1 text-gray-500">
                  Mahasiswa KKN-PPM UGM Sub Unit Dusun Rejosari melakukan
                  sosialisasi potensi desa wisata dan pembuatan pestisida yang
                  dilaksanakan bersamaan dengan pertemuan kelompok tani Dusun
                  Rejosari.
                </p>
                <a
                  href="/"
                  className="block mt-3 font-bold text-green-500 hover:underline"
                >
                  Selengkapnya...
                </a>
              </div>
              <div className="news-card w-full md:w-[250px] ml-0 md:ml-[15px] mt-5 md:mt-0">
                {/* News Card 2 */}
                <div className="relative">
                  <img
                    src={News2}
                    alt="News"
                    className="w-full h-[186px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-2 text-sm text-white bg-opacity-50 bg-hijau">
                    Jul 18, 2023 {/* Replace with the actual date */}
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-bold text-hijau">
                  Kegiatan KKN-PPM UGM di TPA Masjid Zaelani
                </h3>
                <p className="mt-1 text-gray-500">
                  Berbagai kegiatan dilaksanakan oleh mahasiswa KKN-PPM UGM Sub
                  Unit Dusun Rejosari di TPA Masjid Zaelani seperti sosialisasi
                  pentingnya hidup sehat dan pengenalan emosi.
                </p>
                <a
                  href="/"
                  className="block mt-3 font-bold text-green-500 hover:underline"
                >
                  Selengkapnya...
                </a>
              </div>
              <div className="news-card w-full md:w-[250px] ml-0 md:ml-[15px] mt-5 md:mt-0">
                {/* News Card 3 */}
                <div className="relative">
                  <img
                    src={News3}
                    alt="News"
                    className="w-full h-[186px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-2 text-sm text-white bg-opacity-50 bg-hijau">
                    Jul 29, 2023 {/* Replace with the actual date */}
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-bold text-hijau">
                  Sosialisasi UMKM di Pertemuan PKK...
                </h3>
                <p className="mt-1 text-gray-500">
                  Mahasiswa KKN-PPM UGM Sub Unit Dusun Rejosari melakukan
                  sosialisasi UMKM seperti rencana pemasaran, pendaftaran
                  E-Commerce, dan potensi wilayah Padukuhan Rejosari.
                </p>
                <a
                  href="/"
                  className="block mt-3 font-bold text-green-500 hover:underline"
                >
                  Selengkapnya...
                </a>
              </div>
            </div>
            <div className="lg:hidden md:hidden flex items-center col-span-12 md:col-span-5 mt-5 md:mt-0 ml-0 md:ml-[15px] border-b border-hijau">
              <a href="/">
                <div className="flex items-center">
                  <div className="text-xl text-hijau mr-[5px] flex items-center">
                    Galeri <span className="ml-[5px] font-bold">Foto</span>
                  </div>
                  <div>
                    <Tooltip
                      hasArrow
                      label="Lihat lainnya"
                      bg="black"
                      color="gray.300"
                      placement="right"
                    >
                      <svg
                        width="15"
                        height="18"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 9L0 17.6603L0 0.339746L15 9Z"
                          fill="#416100"
                        />
                      </svg>
                    </Tooltip>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center col-span-12 md:col-span-5 ml-0 md:ml-[15px] mt-[20px]">
              <div className="flex flex-wrap">
                <div className="photo-card relative w-full md:w-[250px] h-[186px] md:mr-2 md:mb-2 mb-5 md:mb-0">
                  {/* First Photo Card */}
                  <img
                    src={Gale1}
                    alt="Photo 1"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 text-white bg-hijau bg-opacity-60">
                    Lomba Takbir Keliling 2023
                  </div>
                </div>
                <div className="photo-card relative w-full md:w-[250px] h-[186px] mb-5 md:mb-0">
                  {/* Second Photo Card */}
                  <img
                    src={Gale2}
                    alt="Photo 2"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 text-white bg-hijau bg-opacity-60">
                    Penyambutan Mahasiswa...
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="photo-card relative w-full md:w-[250px] h-[186px] md:mr-2 md:mb-2 mb-5 md:mb-0">
                  {/* Third Photo Card */}
                  <img
                    src={Gale3}
                    alt="Photo 3"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 text-white bg-hijau bg-opacity-60">
                    Penyembelihan Qurban...
                  </div>
                </div>
                <div className="photo-card relative w-full md:w-[250px] h-[186px] mb-5 md:mb-0">
                  {/* Fourth Photo Card */}
                  <img
                    src={Gale4}
                    alt="Photo 4"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 text-white bg-hijau bg-opacity-60">
                    Pembuatan Pestisida...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image section */}
      <div
        className="w-full h-[400px] bg-center bg-cover"
        style={{
          backgroundImage: `url(${RejosariBg2})`,
        }}
      ></div>
      {/* Organization section */}
      <div className="items-center w-full">
        <div className="text-xl text-center font-bold text-hijau mt-[40px] mb-[20px]">
          Keorganisasian
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <img src={OrgPaper} className="mr-[15px]" alt="" />
          <img src={OrgRw} className="ml-[15px]" alt="" />
        </div>
      </div>
      {/* Map section */}
      <div className="w-full">
        <div className="text-xl text-center text-hijau mt-[40px] mb-[20px]">
          Peta <span className="font-bold text-hijau">Wilayah Dusun</span>
        </div>
        <div className="map-component">
          <div className="map">
            <MapContainer
              center={positionCenter}
              zoom={16}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {markers.map((marker) => (
                <Marker key="id" position={marker.geocode}>
                  <Popup>{marker.popUp}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
