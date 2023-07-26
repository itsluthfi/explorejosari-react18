export default function Footer() {
  return (
    <>
      <footer className="px-10 py-20 mt-[40px] bg-hijau md:pt-75 sm:py-6 md:px-20 lg:px-40 xl:px-60">
        <div className="flex md:flex md:justify-between">
          <div className="flex-1 mb-6 md:mb-0">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              <div className="mr-10">
                <h5 className="mb-[5px] text-[20px] font-light text-white">
                  Profil
                </h5>
                <p className="mb-[5px] font-bold text-white">
                  Dusun Rejosari - Padukuhan Rejosari <br />
                  Kelurahan Sardonoharjo - Kapanewon Ngaglik
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum id facilisis turpis. Proin condimentum, arcu nec
                  pharetra consequat, ipsum ante dignissim orci, sit amet
                  posuere risus dui quis quam.
                </p>
              </div>
              <div className="mx-10">
                <h5 className="mb-4 text-[20px] font-light text-white">
                  Tautan
                </h5>
                <ul style={{ listStyleType: 'disc' }} className="text-white">
                  <li className="mb-2">
                    <a
                      href="https://slemankab.go.id/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Kabupaten Sleman
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://jogjaprov.go.id/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      Provinsi Daerah Istimewa Yogyakarta
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ml-10">
                <h5 className="mb-4 text-[20px] font-light text-white">
                  Kontak Kami
                </h5>
                <ul className="text-white">
                  <li className="mb-2">Lorem ipsum</li>
                  <li className="mb-2">08123456789</li>
                  <li className="mb-2">lorem@mail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full h-[39px] bg-hijau-gelap text-white">
        <div className="px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] mx-auto flex justify-end items-center h-full">
          KKN-PPM UGM 2-2023 Ngaglik Sub Unit 1
        </div>
      </div>
    </>
  );
}
