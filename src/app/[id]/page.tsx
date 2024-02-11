"use client";
import { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Image } from "react-grid-gallery";
import { Counter, Slideshow } from "yet-another-react-lightbox/plugins";
import { importAll } from "../_helpers";
import { getImageSize } from "react-image-size";
import { ThreeCircles } from "react-loader-spinner";
import styles from "../page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/navigation";
export interface CustomImage extends Image {
  original: string;
}
export default function Case({ params }: { params: { id: number } }) {
  const router = useRouter();
  const [images, setImages]: any = useState([]);
  const [slides, setSlides]: any = useState([]);
  const [index, setIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);

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
    setTimeout(() => setIsLoading(false), 100);
  };

  const handleLeftArrowClick = () => {
    router.push("/");
  };

  useEffect(() => {
    handleGetAllImages();
  }, []);
  return (
    images.length > 0 && (
      <>
        <FontAwesomeIcon
          onClick={handleLeftArrowClick}
          className={styles["left-arrow"]}
          icon={faCircleLeft}
        />
        {isLoading && (
          <ThreeCircles
            visible={isLoading}
            height="100"
            width="100"
            color="#ffffff"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass={styles["spinner"]}
          />
        )}
        {!isLoading && (
          <>
            <Gallery
              onClick={handleClick}
              enableImageSelection={false}
              images={images}
            />
            <Lightbox
              slides={slides}
              open={index >= 0}
              index={index}
              plugins={[Counter, Slideshow]}
              close={() => setIndex(-1)}
            />
          </>
        )}
      </>
    )
  );
}
