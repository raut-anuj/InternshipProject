import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CardStackCarousel({ items = [], speed = 1500, autoplay = true }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
  });

  const intervalRef = useRef(null);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  // 🔥 autoplay toggle
  useEffect(() => {
    if (!emblaApi) return;

    // clear any old interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    // agar autoplay true hai tabhi interval set hoga
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        emblaApi.scrollNext();
      }, speed);
    }

    return () => clearInterval(intervalRef.current);
  }, [emblaApi, speed, autoplay]);

  return (
    <div className="relative w-full py-3 px-7">

      {/* Left */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <FaChevronLeft />
      </button>

      {/* Track */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items?.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_250px] mx-3 h-37.5 bg-gray-200 rounded-xl flex items-center justify-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <FaChevronRight />
      </button>

    </div>
  );
}
