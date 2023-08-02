import { useState } from 'react';
import RejosariLogo from '../assets/rejosari-logo.png';
import ic_home from '../assets/ic_home.svg';
import ic_profile from '../assets/ic_profile.svg';
import ic_news from '../assets/ic_news.svg';
import ic_smes from '../assets/ic_smes.svg';
import ic_gallery from '../assets/ic_gallery.svg';
import ic_contact from '../assets/ic_contact.svg';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      <div className="w-full h-[39px] bg-hijau text-white">
        <div className="px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] mx-auto flex justify-end items-center h-full">
          <svg
            className="mr-[5px]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9 17.39C17.64 16.59 16.89 16 16 16H15V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H8V10H10C10.2652 10 10.5196 9.89464 10.7071 9.70711C10.8946 9.51957 11 9.26522 11 9V7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5V4.59C16.1965 5.07237 17.2582 5.83747 18.0944 6.81983C18.9306 7.8022 19.5163 8.97255 19.8013 10.2307C20.0864 11.4889 20.0623 12.7974 19.7312 14.0442C19.4001 15.291 18.7717 16.4391 17.9 17.39ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.78 4.21 10.21L9 15V16C9 16.5304 9.21071 17.0391 9.58579 17.4142C9.96086 17.7893 10.4696 18 11 18M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
              fill="white"
            />
          </svg>
          <a href="https://ngaglik.slemankab.go.id/" target="_blank">
            Kapanewon Ngaglik, Kabupaten Sleman
          </a>
        </div>
      </div>
      <div className="w-full h-[124px] bg-white text-hijau">
        <div className="px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] mx-auto flex justify-between items-center h-full">
          <div className="flex items-center">
            <a href="/">
              <img src={RejosariLogo} alt="rejosari-logo" />
            </a>
          </div>
          <div className="hidden md:flex">
            <ul className="flex items-center font-medium ">
              <li className="mr-[30px] flex">
                <img className="mr-[5px]" src={ic_home} alt="" />
                <a href="/" className="hover:text-hijau-gelap">
                  Beranda
                </a>
              </li>
              <li className="mr-[30px] flex">
                <img className="mr-[5px]" src={ic_profile} alt="" />
                <a href="/profil" className="hover:text-hijau-gelap">
                  Profil Dusun
                </a>
              </li>
              <li className="mr-[30px] flex">
                <img className="mr-[5px]" src={ic_news} alt="" />
                <a href="/berita" className="hover:text-hijau-gelap">
                  Berita & Informasi
                </a>
              </li>
              <li className="mr-[30px] flex">
                <img className="mr-[5px]" src={ic_smes} alt="" />
                <a href="/umkm" className="hover:text-hijau-gelap">
                  UMKM
                </a>
              </li>
              <li className="mr-[30px] flex">
                <img className="mr-[5px]" src={ic_gallery} alt="" />
                <a href="/galeri" className="hover:text-hijau-gelap">
                  Galeri
                </a>
              </li>
              <li className="flex">
                <img className="mr-[5px]" src={ic_contact} alt="" />
                <a href="#kontak" className="hover:text-hijau-gelap">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Responsive Section */}
          <div
            className={
              nav
                ? 'w-full bg-putih text-hitam absolute top-[90px] left-0 flex justify-center text-center z-20'
                : 'absolute left-[-100%]'
            }
          >
            <ul className="bg-white font-lg">
              <li className="p-[10px] w-full border-b-2 border-zinc-300">
                <a href="/" className="hover:text-hijau" onClick={closeNav}>
                  Beranda
                </a>
              </li>
              <li className="p-[10px] w-full border-b-2 border-zinc-300">
                <a
                  href="/profil"
                  className="hover:text-hijau"
                  onClick={closeNav}
                >
                  Profil Dusun
                </a>
              </li>
              <li className="p-[10px] w-full border-b-2 border-zinc-300">
                <a
                  href="/berita"
                  className="hover:text-hijau"
                  onClick={closeNav}
                >
                  Berita & Informasi
                </a>
              </li>
              <li className="p-[10px] w-full border-b-2 border-zinc-300">
                <a href="/umkm" className="hover:text-hijau" onClick={closeNav}>
                  UMKM
                </a>
              </li>
              <li className="p-[10px] w-full border-b-2 border-zinc-300">
                <a
                  href="/galeri"
                  className="hover:text-hijau"
                  onClick={closeNav}
                >
                  Galeri
                </a>
              </li>
              <li className="p-[10px] w-full border-b-2 border-zinc-300">
                <a
                  href="#kontak"
                  className="hover:text-hijau"
                  onClick={closeNav}
                >
                  Kontak
                </a>
              </li>
              <li className="p-[10px] w-full border-b-2 border-zinc-300 hover:text-merah ">
                <button onClick={closeNav}>Tutup</button>
              </li>
            </ul>
          </div>

          <div onClick={handleNav} className="block md:hidden">
            {nav ? (
              <IoMdClose size={30} className="bg-white text-hitam" />
            ) : (
              <HiOutlineMenu size={30} className="bg-white text-hitam" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
