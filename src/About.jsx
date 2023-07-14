import HeroSection from "./Component/HeroSection";


const About = () => {
  const data ={
    name: "IT Cell",
    image: "./image/about1.svg"
  };
  return <HeroSection {...data}/>
    };

export default About
