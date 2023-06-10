import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { TbSeo } from "react-icons/tb";
import { SiAltiumdesigner } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={TbBrandTailwind}
            title={"Bootstrap, Tailwind CSS"}
            disc={`During my work web designer, I have developed a proficiency in utilizing Bootstrap and Tailwind CSS to create visually appealing and responsive websites.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={RiReactjsLine}
            title={"React Js , Next Js "}
            disc={`In my web development journey, I have gained significant expertise in React.js and Next.js, and I used them in most of my projects.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={TbSeo}
            title={"Performance and SEO"}
            disc={`about web performance and SEO,  experience has empowered me to optimize websites for maximum visibility and outstanding user experiences. With a keen eye for detail and a deep understanding of search engine algorithms.`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={SiAltiumdesigner}
            title={"web design"}
            disc={`In the middle stages of my web design journey experiences. With a focus on aesthetics, functionality, and user-centered design, I have crafted visually appealing websites that drive results.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FaCloudflare}
            title={"Deploy Projects (Cloudflare And Jenkins)"}
            disc={`During the stage of my career, I have gained valuable experience working with two powerful tools in the web development ecosystem: Cloudflare and Jenkins.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Other Experiences"}
            disc={`Google Analytics, Docker, Redux, Redux Toolkit , Google Tag Manager`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  height: auto;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0 10rem;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 0rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(273px, 1fr));
  margin-top: 1rem;
  gap: 1rem;
`;
