import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button.js";


const HeroSection = ({name, image}) => {
  return( <Wrapper>
    <div className="container grid grid-two-column">
        <div className="section-here-data">
            <p className="hero-top-data">This is me</p>
            <h1 className="hero-heading">{name}</h1>
            <p className="hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est similique iusto voluptates culpa voluptatem blanditiis dolorem iure aliquam reprehenderit!</p>

            <Button className="btn hireme-btn">
            <NavLink to="/contact">Hire Me</NavLink>
        </Button>
            
        </div>
        
        {/* for image section */}
        <div className="section-hero-image">
            <picture >
                <img src={image} alt="image not fount" className="hero-img"></img>
            </picture>
        </div>
    </div>
  </Wrapper>
  )

}

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;



//const Wrapper = styled.section``;

export default HeroSection
