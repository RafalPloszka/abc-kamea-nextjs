import Image, { StaticImageData } from "next/image";
import { Carousel as ReponsiveCarousel } from "react-responsive-carousel";

export interface CarouselImage {
  src: StaticImageData;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
  ariaLabel: string;
}

export const Carousel = ({ images, ariaLabel }: CarouselProps) => {
  return (
    <ReponsiveCarousel
      autoPlay
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      className="rounded"
      ariaLabel={ariaLabel}
      // add borderRadius: 0.25rem to one div below
    >
      {images.map((image) => (
        <Image key={image.alt} src={image.src} alt={image.alt} />
      ))}
    </ReponsiveCarousel>
  );
};
