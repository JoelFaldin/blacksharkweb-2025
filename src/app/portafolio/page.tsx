import Image from 'next/image'

const Portafolio = () => {
  return (
    <>
    <section className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col justify-center">
        <h1 className="font-bold text-3xl text-center pt-12 pb-12">Fotografía Profesional</h1>
        <div className="grid grid-cols-4 justify-center gap-2 ml-6 mr-6">
            <Image
              width={600}
              height={300}
              src="/images/paisaje1.jpg"
              alt="Paisaje"
            />
            <Image
              width={600}
              height={700}
              src="/images/paisaje2.jpg"
              alt="Paisaje"
            />
            <Image
              width={700}
              height={400}
              src="/images/paisaje3.jpg"
              alt="Paisaje"
            />
            <Image
              width={600}
              height={300}
              src="/images/jugador1.jpg"
              alt="Paisaje"
            />
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