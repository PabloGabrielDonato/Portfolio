import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Pablo <span className="text-accent">.</span>
          </h1>
        </Link>
        {/*Barra de navegacion escritorio */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>¡Contratame!</Button>
          </Link>
        </div>
        {/*Barra de navegacion movile */}
        <div className=" xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
