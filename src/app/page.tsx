"use client";
import styles from "./page.module.scss";
import { useEffect, useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useRouter } from "next/navigation";
import { importAll } from "./_helpers";
import Image from "next/image";
import Menu from "./_components/Menu/menu.component";
import { LuConstruction } from "react-icons/lu";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { FaSquareWhatsapp } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { MdAttachEmail } from "react-icons/md";
export default function Home() {
  const router = useRouter();
  const [isFlipped, setIsFlipped] = useState(false);
  const [caseCount, setCaseCount]: any = useState();
  const form: any = useRef(null);
  const formatDateForInput = (date: any) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(formatDateForInput(new Date()));
  const [comments, setComments] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      name,
      email,
      address,
      phone,
      date: new Date(date),
      comments,
    };
    if (
      data.name === "" ||
      data.email === "" ||
      data.address === "" ||
      data.phone === ""
    ) {
      alert("Please fill out all fields");
      return;
    } else {
      const service_id: any = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const template_id: any = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const user_id: any = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
      await emailjs
        .sendForm(service_id, template_id, form.current, user_id)
        .then(
          (result) => {
            alert(result.text);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };
  const handleChange = (e: any) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "comments":
        setComments(e.target.value);
        break;
      default:
        break;
    }
  };
  const caseNames = [
    "Cooling solutions",
    "Filtration solutions",
    "Maintenance and repair",
  ];

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
      <Menu />
      <div className={styles["main-card"]}>
        <div className={styles["main-card-hero"]}>
          <span className={styles["main-card-hero-statement"]}>
            HIGH-QUALITY AND RELIABLE SOLUTIONS FOR YOUR FACILITIES!
          </span>
          <Image
            src={`/photos/hero1.webp`}
            alt="image1"
            width={440}
            height={307}
            style={{
              maxHeight: "1000px",
              maxWidth: "1000px",
            }}
            layout="responsive"
            className={styles["main-card-hero-image"]}
          />
        </div>
        <div className={styles["main-card-subhero"]}>
          <div className={styles["main-card-subhero-titles"]}>
            <span className={styles["main-card-subhero-titles-title"]}>
              11 BITCOIN FARMS SERVICE
            </span>
            <span className={styles["main-card-subhero-titles-title"]}>
              +7 YEARS OF EXPERIENCE
            </span>
            <span className={styles["main-card-subhero-titles-title"]}>
              + 50 employees
            </span>
          </div>
          <p className={styles["main-card-subhero-text"]}>
            lf you are seeking a reliable solution for the design and
            construction of a competitive cryptocurrency mining farm but are
            unsure where to start or whom to trust, we provide services that
            range from individual cryptocurrency mining rigs to complete mining
            farm setups
          </p>
        </div>
        <div id="services" className={styles["main-card-services"]}>
          <div className={styles["main-card-services-title"]}>
            <LuConstruction /> OUR SERVICES
          </div>
          <div className={styles["main-card-services-list"]}>
            <span className={styles["main-card-services-list-item"]}>
              <IoCheckmarkDoneSharp />
              Construction of data centers
            </span>
            <span className={styles["main-card-services-list-item"]}>
              <IoCheckmarkDoneSharp />
              Improvement of existing infrastructure
            </span>
            <span className={styles["main-card-services-list-item"]}>
              <IoCheckmarkDoneSharp />
              Electrical services of any complexity
            </span>
            <span className={styles["main-card-services-list-item"]}>
              <IoCheckmarkDoneSharp />
              Construction of large offices
            </span>
            <span className={styles["main-card-services-list-item"]}>
              <IoCheckmarkDoneSharp />
              Design and construction of warehouse facilities
            </span>
            <span className={styles["main-card-services-list-item"]}>
              <IoCheckmarkDoneSharp />
              Management and operation of mining institutions
            </span>
            <span className={styles["main-card-services-list-item"]}>
              <IoCheckmarkDoneSharp />
              Development and implementation of infrastructure systems to
              improve miners performance
            </span>
          </div>
        </div>
      </div>
      <div id="gallery" className={styles["main-section-title"]}>
        <GrGallery /> GALLERY OF OUR WORK
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
                }_1.webp)`,
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
      <div id="aboutus" className={styles["about-us"]}>
        <div id="aboutus" className={styles["about-us-title"]}>
          Innovate. Create. Elevate
        </div>
        <div className={styles["about-us-text"]} style={{ textIndent: "2em" }}>
          Welcome to Bright Alim Corporation, your trusted partner in
          construction solutions. With over 7 years of experience, our
          international team combines creativity, expertise, and a passion for
          innovation to deliver exceptional results.
        </div>
        <div className={styles["about-us-text"]}>
          We integrate a creative approach with the strict laws of physics to
          ensure seamless project execution. Our passion for quality, customer
          satisfaction, and building strong relationships has built a loyal
          following of clients who rely on us for outstanding performance.
        </div>
        <div className={styles["about-us-text"]} style={{ textIndent: "2em" }}>
          At Bright Alim Corporation, we&apos;re dedicated to bringing your
          visions to life. Our expanded services include:
          <span style={{ textAlign: "left" }}>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <li>Construction solutions</li>
              <li>Cryptocurrency mining support</li>
              <li>Industrial efficiency solutions</li>
              <li>Repair and maintenance of mining machines</li>
              <li>Monitoring and optimization of mining operations</li>
            </ul>
          </span>
        </div>
        <div className={styles["about-us-text"]}>
          We&apos;re proud to be a loyal partner for our customers, creating
          value and delivering exceptional results. Partnering with us means
          building a brighter tomorrow, today.
        </div>
        <div
          className={styles["about-us-text"]}
          style={{
            textAlign: "right",
          }}
        >
          Sincerely,
          <br />
          Anuar Yelemessov
          <br />
          Founder and CEO
        </div>
      </div>

      <div id="contacts" className={styles["main-card-contacts"]}>
        <div className={styles["main-card-contacts-title"]}>
          SCHEDULE MEETING AT YOUR SITE
        </div>
        <div className={styles["main-card-contacts-hr"]}></div>
        <div className={styles["main-card-contacts-subtitle"]}>
          Please fill out the form below to send us an email and we will get
          back to you as soon as possible.
        </div>
        <form
          ref={form}
          className={styles["main-card-contacts-form"]}
          onSubmit={handleSubmit}
        >
          <div className={styles["main-card-contacts-form-item"]}>
            <label htmlFor="name">Name:</label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className={styles["main-card-contacts-form-item"]}>
            <label htmlFor="email">Email:</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className={styles["main-card-contacts-form-item"]}>
            <label htmlFor="address">Address:</label>
            <input
              onChange={handleChange}
              type="text"
              id="address"
              name="address"
              required
            />
          </div>
          <div className={styles["main-card-contacts-form-item"]}>
            <label htmlFor="phone">Phone:</label>
            <input
              onChange={handleChange}
              type="tel"
              id="phone"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              placeholder="2223334444"
              name="phone"
              required
            />
          </div>
          <div className={styles["main-card-contacts-form-item"]}>
            <label htmlFor="date">Date:</label>
            <input
              onChange={handleChange}
              name="date"
              required
              style={{
                fontSize: "0.8rem",
              }}
              type="datetime-local"
              id="date"
              value={`${formatDateForInput(new Date())}`}
              min={`${formatDateForInput(new Date())}`}
            />
          </div>
          <div className={styles["main-card-contacts-form-item"]}>
            <label htmlFor="comments">Message:</label>
            <input
              name="comments"
              onChange={handleChange}
              className={styles["comments"]}
              type="textarea"
              id="comments"
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <button
              type="submit"
              className={styles["main-card-contacts-form-button"]}
            >
              <MdAttachEmail />
              Send
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
