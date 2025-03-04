import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png"
import MenuIcon from "@/assets/menu.svg"
import Image from "next/image";

export const Header = () => {
  return (
   <header className="sticky top-0">
    {/* Top Bar */}
     <div className="flex justify-center items-center gap-3 py-3 bg-black text-white text-sm">
      <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity.</p>
      <div className="inline-flex items-center gap-1">
      <p>Get started for free</p>
      <ArrowRight className="w-4 h-4"/>
      </div>
    </div>
    {/* Navbar */}
    <div className="py-5">
      <div className="container">
       <div className="flex itemc-center justify-between">
       <Image src={Logo} alt="Sass_Logo" width={40} height={40}/>
       <MenuIcon className="w-5 h-5 md:hidden"/>
       {/* Nav Menu */}
       <nav>
        <ul className="hidden md:flex gap-6 text-black/60 items-center">
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Customers</a></li>
          <li><a href="#">Updates</a></li>
          <li><a href="#">Help</a></li>
          <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tighter">Get for free</button>
        </ul>
       </nav>
       </div>
      </div>
    </div>
   </header>
  );
};
