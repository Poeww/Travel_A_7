import React from "react";

const Home = () => {
  return (
    <div className="font-sans">
      <nav className="flex justify-between px-10 py-4 items-center shadow">
        <div className="text-xl font-bold text-blue-700">DolanDjogja</div>
        <div className="flex gap-8 text-sm">
          <a href="/">Home</a>
          <a href="/package">Package</a>
          <a href="/my-booking">My Booking</a>
          <a href="/review">My Review</a>
        </div>
        <button className="px-4 py-2 bg-blue-900 rounded-lg text-white text-sm">
          User Name
        </button>
      </nav>

      <header className="relative">
        <img
          src="/images/header.jpg"
          alt=""
          className="w-full h-[420px] object-cover"
        />
        <h1 className="absolute top-1/3 left-10 text-5xl text-white font-bold drop-shadow-lg">
          DolanDjogja
        </h1>
      </header>

      <section className="grid grid-cols-2 gap-4 px-10 py-16">
        <div>
          <h2 className="text-3xl font-bold">Travel Quickly and Safely</h2>
          <p className="mt-4 text-sm">
            With comprehensive and reliable information, Dolandjogja helps you
            explore the beauty and uniqueness of Yogyakarta without hassle.
          </p>
        </div>

        <div className="flex justify-around">
          <div className="text-center">
            <div className="text-3xl">⏱</div>
            <p>Fast</p>
          </div>
          <div className="text-center">
            <div className="text-3xl">🛡</div>
            <p>Safe</p>
          </div>
          <div className="text-center">
            <div className="text-3xl">💺</div>
            <p>Comfortable</p>
          </div>
        </div>
      </section>

      <section className="px-10 py-16 bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-xl mx-10 mb-12">
        <h2 className="text-lg font-bold mb-6">Top Destination</h2>

        <div className="grid grid-cols-4 gap-6">
          {[
            { name: "Malioboro", img: "/images/malioboro.jpg" },
            { name: "Taman Sari", img: "/images/taman-sari.jpg" },
            { name: "Titik 0 Km", img: "/images/0km.jpg" },
            { name: "Tugu Jogja", img: "/images/tugu.jpg" },
          ].map((d, i) => (
            <div key={i}>
              <img
                src={d.img}
                className="w-full h-40 object-cover rounded-lg"
                alt=""
              />
              <h3 className="font-bold mt-2">{d.name}</h3>
              <p className="text-xs">
                Nikmati suasana khas Jogja yang selalu ramai dan penuh cerita.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 py-10">
        <h2 className="text-center text-xl font-bold mb-10">
          Pengalaman Pengguna
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 bg-blue-900 text-white rounded-xl shadow"
            >
              <div className="text-4xl mb-3">❝</div>
              <p className="text-sm leading-relaxed">
                Senang banget, ga perlu repot untuk nentuin trip mau kemana aja,
                tinggal milih langsung terima bersih.
              </p>

              <div className="flex items-center gap-3 mt-5">
                <img
                  src="/images/user.jpg"
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div>
                  <p className="font-bold text-sm">Maria Italiano</p>
                  <p className="text-xs">user</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 py-14">
        <h2 className="text-xl font-bold mb-5">The Best Package</h2>

        <div className="grid grid-cols-2 gap-10">
          <div className="rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/heritage.jpg"
              className="w-full h-52 object-cover"
              alt=""
            />
            <div className="p-5">
              <h3 className="font-bold text-xl">Heritage & City</h3>
              <p className="text-sm mt-2">3 Hari / 2 Malam</p>
              <p className="text-blue-800 font-bold text-lg mt-3">
                Rp. 1.200.000 / Orang
              </p>
            </div>
          </div>

          <div className="rounded-xl shadow-lg overflow-hidden">
            <img
              src="/images/adventure.jpg"
              className="w-full h-52 object-cover"
              alt=""
            />
            <div className="p-5">
              <h3 className="font-bold text-xl">Nature with Adventure</h3>
              <p className="text-sm mt-2">4 Hari / 3 Malam</p>
              <p className="text-blue-800 font-bold text-lg mt-3">
                Rp. 1.600.000 / Orang
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 py-16">
        <h2 className="text-xl font-bold text-center">
          Tukar Kode Promo Anda!
        </h2>

        <div className="flex justify-between items-center mt-10">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Dapatkan Promo Spesial!
            </h3>

            <input
              type="text"
              className="px-4 py-2 border rounded-l-xl"
              placeholder="Masukkan kode promo Anda"
            />
            <button className="px-6 py-2 bg-blue-800 text-white rounded-r-xl">
              Tukar
            </button>
          </div>

          <img
            src="/images/promo.jpg"
            className="w-[260px] rounded-xl"
            alt=""
          />
        </div>
      </section>

      <footer className="mt-20 py-14 px-10 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="text-4xl font-bold mb-6">Dolan Djogja</div>

        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold">Navigasi</h3>
            <p>Home</p>
            <p>Pages</p>
            <p>About Us</p>
          </div>

          <div>
            <h3 className="font-bold">Bantuan</h3>
            <p>Help Center</p>
            <p>Ticket Support</p>
            <p>My Account</p>
          </div>

          <div>
            <h3 className="font-bold">Kontak</h3>
            <p>Contact Us</p>
            <div className="flex gap-4 mt-2">
              <span>✕</span>
              <span>🎵</span>
              <span>▶</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
