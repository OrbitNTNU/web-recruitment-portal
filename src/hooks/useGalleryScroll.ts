import { useRef, useState, useEffect } from "react";

export function useGalleryScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < maxScroll - 10);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = el.firstElementChild?.clientWidth ?? 320;
    el.scrollBy({
      left: direction === "left" ? -(cardWidth) : cardWidth,
      behavior: "smooth",
    });

    setTimeout(updateScrollState, 400);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  return { scrollRef, canScrollLeft, canScrollRight, scroll };
}
