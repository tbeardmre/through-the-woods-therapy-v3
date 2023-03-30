import React from "react";
import "../styles/about.css"

export default function About() {
  return (
    <div className="aboutSection">
      <img src="images/about-img.jpg" alt="Picture of Tess" />
      <div className="aboutContent">
        <h2>About Tess</h2>
        <p>
          Tess is a Certified Clinical Counselling (10009225) with the Canadian
          Counselling and Psychotherapy Association. She has been practicing as
          a therapist since graduating in the summer of 2021 in the interior of
          British Columbia. She holds a Master’s Degree in Counselling
          Psychology and a Bachelor’s degree in Health Science with
          post-graduate certifications in Dialectical Behavioural Therapy (DBT),
          Narrative Therapy (NT), and EMDR basic training. She also has
          experience in crisis intervention, suicide risk assessment, one-to-one
          therapy, team-based care, general mental health assessment, and
          treatment planning. Tess has a generalist practice and has worked with
          many ages and presenting concerns. She also has a special interest and
          experience working with individuals with medical-related anxiety,
          particularly life-threatening allergies.
        </p>
        <br/>
        <h4>What can she help you with?</h4>
        <p>
          depression, anxiety, stress, self-esteem, anger, relationships,
          grief/loss, trauma, and more.
        </p>
      </div>
    </div>
  );
}
