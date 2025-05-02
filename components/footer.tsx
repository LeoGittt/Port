

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6  bg-black mt-auto">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs sm:text-sm text-center text-gray-300 px-4 py-2">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-orange-500">
              Leonel González
            </span>{" "}
            — Desarrollo web con enfoque, claridad y dedicación
          </p>
        </div>
      </div>
    </footer>
  );
}
