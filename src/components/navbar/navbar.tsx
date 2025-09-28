import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 items-center  w-full bg-blue-950">
      <p className="text-center">Logo</p>

      <ul className="flex flex-row justify-center gap-x-4">
        <Link href="/">Inicio</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/portafolio">Portafolio</Link>
        <Link href="/nosotros">Nosotros</Link>
      </ul>

      <div className="text-center">
        <ul className="flex flex-row justify-center gap-x-4">
          <Link href="/login">Iniciar sesión</Link>
          <Link href="/registro">Registrarse</Link>
          <Link href="/carrito">icono</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar