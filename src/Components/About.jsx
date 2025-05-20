/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
// import image from "../images/motion-background.jpg";
const image = "https://cdn.pixabay.com/photo/2020/07/29/08/33/coffee-5447420_1280.jpg";

// const imageAltText = "purple and blue abstract background";
const imageAltText = "Coffee cup on a table with a blurred background of a cafe.";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a web developer with a passion for creating beautiful and functional user experiences. I have a strong background in UI/UX design, and I love to work on projects that challenge me to think outside the box.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web Development",
  "UI/UX Design",
  "JavaScript",
  "React",
  "Node.js",
  "HTML",
  "CSS",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = 
  "I am passionate about creating user-friendly interfaces and experiences. I believe that good design is not just about how things look, but also about how they work. I strive to create products that are not only visually appealing, but also easy to use and navigate.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
