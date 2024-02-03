"use client";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Gallery } from "react-grid-gallery";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);
  const [caseCount, setCaseCount]: any = useState(
    process.env.NEXT_PUBLIC_CASE_COUNT
  );

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsFlipped((prev) => !prev);
  };

  const handleCaseClick = (case_number: number) => {
    router.push(`/${case_number}`);
  };

  const handleCountImages = () => {};
  return (
    <main className={styles["main"]}>
      <div>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className={styles["main-card"]}>
            <h1 className={styles["main-card-title"]}>
              Bright Alim Corporation
            </h1>
            <span className={styles["main-card-statement"]}>
              Your Vision, Our Expertise
            </span>
            <span className={styles["main-card-statement-more"]}>
              Our approach is centered on understanding your unique needs and
              delivering tailored construction solutions.
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
              Go Back
            </button>
          </div>
        </ReactCardFlip>
      </div>
      <div className={styles["main-grid"]}>
        {Array.from(Array(parseInt(caseCount)).keys()).map(
          (case_number: number) => {
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
              ></div>
            );
          }
        )}
      </div>
    </main>
  );
}
