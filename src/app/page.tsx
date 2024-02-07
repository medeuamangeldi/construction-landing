"use client";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useRouter } from "next/navigation";
import { importAll } from "./_helpers";
import Image from "next/image";
export default function Home() {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);
  const [caseCount, setCaseCount]: any = useState();
  const caseNames = [
    "Design Engineering and Welding",
    "Civil Works",
    "Creativity",
  ];

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsFlipped((prev) => !prev);
  };

  const handleCaseClick = (case_number: number) => {
    router.push(`/${case_number}`);
  };

  const handleCountImages = () => {
    const components = require.context(`../../public/images/`, true);
    const listOfImages = importAll(components);
    let count = 0;
    for (let index = 0; index < 10000; index++) {
      const imgObj = listOfImages.find((image: any) =>
        image.default.src.includes(`case${index + 1}`)
      );
      if (!imgObj) {
        break;
      }
      count += 1;
    }
    setCaseCount(count);
  };

  useEffect(() => {
    handleCountImages();
  });
  return (
    <main className={styles["main"]}>
      <div>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className={styles["main-card"]}>
            {/* <h1 className={styles["main-card-title"]}>
              Bright Alim Corporation
            </h1> */}
            <Image
              src={`/logo/logo_white.png`}
              alt="logo"
              width="300"
              height="300"
              style={{ color: "white" }}
            />
            <span className={styles["main-card-statement"]}>
              Your Vision, Our Expertise
            </span>
            <button
              onClick={handleClick}
              className={styles["main-card-contact"]}
            >
              Contact Us
            </button>
          </div>

          <div className={styles["main-card"]}>
            <h1 className={styles["main-card-title"]}>
              2327 S Arizona Ave, Pecos, TX, 79772
            </h1>
            <span className={styles["main-card-statement"]}>
              anuar@gmail.com
            </span>
            <span className={styles["main-card-statement-more"]}>
              +1 (609) 305-8507
            </span>
            <button
              onClick={handleClick}
              className={styles["main-card-contact"]}
            >
              Back
            </button>
          </div>
        </ReactCardFlip>
      </div>
      <div className={styles["main-grid"]}>
        {Array.from(Array(caseCount).keys()).map((case_number: number) => {
          return (
            <div
              onClick={() => handleCaseClick(case_number + 1)}
              key={case_number}
              className={styles["main-grid-case"]}
              style={{
                backgroundImage: `url(/images/case${case_number + 1}/case${
                  case_number + 1
                }_1.jpeg)`,
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                overflow: "hidden",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <span className={styles["main-grid-case-caption"]}>
                {caseNames[case_number]}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
