import Link from "next/link";
import Image from "next/image";
import logoWhite from "../../../public/logos/orbitblue.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-moonlight p-8 text-muted">
        <div className="m-auto max-w-4xl">
          <Link href="/">
            <Image
              src={logoWhite.src}
              width={200}
              height={100}
              alt="Orbit"
              objectFit="contain"
              className="mb-4"
            />
          </Link>

          <div className="mb-4 ml-2 text-sm md:text-base">
            <p className="font-bold">Made by the Orbit Web Team</p>
          </div>

          <div className="mb-4 ml-2 text-sm md:text-base">
            <p>Email: web@orbitntnu.com</p>
            <p>Slack: #orbit-web</p>
          </div>

          <div className="mb-4 ml-2 text-sm">
            <p>Orbit Web © {year}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center p-8 text-sm text-slate">
          <p className="m-2">Hanne Marie Haakaas</p>
          <p className="m-2">Idar Buer</p>
          <p className="m-2">Mats Kvanvik</p>
          <p className="m-2">Magnus Andreas Giverin</p>
          <p className="m-2">Simon Bjerkås</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
