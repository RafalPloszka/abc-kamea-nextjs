import { Carousel, CarouselImage } from "components/Carousel";

import engraverPic1 from "../../public/engraver/plate.jpeg";
import engraverPic2 from "../../public/engraver/machine.jpeg";
import engraverPic3 from "../../public/engraver/seal_ring.jpeg";
import engraverPic4 from "../../public/engraver/plate_silver.jpg";

const engraverImages: CarouselImage[] = [
  { src: engraverPic1, alt: "Grawerowana tabliczka na drzwi" },
  { src: engraverPic2, alt: "Maszyna do grawerowania" },
  { src: engraverPic3, alt: "Referentki" },
  { src: engraverPic4, alt: "Grawerowana srebrna tabliczka" },
];

export const EngraverCarousel = () => (
  <Carousel
    images={engraverImages}
    ariaLabel="Zdjęcia produktów wygrawerowanych"
  />
);
