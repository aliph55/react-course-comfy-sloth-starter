import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline" />
          </div>
          <p>
            Ipsum ullamco qui fugiat Lorem eiusmod laboris consequat voluptate
            ad. Ex excepteur esse sint nostrud tempor duis labore ex nisi enim
            elit ea pariatur. Do est qui sit reprehenderit enim excepteur
            pariatur ea fugiat eu veniam officia eu dolor. Cillum est proident
            laboris sit ad. Veniam esse pariatur aute ipsum enim qui aute aute.
            Lorem incididunt veniam dolor culpa sint eu aliqua aliqua labore eu
            labore consectetur aute. Voluptate duis officia et reprehenderit.
            Duis cillum officia ex nostrud et magna velit in ad. Tempor nostrud
            non elit id deserunt. Do incididunt duis adipisicing nostrud do enim
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
