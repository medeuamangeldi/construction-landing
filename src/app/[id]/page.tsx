"use client";
import { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Image } from "react-grid-gallery";
import { Counter, Slideshow } from "yet-another-react-lightbox/plugins";
import { importAll } from "../_helpers";
import { getImageSize } from "react-image-size";
export interface CustomImage extends Image {
  original: string;
}
export default function Case({ params }: { params: { id: number } }) {
  const [images, setImages]: any = useState([]);
  const [slides, setSlides]: any = useState();
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const handleDimensions = async (path: string) => {
    const dimensions = await getImageSize(path);
    return dimensions;
  };

  const handleGetAllImages = async () => {
    const components = require.context(`../../../public/images`, true);
    const listOfImages = importAll(components);
    const filtered = listOfImages.filter((image: any) => {
      return image.default.src.includes(`case${params.id}`);
    });
    const count = filtered.length;
    const imagesLocal = [];
    for (let index = 1; index < count + 1; index++) {
      const dimensions = handleDimensions(
        `/images/case${params.id}/case${params.id}_${index}.jpeg`
      );
      imagesLocal.push({
        src: `/images/case${params.id}/case${params.id}_${index}.jpeg`,
        original: `/images/case${params.id}/case${params.id}_${index}.jpeg`,
        width: (await dimensions).width,
        height: (await dimensions).height,
        alt: `Case ${params.id} image ${index}`,
        caption: "37H (gratispgraphy.com)",
      });
    }
    setImages(imagesLocal);
    const slidesLocal = imagesLocal?.map(
      ({ original, width, height }: any) => ({
        src: original,
        width,
        height,
      })
    );

    setSlides(slidesLocal);
  };

  useEffect(() => {
    handleGetAllImages();
  }, []);
  return (
    images.length > 0 && (
      <>
        <Gallery
          onClick={handleClick}
          enableImageSelection={false}
          images={images}
        />
        {slides && (
          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            plugins={[Counter, Slideshow]}
            close={() => setIndex(-1)}
          />
        )}
      </>
    )
  );
}
