import { Carousel, CarouselImage } from "components/Carousel";

import stampPic1 from "../../public/stamps/trodat_black.jpeg";
import stampPic2 from "../../public/stamps/blue.jpeg";
import stampPic3 from "../../public/stamps/wood.jpeg";
import stampPic4 from "../../public/stamps/dates.jpeg";
import stampPic5 from "../../public/stamps/cassette.jpeg";
import stampPic6 from "../../public/stamps/wagraf.jpeg";

const stampsImages: CarouselImage[] = [
  { src: stampPic1, alt: "Pieczątki w automatach Trodat" },
  { src: stampPic2, alt: "Niebeskie okrągłe pieczątki Colop" },
  { src: stampPic3, alt: "Drewniane stemple" },
  { src: stampPic4, alt: "Datowniki" },
  { src: stampPic5, alt: "Pieczątki w kasetach" },
  { src: stampPic6, alt: "Pieczątki w automatach Wagraf" },
];

export const StampsCarousel = () => (
  <Carousel images={stampsImages} ariaLabel="Zdjęcia pieczątek" />
);
