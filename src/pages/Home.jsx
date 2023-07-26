import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Tooltip } from '@chakra-ui/react';
import Navbar from '../components/Navbar.jsx';
import RejosariBg from '../assets/rejosari-bg.png';
import MenuProfile from '../assets/menu_profile.png';
import NewsProfile from '../assets/menu_news.png';
import UmkmProfile from '../assets/menu_umkm.png';
import GalleryProfile from '../assets/menu_gallery.png';
import OrgPaper from '../assets/org_paper.png';
import OrgRw from '../assets/org_rw.png';

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
                  href="#news"
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
      {/* News & gallery */}
      <div className="w-full h-[520px]">
        <div className="px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] mx-auto h-full">
          {/* Header */}
          <div className="grid grid-cols-12">
            {/* News */}
            <div className="flex items-center col-span-7 mr-[15px] border-b border-hijau">
              <a href="/">
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
            {/* Gallery */}
            <div className="flex items-center col-span-5 ml-[15px] border-b border-hijau">
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
          </div>
          <div className="grid grid-cols-12">
            {/* News */}
            <div className="flex items-center col-span-7 mr-[15px] mt-[20px]">
              {/* News Card 1 */}
              <div className="news-card w-[250px]">
                <div className="relative">
                  <img
                    src={RejosariBg}
                    alt="News"
                    className="w-full h-[186px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-2 text-sm text-white bg-opacity-50 bg-hijau">
                    Jun 23, 2023 {/* Replace with the actual date */}
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-bold text-hijau">
                  News Title
                </h3>
                <p className="mt-1 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id facilisis turpis. Proin condimentum, arcu nec
                  pharetra consequat, ipsum ante dignissim orci, sit amet
                  posuere risus dui quis quam.
                </p>
                <a
                  href="/"
                  className="block mt-3 font-bold text-green-500 hover:underline"
                >
                  Selengkapnya...
                </a>
              </div>
              {/* News Card 2 */}
              <div className="news-card w-[250px] ml-[15px]">
                <div className="relative">
                  <img
                    src={RejosariBg}
                    alt="News"
                    className="w-full h-[186px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-2 text-sm text-white bg-opacity-50 bg-hijau">
                    Jun 23, 2023 {/* Replace with the actual date */}
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-bold text-hijau">
                  News Title
                </h3>
                <p className="mt-1 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id facilisis turpis. Proin condimentum, arcu nec
                  pharetra consequat, ipsum ante dignissim orci, sit amet
                  posuere risus dui quis quam.
                </p>
                <a
                  href="/"
                  className="block mt-3 font-bold text-green-500 hover:underline"
                >
                  Selengkapnya...
                </a>
              </div>
              {/* News Card 3 */}
              <div className="news-card w-[250px] ml-[15px]">
                <div className="relative">
                  <img
                    src={RejosariBg}
                    alt="News"
                    className="w-full h-[186px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-2 text-sm text-white bg-opacity-50 bg-hijau">
                    Jun 23, 2023 {/* Replace with the actual date */}
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-bold text-hijau">
                  News Title
                </h3>
                <p className="mt-1 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id facilisis turpis. Proin condimentum, arcu nec
                  pharetra consequat, ipsum ante dignissim orci, sit amet
                  posuere risus dui quis quam.
                </p>
                <a
                  href="/"
                  className="block mt-3 font-bold text-green-500 hover:underline"
                >
                  Selengkapnya...
                </a>
              </div>
            </div>
            {/* Gallery */}
            <div className="flex items-center col-span-5 ml-[15px] mt-[20px]">
              {/* First Row */}
              <div className="flex flex-wrap">
                {/* First Photo Card */}
                <div className="photo-card relative w-[250px] h-[186px] overflow-hidden mr-2 mb-2">
                  <img
                    src={RejosariBg}
                    alt="Photo 1"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 text-white bg-hijau bg-opacity-60">
                    Photo 1 Title
                  </div>
                </div>
                {/* Second Photo Card */}
                <div className="photo-card relative w-[250px] h-[186px] overflow-hidden mb-2">
                  <img
                    src={RejosariBg}
                    alt="Photo 2"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 text-white bg-hijau bg-opacity-60">
                    Photo 2 Title
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-wrap">
                {/* Third Photo Card */}
                <div className="photo-card relative w-[250px] h-[186px] overflow-hidden mr-2 mb-2">
                  <img
                    src={RejosariBg}
                    alt="Photo 3"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 text-white bg-hijau bg-opacity-60">
                    Photo 3 Title
                  </div>
                </div>
                {/* Fourth Photo Card */}
                <div className="photo-card relative w-[250px] h-[186px] overflow-hidden mb-2">
                  <img
                    src={RejosariBg}
                    alt="Photo 4"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 text-white bg-hijau bg-opacity-60">
                    Photo 4 Title
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image section */}
      <div
        className="w-full h-[200px] bg-center bg-auto"
        style={{
          backgroundImage: `url(${RejosariBg})`,
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
    </>
  );
}
