import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import mockShortcuts from "@/mockdata/MockShortcuts";

interface OverlayProps {
  handleLogout: () => void;
  handleLogin: () => void;
}

const Overlay = ({ handleLogout, handleLogin }: OverlayProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const session = useSession();

  const openOverlay = () => {
    setIsOpen(true);
    setTimeout(() => setShowPanel(true), 10); // allow for mount before animating in
  };
  const closeOverlay = () => {
    setShowPanel(false);
    setTimeout(() => setIsOpen(false), 300); // match transition duration
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        closeOverlay();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  console.log;
  return (
    <div className="relative z-50 ml-10">
      <button
        onClick={openOverlay}
        className="flex items-center justify-center"
      >
        <span className="material-icons flex items-center justify-center">
          notes
        </span>
      </button>
      {isOpen && (
        <div>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300"
            aria-hidden="true"
          />
          {/* Overlay panel */}
          <div
            ref={overlayRef}
            className={`
                fixed right-0 top-0 z-50 flex h-full w-full
                max-w-full flex-col
                overflow-y-auto bg-moonlight
                shadow-2xl transition-transform
                duration-300 ease-in-out sm:w-1/2
                sm:max-w-[50vw]
                ${showPanel ? "translate-x-0" : "translate-x-full"}
            `}
            style={{
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <button
              className="z-60 absolute right-4 top-4 text-cloudWhite"
              onClick={closeOverlay}
              aria-label="Close overlay"
            >
              <span className="material-icons flex items-center justify-center">
                close
              </span>
            </button>
            <span className="m-12 flex flex-col gap-4">
              <div className="mb-2 w-full">
                <Link
                  href={"/"}
                  className="flex w-full items-center text-xl font-medium hover:text-emeraldFizz"
                >
                  {"Home"}
                </Link>
              </div>
              {mockShortcuts.map((shortcutGroup) => (
                <div key={shortcutGroup.type} className="mb-2 w-full">
                  <span className="flex w-full items-center text-xl font-medium">
                    {shortcutGroup.type}
                  </span>
                  <div
                    className={`overflow-hidden font-medium transition-[max-height] duration-300 ease-in-out`}
                  >
                    <ul className="flex flex-col gap-2 py-2 pl-4">
                      {shortcutGroup.shortcuts.map((infoLink, idx) => (
                        <li
                          key={idx}
                          className="flex flex-row items-center gap-2"
                        >
                          {infoLink.url.startsWith("/") ? (
                            <Link
                              href={infoLink.url}
                              className="text-muted hover:text-skyMint"
                            >
                              {infoLink.header}
                            </Link>
                          ) : (
                            <a
                              href={infoLink.url}
                              className="text-muted hover:text-skyMint"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {infoLink.header}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="w-full">
                {session ? (
                  <button
                    className="py-2 hover:text-pinkBlast"
                    onClick={() => {
                      void handleLogout();
                    }}
                  >
                    Log out
                  </button>
                ) : (
                  <button
                    className="py-2 hover:text-pinkBlast "
                    onClick={() => {
                      void handleLogin();
                    }}
                  >
                    Log in
                  </button>
                )}
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overlay;
