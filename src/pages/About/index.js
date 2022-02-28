import React from "react";
import Header from "../../components/Header";
import "./style.css";
import company from "../../assets/empresa.jpg";
import TeamSection from "../../components/TeamSection";

function About() {
  return (
    <>
      <Header />
      <main className="about-main">
        <div>
          <section className="about-content">
            <div className="company-image-content">
              <img src={company} alt="empresa" />
            </div>
            <div className="about-texts">
              <h1>Quem Somos?</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release.
              </p>
            </div>
            <hr />
          </section>
        </div>
        <TeamSection />
      </main>
    </>
  );
}

export default About;
