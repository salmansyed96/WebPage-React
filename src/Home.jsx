//import { useEffect } from "react";
import HeroSection from "./Component/HeroSection";
//import { useGlobalContext } from "./Context";


const Home = () => {
const data = {
  name: "IT Service",
  image: "./image/hero.svg",
}

  return (
    <>
      <HeroSection  {...data}/>
    
    </>
  );
};

export default Home;