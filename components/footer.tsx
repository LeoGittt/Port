import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-orange-500 bg-[#0a0a0a] mt-auto">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-gray-300">
            © {currentYear} Todos los derechos reservados.
          </p>

          <p className="text-sm text-gray-300 flex items-center">
            Hecho con
            <span className="sr-only">amor</span>
            <Heart
              className="h-4 w-4 mx-1 text-red-500 fill-red-500"
              aria-hidden="true"
            />
            en mi habitación
          </p>
        </div>
      </div>
    </footer>
  );
}
