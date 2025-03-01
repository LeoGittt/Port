import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t border-orange-500 bg-[#0a0a0a]">
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-gray-50">© {currentYear} Todos los derechos reservados.</p>
          <p className="text-sm text-muted-foreground flex items-center mt-2 md:mt-0">
            Hecho con <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" /> en mi habitacion 
          </p>
        </div>
      </div>
    </footer>
  )
}

