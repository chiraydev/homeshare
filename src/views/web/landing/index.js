import Image from "next/image";
import React from "react";
import MainImg from "../../../assets/landing/Group 5510.png";
import styles from "./style.module.css";
import { Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Img1 from "../../../assets/landing/Image 2.png";
import Img2 from "../../../assets/landing/Image 3.png";
import Img3 from "../../../assets/landing/Image 4.png";
import Img4 from "../../../assets/landing/Group 5547.png";
import Img5 from "../../../assets/landing/Image 6.png";
import Img6 from "../../../assets/landing/Group 5548.png";
import Img7 from "../../../assets/landing/Group 5549.png";
import Img8 from "../../../assets/landing/Image 14.png";
import Img9 from "../../../assets/landing/Image 15.png";
import Img10 from "../../../assets/landing/Ellipse 3.png";
import Slider from "react-slick";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useState } from "react";

const Landingpage = () => {

const [currentSlider, setCurrentSlider] = useState(0)

console.log(currentSlider,"currentSlider");


  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    nextArrow: <LandingNextArrow />,
    prevArrow: <LandingPrevArrow />,
    afterChange: (current) => setCurrentSlider(current),
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  function LandingNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdArrowForwardIos
        onClick={onClick}
        className={className}
        style={{
          ...style,
          color: "orange",
          display: "block",
          width: "30px",
          height: "30px",
        }}
      />
    );
  }

  function LandingPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdArrowBackIos
        onClick={onClick}
        className={className}
        style={{
          ...style,
          color: "orange",
          display: "block",
          width: "30px",
          height: "30px",
        }}
      />
    );
  }

  const hiwArr = [
    {
      img: Img1,
      title: "1. Create Account",
      description:
        "Provide some details about yourself that a potential housemate would like to know. Creating a profile is completely free at HomeShare",
    },
    {
      img: Img2,
      title: "2. Explore",
      description:
        "See the profiles of other people also looking for housemates, their interests, some of their personality traits & whether they have a home or not.",
    },
    {
      img: Img3,
      title: "3. Connect",
      description:
        "Use HomeShare's inbox to get in touch with your potential housemate, ask questions you might have to determine whether you are compatible or not.",
    },
    {
      img: Img4,
      title: "4. Meet Up",
      description:
        "To ensure the safety of everyone using HomeShare, all users are required to create a profile and verify their identities before being allowed to interact with other users.",
    },
    {
      img: Img5,
      title: "5. Move In",
      description:
        "Once you have found your perfect housemate, move in and start living together.",
    },
  ];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.head}>
            <h1>
              Find Your <span style={{ color: "#f8cd46" }}>Perfect</span>{" "}
              housemate
            </h1>
            <p>{`It’s not ‘what’ you live in; it’s ‘who’ you live with.`}</p>
            <div className="position-relative">
              <input type="text" placeholder="Enter a neighborhood or city" />
              <Button>
                <span>
                  <AiOutlineSearch />
                </span>{" "}
                Search{" "}
              </Button>
            </div>
          </div>
          <Image src={MainImg} />
        </div>
      </div>

      <div style={{ width: "90%", margin: "auto" }}>
        <div className={styles.hiw}>
          <h1>
            How it <span style={{ color: "#f8cd46" }}>works</span>
          </h1>
          <div className={styles.content2}>
            {hiwArr?.map((v, i) => {
              return (
                <div key={i} className={styles.card}>
                  <Image src={v?.img} />
                  <h4 className="fw-bolder">{v?.title}</h4>
                  <p>{v?.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.wif}>
          <h1>
            Who <span style={{ color: "#f8cd46" }}>is it for</span>
          </h1>
          <div className={styles.content3}>
            <Image src={Img6} />
            <Image src={Img7} />
          </div>
        </div>

        <div className={styles.wmu}>
          <h1>
            What <span style={{ color: "#f8cd46" }}>makes us unique</span>
          </h1>
          <div className={styles.content4}>
            <div className={styles.card}>
              <Image src={Img8} />
              <h4 className="fw-bolder">People Centered</h4>
              <p>{`People are at the center of all we do. As our moto goes " its not you live in; its who you live with."`}</p>
            </div>
            <div className={styles.card}>
              <Image src={Img9} />
              <h4 className="fw-bolder">Safety First</h4>
              <p>{`To ensure the safety of everyone using HomeShare, all users are required to create a profile and verify their identities before being allowed to interact with other users.`}</p>
            </div>
          </div>
        </div>

        <div className={styles.wps}>
          <h1>
            What are people<span style={{ color: "#f8cd46" }}> saying?</span>
          </h1>
          <div className={styles.content5}>
            <Slider {...settings}>
              {[...Array(8).keys()]?.map((v,i) => {
                return  <div key={i} className={styles.card} >
                <hr />
                <p className={"py-5"}>{`People are at the center of all we do. As our moto goes " its not you live in; its who you live with."`}</p>
                <div className={styles.inner}>
                  <Image src={Img10} />
                  <div>
                    <h4>Amy Golberg</h4>
                    <p>General Manager</p>
                  </div>
                </div>
              </div>
              })}
             
              
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
