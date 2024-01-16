import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "/duttip.jpg",
    disc: "Duutip - Best E-commerce | duttip",
    href: "https://duttip.vercel.app/",
  },
  {
    img: "/trydos.jpg",
    disc: "Trydos - Ramaaz E-commerce | trydos",
    href: "https://trydos-seven.vercel.app/",
  },
  {
    img: "/stylewe.jpg",
    disc: "StyleWe - Shop for Women s Clothing - Latest-designs at Fingertips! | stylewe",
    href: "https://style-we.pages.dev",
  },
  {
    img: "/mobile.png",
    disc: "StyleWe - Shop for Women s Clothing - Latest-designs at Fingertips! | stylewe",
    href: "https://stylewe.vercel.app/",
  },
  {
    img: "/shipping.png",
    disc: "Super delivery dashboard for admins",
    href: "https://3d900d1b.shipping-dashboard.pages.dev/",
  },
  {
    img: "/tech.png",
    disc: "First design for Whatsapp dashboard",
    href: "https://ramaaz-website-repo.pages.dev/",
  },
  {
    img: "/abraa.png",
    disc: "Wholesale Market For B2B Suppliers, Wholesalers in Dubai, UAE - Abraa",
    href: "https://abraa-marketplace.pages.dev",
  },
  {
    img: "/abraa-dashboard.png",
    disc: "Professional dashboard for manage Wholesale Market For B2B Suppliers, Wholesalers in Dubai, UAE - Abraa",
    href: "https://abraa-dashboard.pages.dev",
  },
  {
    img: "/ewallet.jpg",
    disc: "Professional dashboard for employees with simple Whatsapp ",
    href: "https://ewallet-newdashboard-live.pages.dev",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
