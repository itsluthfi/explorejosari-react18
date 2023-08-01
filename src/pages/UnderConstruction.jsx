import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function UnderConstruction() {
  return (
    <>
      <Navbar />
      <div className="items-center w-full">
        <div className="text-xl text-center font-bold text-hijau mt-[175px] mb-[175px]">
          Maaf, halaman yang Anda kunjungi sedang dalam tahap pengembangan.
          Silakan kunjungi halaman ini di lain waktu.
        </div>
      </div>
      <Footer />
    </>
  );
}
