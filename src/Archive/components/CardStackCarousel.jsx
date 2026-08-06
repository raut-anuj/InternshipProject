import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CardStackCarousel({
  items = ["CDOT", "DigiLocker", "Google", "NIC", "ZOHO", "Amazon", "Micro."],
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
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 bg-transparent shadow-xl p-2.5 rounded-full border border-gray-100 hover:bg-transparent transition-all active:scale-95"
      >
        <FaChevronLeft className="text-gray-700 text-sm" />
      </button>

      <div
        ref={emblaRef}
        className="overflow-hidden py-4 h-45.5"
      >
        <div className="flex -ml-5">
          {items?.map((item, i) => (
            <div
              key={i}
              // className="flex-[0_0_auto] min-w-[250px] w-fit pl-5"
            >
              <div
                className="
                  h-37.5
                  bg-transparent
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

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-transparent shadow-xl  p-2.5 rounded-full border border-gray-100 hover:bg-transparent transition-all active:scale-95"
      >
        <FaChevronRight className="text-gray-700 text-sm" />
      </button>
    </div>
  );
}