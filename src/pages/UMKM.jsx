import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import UMKMTable from '../components/UMKMTable';
import Footer from '../components/Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function UMKM() {
  const positionCenter = [-7.68787, 110.40278];
  // markers
  const markers = [
    {
      id: 1,
      geocode: [-7.68693, 110.4024],
      popUp: 'Andra Brown Production',
    },
    {
      id: 2,
      geocode: [-7.68714, 110.40265],
      popUp: 'Penjahit & Permak Rita',
    },
    {
      id: 3,
      geocode: [-7.68695, 110.40275],
      popUp: 'Cilok Mang Caca',
    },
    {
      id: 4,
      geocode: [-7.68759, 110.4028],
      popUp: 'UD. Bagas Mandiri',
    },
    {
      id: 5,
      geocode: [-7.68776, 110.40238],
      popUp: 'Pijat Sedyo Waras',
    },
    {
      id: 6,
      geocode: [-7.68899, 110.40238],
      popUp: "D'Eva Sembako",
    },
    {
      id: 7,
      geocode: [-7.68759, 110.40308],
      popUp: 'Katering Ibu Krisdiana',
    },
  ];

  return (
    <>
      <Navbar /> <Breadcrumbs link="/umkm" page="UMKM" />
      <div className="w-full px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] mx-auto justify-between items-center h-full">
        <div className="text-[32px] font-bold text-hijau mt-[40px] mb-[20px]">
          UMKM
        </div>
        <UMKMTable />
      </div>
      {/* Map section */}
      <div className="w-full">
        <div className="text-xl text-center text-hijau mt-[40px] mb-[20px]">
          Peta <span className="font-bold text-hijau">Lokasi UMKM</span>
        </div>
        <div className="map-component">
          <div className="map">
            <MapContainer
              center={positionCenter}
              zoom={18}
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
