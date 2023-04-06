import { Carousel, CarouselImage } from "components/Carousel";

import engraverPic5 from "../../public/engraver/engraver_machine.jpeg";
import engraverPic2 from "../../public/engraver/phone.jpeg";
import engraverPic1 from "../../public/engraver/plate.jpeg";
import engraverPic4 from "../../public/engraver/plate_silver.jpg";
import engraverPic3 from "../../public/engraver/seal_ring.jpeg";

const engraverImages: CarouselImage[] = [
  { src: engraverPic1, alt: "Grawerowana tabliczka na drzwi" },
  { src: engraverPic2, alt: "Wygrawerowany numer telefonu" },
  { src: engraverPic3, alt: "Referentki" },
  { src: engraverPic4, alt: "Grawerowana srebrna tabliczka" },
  { src: engraverPic5, alt: "Maszyna grawerująca" },
];

export const EngraverCarousel = () => (
  <Carousel
    images={engraverImages}
    ariaLabel="Zdjęcia produktów wygrawerowanych"
  />
);
