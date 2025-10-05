import Image from 'next/image'

const Portafolio = () => {
  return (
      <>
    <section className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col justify-center">
        <h1 className="font-bold text-3xl text-center pt-12 pb-12">
          Fotografía Profesional
        </h1>

        {/* Masonry layout con columnas fluidas */}
        <div className="px-4 sm:px-8 md:px-12 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {[
            "/images/paisaje1.jpg",
            "/images/paisaje2.jpg",
            "/images/paisaje3.jpg",
            "/images/jugador1.jpg",
            "/images/paisaje4.jpg",
            "/images/jugador2.jpg",
            "/images/paisaje5.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden shadow-md transition-transform duration-500 hover:scale-[1.02]"
            >
              <Image
                src={src}
                alt={`Foto ${i + 1}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="w-full flex flex-col items-center">
      <div className="h-96 w-full flex flex-col justify-center">
        <h1 className="font-bold text-3xl text-center">
          Diseño Gráfico
        </h1>
      </div>
    </section>

    <section className="w-full flex flex-col items-center">
      <div className="h-96 w-full flex flex-col justify-center">
        <h1 className="font-bold text-3xl text-center">
          Servicios Extra
        </h1>
      </div>
    </section>
    </>
  )
}

export default Portafolio