import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Shared/Navbar";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function HomePage() {
  const router = useRouter();

  const handleRouteToForm = () => {
    router.push("/Form");
  };

  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (logoRef.current) {
        logoRef.current.style.transform = `rotate(${scrollY / 5}deg)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="relative flex h-screen flex-grow items-center overflow-hidden px-20">
        <div className="absolute bottom-10 right-10 flex animate-bounce items-center">
          <span className="--font-poppins mb-2 text-sm text-[var(--color-cloud-white)]">
            Scroll to see why you should apply
          </span>
        </div>

        <div
          className="animate-background absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/shared/orbitsat.jpg')" }}
        />

        <div className="relative z-10 max-w-3xl text-left">
          <h2 className="animate-slideInUp mb-4 text-4xl font-extrabold text-[var(--color-strong)] md:text-5xl">
            Orbit Application Form
          </h2>
          <p className="animate-slideInLeft mb-8 text-base text-[var(--color-cloud-white)] md:text-lg">
            Join Our Team! We're on the lookout for passionate individuals to
            fill several key roles. While we've highlighted our most
            sought-after positions below, we value diverse talents and
            interests. If you're passionate about a role not listed here, don't
            hesitate to apply using the links provided. Your enthusiasm could be
            the perfect fit for Orbit NTNU!
          </p>
          <div className="text-center">
            <button
              onClick={handleRouteToForm}
              className="animate-button rounded-full bg-[var(--color-orange-sherbert)] px-10 py-3 font-semibold text-[var(--color-dark-gray)] transition-colors duration-300 hover:bg-[var(--color-laser-lemon)]"
            >
              Proceed to apply
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden leading-none shadow-md">
          <svg
            className="relative block h-20 w-full text-[var(--color-night-sky)]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0,256C120,240,240,192,360,192C480,192,600,240,720,240C840,240,960,192,1080,176C1200,160,1320,176,1440,192L1440,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      <section className="relative flex h-screen flex-col md:flex-row">
        <div className="flex w-full items-center bg-[var(--color-night-sky)] text-[var(--color-strong)] md:w-1/2">
          <div className="mx-auto max-w-xl">
            <h3 className="mb-6 text-3xl font-bold md:text-4xl">
              Why Join Orbit NTNU?
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-[var(--color-cloud-white)] md:text-xl">
              Orbit NTNU is a volunteer student organization dedicated to
              educating tomorrow’s space engineers. We design and build small
              satellites using in-house subsystems, pushing the boundaries of
              what is possible. By joining, you’ll gain hands-on experience in
              satellite development, from concept to launch.
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center bg-[var(--color-night-sky)]">
          <div className="flex h-96 w-96 items-center justify-center">
            <img
              ref={logoRef}
              src="/logos/orbitLogo.png"
              alt="Orbit NTNU logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-10 w-full overflow-hidden">
          <svg
            className="relative block h-20 w-full text-[var(--color-muted)]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0,256C120,240,240,192,360,192C480,192,600,240,720,240C840,240,960,192,1080,176C1200,160,1320,176,1440,192L1440,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      <section className="relative bg-[var(--color-muted)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div>
                  <Image
                    src="/logos/orbitTextlogo.png"
                    alt="Orbit Logo"
                    width={75}
                    height={75}
                  />
                </div>
                <h3 className="text-xl font-bold tracking-wide"> - Orbit</h3>
              </div>
              <p className="text-sm opacity-75">
                Orbit NTNU is a student organization at the Norwegian University
                of Science and Technology (NTNU) dedicated to designing,
                building, and launching small satellites.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="https://orbitntnu.com/about" className="hover:underline hover:opacity-100">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://orbitntnu.com/teams" className="hover:underline hover:opacity-100">
                    Teams
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold">Our Sponsors</h4>
              <div className="flex flex-wrap items-center gap-4">
                <div className="rounded opacity-70">
                  <Image
                    src="/logos/kongsberg.png"
                    alt="Orbit Logo"
                    width={75}
                    height={75}
                  />
                </div>
                <div className="opacity-70">
                  <Image
                    src="/logos/norsk_romsenter.png"
                    alt="Orbit Logo"
                    width={75}
                    height={75}
                  />
                </div>
                <div className="opacity-70">
                  <Image
                    src="/logos/andoya_space.png"
                    alt="Orbit Logo"
                    width={75}
                    height={75}
                  />
                </div>
                <a href="https://orbitntnu.com/sponsors" className="hover:underline hover:opacity-100">
                  +++
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold">Stay Connected</h4>
              <div className="flex space-x-4">
                <a href="#" className="transition-transform hover:scale-110">
                  <i className="fa-brands fa-twitter text-2xl"></i>
                </a>
                <a href="#" className="transition-transform hover:scale-110">
                  <i className="fa-brands fa-linkedin text-2xl"></i>
                </a>
                <a href="#" className="transition-transform hover:scale-110">
                  <i className="fa-brands fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-[var(--color-cream)]/30 my-10 border-t"></div>

          <div className="flex flex-col items-center justify-between text-sm opacity-70 md:flex-row">
            <p>© {new Date().getFullYear()} Orbit. All rights reserved.</p>
            <p>Contact - contact@orbitntnu.com</p>
            <p>Search Orbit NTNU now!</p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </section>
    </div>
  );
}
