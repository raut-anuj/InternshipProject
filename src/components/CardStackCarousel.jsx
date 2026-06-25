import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CardStackCarousel({
  items = [],
  speed = 2400,
  autoplay = true,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    autoplay
      ? [
          Autoplay({
            delay: speed,
            stopOnInteraction: false,
          }),
        ]
      : []
  );

  return (
    <div className="relative w-full py-3">
      {/* Left Button */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl p-2.5 rounded-full border border-gray-100 hover:bg-gray-100 transition-all active:scale-95"
      >
        <FaChevronLeft className="text-gray-700 text-sm" />
      </button>

      {/* Viewport */}
      <div
  ref={emblaRef}
  className="overflow-hidden py-4 h-[182px]"
>
  <div className="flex -ml-5">
    {items?.map((item, i) => (
      <div
        key={i}
        className="flex-[0_0_250px] min-w-0 pl-5"
      >
        <div
          className="
            h-37.5
            bg-gray-200
            rounded-xl
            flex
            items-center
            justify-center
            shadow-md
            border
            border-transparent
            transition-all
            duration-300
            ease-out
            hover:-translate-y-2
            hover:border-black
            hover:shadow-xl
            select-none
          "
        >
          {item}
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Right Button */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl p-2.5 rounded-full border border-gray-100 hover:bg-gray-100 transition-all active:scale-95"
      >
        <FaChevronRight className="text-gray-700 text-sm" />
      </button>
    </div>
  );
}