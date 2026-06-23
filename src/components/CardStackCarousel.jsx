import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CardStackCarousel({ items = [], speed = 700, autoplay = true }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
    duration: 50
  }, 
    autoplay ? [Autoplay({ delay: speed, stopOnInteraction: false })] : []
  );

  return (
    <div className="relative w-full py-3 px-7">
      <button onClick={() => emblaApi?.scrollPrev()} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full">
        <FaChevronLeft />
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items?.map((item, i) => (
            <div key={i} className="flex-[0_0_250px] mx-3 h-37.5 bg-gray-200 rounded-xl flex items-center justify-center">
              {item}
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => emblaApi?.scrollNext()} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full">
        <FaChevronRight />
      </button>
    </div>
  );
}