import React, { useState, useEffect } from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";


const strings1 = [
  "ARE TYPEFACES TO CHANGE FUNCTION IN A FOREIGN ENVIRONMENT?",
  "CAN TYPEFACES BE READAPTED IN A FOREIGN ENVIRONMENT?",
];
const strings2 = [
  "CAN TYPEFACES CHANGE POSITIONALITY WHEN BEING USED IN COMMON INFORMAL?",
  "IN OUR QUEST FOR NEUTRALITY, DO WE INADVERTENTLY CREATE BIASES?",
  "DO ENDANGERED SCRIPTS ONLY SURVIVE IF DIGITALIZED?",
  "DOES DIGITALIZATION REALLY CONCLUDE TO LANGUAGE PRESERVATION?",
  "CAN THE UNICODE BE NON-RESTRICTIVE?",
  "CAN ENCODING SCRIPT BE NON-STANDARDIZED AND INCLUSIVE?",
];
const strings3 = [
  "WHAT IS GOOD OR BAD DESIGN IN A GLOBAL CONTEXT?",
  "HOW CAN WESTERN VISIONS ASSERT DOMINANCE OVER GLOBAL DESIGN KNOWLEDGE?",
];
const strings4 = [
  "HOW CAN LOCAL SCRIPTS ABSTRACT THEMSELVES FROM PAST LATIN SCRIPT DEVELOPMENTS?",
  "IS NEUTRALITY TRULY ACHIEVABLE IN A GLOBAL CONTEXT?",
  "ARE LATIN SCRIPT DEVELOPMENTS TO BE IGNORED?",
  "ARE LATIN SCRIPT DEVELOPMENTS IRRELEVANT TO LOCAL SCRIPTS?",
  "WHO SHOULD BE ABLE TO PART TAKE IN SCRIPT DECISIONS AND ENCODING?",
];
const strings5 = [
  "ARE AMERICAN TYPEFACES CONTROLLING COMMUNICATION IN FOREIGN COUNTRIES?",
];
const strings6 = [
  "ARE TYPEFACES TO ABSTRACT AWAY FROM THEIR MATERIAL PAST?",
  "IS MODERNITY TO BE DEFINED IN THE SAME WAY GLOBALLY?",
];
const strings7 = [
  "WHAT IS GOOD OR BAD DESIGN IN A GLOBAL CONTEXT?",
  "HOW CAN WESTERN VISIONS ASSERT DOMINANCE OVER GLOBAL DESIGN KNOWLEDGE?",
];
const strings8 = ["UNVEILING NUSANTARA BY AIMERIC PERMATA GUERRE"];

export default function Home() {
  const [hello, setHello] = React.useState(strings1[0]);
  const [prevHello, setPrevHello] = React.useState("");

  const handleHover = (paragraph) => {
    setPrevHello("");
    const strings =
      paragraph === "paragraph1"
        ? strings1
        : paragraph === "paragraph2"
        ? strings2
        : paragraph === "paragraph3"
        ? strings3
        : paragraph === "paragraph4"
        ? strings4
        : paragraph === "paragraph5"
        ? strings5
        : paragraph === "paragraph6"
        ? strings6
        : paragraph === "paragraph8"
        ? strings8
        : [];
    const newHello = randomNumber(strings);
    setHello(newHello);
  };

  const randomNumber = (strings) => {
    return strings[Math.floor(Math.random() * strings.length)];
  };

  React.useEffect(() => {
    const helloElement = document.querySelector(".title");
    helloElement.style.opacity = 0;
    helloElement.style.transition = "opacity 0.8s ease-in"; // Adding the transition effect

    // Set opacity to 0.5 after a brief delay
    setTimeout(() => {
      helloElement.style.opacity = 0.3;
    }, 0);

    // Reset opacity to 1 after 800ms
    setTimeout(() => {
      helloElement.style.opacity = 1;
    }, 1000); // Adjusted timing
  }, [hello]);

  React.useEffect(() => {
    const paragraph1 = document.querySelector(".paragraph1");
    const paragraph2 = document.querySelector(".paragraph2");
    const paragraph3 = document.querySelector(".paragraph3");
    const paragraph4 = document.querySelector(".paragraph4");
    const paragraph5 = document.querySelector(".paragraph5");
    const paragraph6 = document.querySelector(".paragraph6");

    paragraph1.addEventListener("mouseover", () => {
      const chosenColor = "#ff00ff";
      document.body.style.background = chosenColor;

      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = chosenColor;
      });
      const highlightElements = document.querySelectorAll(
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark"
      );
      highlightElements.forEach((highlightElement) => {
        highlightElement.style.boxShadow =
          "inset 0 3px 5px rgba(255, 0, 255, 0.5)";
      });
    });

    paragraph1.addEventListener("mouseout", () => {
      document.body.style.background = ""; // reset the background color
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = "";
      });
      const highlightElements = document.querySelectorAll(
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark"
      );
      highlightElements.forEach((highlightElement) => {
        highlightElement.style.boxShadow = "";
      });
    });

    paragraph2.addEventListener("mouseover", () => {
      const chosenColor = "#ffff00";
      document.body.style.background = "#ffff00";
    });

    paragraph2.addEventListener("mouseout", () => {
      document.body.style.background = ""; // reset the background color
    });

    paragraph3.addEventListener("mouseover", () => {
      const chosenColor = "#d3d3d3";
      document.body.style.background = chosenColor;
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = chosenColor;
      });
      const highlightElements = document.querySelectorAll(
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark"
      );
      highlightElements.forEach((highlightElement) => {
        highlightElement.style.boxShadow =
          "inset 0 3px 5px rgba(211, 211, 211, 0.5)";
      });
    });

    paragraph3.addEventListener("mouseout", () => {
      document.body.style.background = ""; // reset the background color
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = "";
      });
      const highlightElements = document.querySelectorAll(
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark"
      );
      highlightElements.forEach((highlightElement) => {
        highlightElement.style.boxShadow = "";
      });
    });

    paragraph4.addEventListener("mouseover", () => {
      document.body.style.background = "#FCFBF4";
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = "#FCFBF4";
      });
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1Element) => {
        h1Element.style.color = "orange";
      });
    });

    paragraph4.addEventListener("mouseout", () => {
      document.body.style.background = ""; // reset the background color
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = "";
      });
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1Element) => {
        h1Element.style.color = "";
      });
    });
    paragraph5.addEventListener("mouseover", () => {
      document.body.style.background = "#08FF08";
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = "#08FF08";
      });
    });

    paragraph5.addEventListener("mouseout", () => {
      document.body.style.background = ""; // reset the background color
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = "";
      });
    });

    paragraph6.addEventListener("mouseover", () => {
      const chosenColor = "rgb(0,255,100)";
      document.body.style.background = chosenColor;
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = chosenColor;
      });
      const highlightElements = document.querySelectorAll(
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark, "
      );
      highlightElements.forEach((highlightElement) => {
        highlightElement.style.boxShadow =
          "inset 0 1px 5px rgba(0,255,100 0.3)";
      });
    });

    paragraph6.addEventListener("mouseout", () => {
      document.body.style.background = ""; // reset the background color
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = "";
      });
      const highlightElements = document.querySelectorAll(
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark, "
      );
      highlightElements.forEach((highlightElement) => {
        highlightElement.style.boxShadow = "";
      });
    });
  }, []);

  return (
    <>
      <div className="grid-container">
        <div
          className="paragraph1"
          onMouseOver={() => handleHover("paragraph1")}
        >
          <div className="scroll-container">
            <h2>CULTURAL CRINGE</h2>

            <p>
              Warung banners portray a large facette of Indonesia’s ‘common
              informal’. They are characterized by large headings, all-caps
              text, stretched/distorted typefaces, effects, and gradients which
              from a Western graphic design perspective can give the impression
              of aggressive shouting. They are therefore often overlooked or
              undervalued under more common views associated with the
              International/Swiss style and minimalism. However, their designs
              do have their importance in local culture, as exemplified by the
              iconic Lamongan Pecel Lele warung banners, serving as a vibrant
              symbol of the regional identity and street food culture of East
              Java.This Western critical eye finds its sense when relating it to
              A.A. Philip's theory of cultural cringe, which Filipino cultural
              worker Clara Balaguer defines as the phenomenon "by which the
              culture produced in an ex-colonial or colonial country is seen as
              inferior to that being produced in the colonial seat," This is
              furthermore accentuated by Novreica “the opulence of these
              Indonesian-styled graphics is sometimes overlooked, forgotten, and
              even underestimated because of the assumptions of them being
              low-brow or kitschy.” How can cultural cringe be countered? How
              can these colonial traps be avoided? The focus of study should be
              shifted towards prioritizing ‘local’ cultures rather than the
              study of Western concepts first. Novreica emphasizes that
              “Indonesian ephemeras deserve to be used as a primary source for
              further research– which offers unique windows into cultures past.”
              By digging deeper into Indonesian ephemeras and artifacts, we can
              uncover the stories and designs that make Indonesian culture
              unique.
            </p>
          </div>
        </div>
        <div
          className="paragraph2"
          onMouseOver={() => handleHover("paragraph2")}
        >
          <div className="scroll-container">
            <h2>WESTERN CONFORMED DIGITAL</h2>
            <p>
              {" "}
              Typography is now very mainly manipulated digitally and used as a
              program. Most of its common uses are through digital tools or
              mediums on screens. There is the birth of a user, the program is
              therefore adapted and conceived according to that user. Present
              dominant design softwares were primarily made to find solutions to
              Western problems, making foreign visual cultures having to adapt
              to fit with the complications of these mediums. In these
              softwares, there is a real push for practicality and efficiency
              specifically intended for the conformity of Western uses and the
              Latin script. Placing complex ‘local’ scripts in tricky situations
              of use. “software developers often find it cumbersome to support
              different scripts. For example, Adobe’s InDesign has recently
              introduced support for some Southeast Asian scripts, but the user
              needs to find a hidden setting to display text correctly, and
              cannot access font features linked to particular languages.”
              (Mitchell). The use of ‘local’ scripts is sometimes therefore
              “susceptible to highly unattractive typographic representation, as
              some users are using the QWERTY keyboard to type out scripts like
              Balinese, often leading to strings of gibberish characters.”
              (Perdana) The adaptation of software for ‘local’ minorities is
              often neglected yet those have impacts on how their languages and
              culture develop over time. As Western technological developments
              are the ones leading the march for the implementation of ‘local’
              scripts, they hold a certain position of power. ARE WESTERN
              SOFTWARE THEREFORE DICTATING THE DEVELOPMENTS OF ‘LOCAL’ SCRIPTS?
              ‘LOCAL’ IDENTITIES? With the importation of Unicode, ‘local’
              scripts are subjected to a new form of writing system that is
              developed around ‘movable type’ and the Latin script. In addition
              to that, trapped in a new language standardization with a Unicode
              consortium that stays impartial. IS THE UNICODE THEREFORE ALWAYS
              RESPECTING ‘LOCAL’ ETHICS AND CUSTOMS? CAN THE UNICODE BE
              NON-RESTRICTIVE? CAN ENCODING SCRIPT BE NON-STANDARDIZED AND
              INCLUSIVE? CAN A UNIVERSAL ENCODING BE APPLIED WITHOUT
              DISCREDITING LOCAL CUSTOMS? We could think of QUNI by collective
              Bye Bye Binary for example which is a first approach towards a
              more inclusive encoding. “QUNI allows us to bring together our
              fonts, with all the diversity they contain, around the same
              encoding system for their use by a wide audience.” However,
              concerning its effects on ‘local’ cultures: DOES DIGITALIZATION
              REALLY LEAD TO LANGUAGE PRESERVATION? CAN A NEW DIGITAL SPACE
              EMERGE TO FACE THESE CHALLENGES? As stated by Aditya Bayu Perdana,
              “digitalization should be hand in hand with the people’s
              willingness to use it in mundane everyday manner. Some scripts are
              not to be used digitally as their everyday common use is outside
              of the digital space.”
            </p>
          </div>
        </div>
        <div
          className="paragraph3"
          onMouseOver={() => handleHover("paragraph3")}
        >
          <div className="scroll-container">
            <h2>BANISHING DESIGN PRINCIPLES</h2>
            <p>
              On a global level, design criterias cannot be simply generalized
              without considering the unique cultural contexts and local
              identities that shape them. Should design principles really be
              adapted globally? Isn’t their intent for neutrality erasing local
              cultural identities and associated languages? The
              International/Swiss style is often taught at school globally and
              is often a first reference to graphic design. Academically it
              often dictates what is good or bad design. Should there really be
              design principles for defining what is good or bad design? How can
              non-Western-centric conventions adapt to these dominant design
              principles? How do local identities evolve under restrictive
              Western conventions? These Western-imposed conventions do come at
              the expense of local visual cultures and cultural diversity. Where
              expressiveness is toned down and nurtured. However, as stated by
              Peter Bilak, “The alphabet is by its very nature dependent on and
              defined by conventions. Type design that is not bound by
              convention is like a private language: both lack the ability to
              communicate.” Therefore there still needs to be some conventions
              for the message to come across successfully. Can local languages
              truly find their own distinct conventions and structures? Are they
              trapped by the dominant design principles? Can dominant powers
              adapt their narrative for more inclusive conventions?
            </p>
          </div>
        </div>
        <div
          className="paragraph4"
          onMouseOver={() => handleHover("paragraph4")}
        >
          <div className="scroll-container">
            <h2>LATINIZATION</h2>
            <p>
              For the development of multi-script typefaces, the Latin script is
              often the primary reference sometimes leading to forms of
              ‘Latinization’. When Latin shapes are incorporated into other
              scripts, regardless of whether they conform to the script’s
              initial conventions, this can result in a disregard for the
              script’s unique characteristics and ‘local’ identity. How can type
              design processes be less dependent on Latin script developments?
              Can script development break free from Latin script dominance?
              Despite some efforts to revitalize a script respectfully, most
              current type design processes remain centered on the notions and
              developments of the Latin script, with less attention paid to the
              specific needs and requirements of distinguished scripts. Current
              typographic endeavors for multi-script typefaces start with the
              objective of harmonization “yet the problem arising is
              assimilation” (Ben Ayed). There is a certain push for unifying
              scripts to be legible in the same exact way, with a typeface that
              matches perfectly from script to script. Where do we draw the line
              between processes of Latinization and independent development? At
              what point do we prioritize preserving the unique characteristics
              of non-Latin scripts over the pursuit of uniformity and legibility
              in multi-script typefaces? To adhere to Western markets some once
              exclusively Latin concepts have been applied to ‘local’ scripts
              completely foreign from that. Such as weights and thick and thin
              contrasts. In efforts to unify a wide range of scripts for Google
              Fonts Noto Sans, thick/thin contrasts have been named with the
              concepts of ‘serif’ and ‘sans serif’ completely irrelevant to
              ‘local’ scripts like Balinese, Javanese, or Lontara. Or any other
              scripts other than Latin or Greek. Is Latinization a new form of
              colonial autority on language? Is Latinization a new form of
              language standardization? Are ‘local’ scripts benefitting from
              being latinized or is it exclusively empowering the Latin script?
            </p>
          </div>
        </div>
        <div
          className="paragraph5"
          onMouseOver={() => handleHover("paragraph5")}
        >
          <div className="scroll-container">
            <h2>PUBLIC PRESENCE</h2>
            <p>
              Public signage is overly dominated with typefaces like the
              American's Highway Gothic present in an immense number of
              countries around the world. Doesn't that pose domincance over
              communication? The ubiquity of typefaces like America's Highway
              Gothic in public signage across numerous countries raises
              important questions about dominance in communication. Does the
              widespread adoption of such fonts inadvertently impose a singular
              cultural perspective on diverse communities?<br></br>
              <br></br>
              Public signage serves as a crucial tool for communication, guiding
              and informing people in various environments. However, the
              prevalence of certain typefaces, particularly those like Highway
              Gothic, suggests a hegemony in visual language that may overshadow
              alternative voices and perspectives.<br></br>
              <br></br>
              By standardizing typography across different regions and cultures,
              there is a risk of homogenizing communication and neglecting the
              rich diversity of local languages and visual traditions. What
              message does it send when the same font is used to convey
              information in vastly different cultural contexts?
              <br></br>
              <br></br>
              Moreover, the dominance of specific typefaces raises concerns
              about power dynamics and representation. Whose cultural and
              aesthetic preferences are being prioritized in the selection of
              these fonts? Are marginalized voices being silenced or
              overshadowed by the imposition of a dominant visual language?
              <br></br>
              <br></br>
              As we reflect on the impact of public signage typography, it
              becomes clear that the quest for universality in communication
              must not come at the expense of cultural diversity and
              representation. Embracing a multiplicity of typefaces and visual
              styles allows for greater inclusivity and recognition of the
              varied experiences and perspectives that shape our global
              landscape.<br></br>
              <br></br>
            </p>
          </div>
        </div>
        <div
          className="paragraph6"
          onMouseOver={() => handleHover("paragraph6")}
        >
          <div className="scroll-container">
            <h2>MATERIAL ESSENCE</h2>
            <p>
              The steps of making a modern typeface in a digital sphere mainly
              tends to the loss of its materiality. Over a series of
              modifications, imperfections lead to the medium the letters were
              initially engraved on or brushed into are less and less present.
              For the main objective of creating efficiency, yet sometimes
              burning a big part of the initial character. Should the process of
              digitalization be added to different scripts? As they all derive
              from different forms of materiality, the Balinese script Aksara
              Bali for example is heavily linked to its role in religious
              manuscripts, sacred in the forms of "lontars" made out of palm
              leaf strips and inked with burnt candlenut. If the main use of the
              script today is in a palm leaf manuscript, shouldn't the script
              still involve these imperfections as a vital part of its identity.
              What would happen if that materiality is not respected? Under
              colonial ruling, this is what happened for the Javanese script,
              which is a sister script of Aksara Bali, yet this one was changed
              to be adapted to movable type and to be printed with letterpress.
              Are we then not noticing these changes under a different colonial
              era? Should typefaces be developped the same as they were for
              Latin scripts but for other scripts? Because that process already
              works for the Latin script, it shouldnt not work for foreign
              scripts? See "Latinisation" for more on this subject.
            </p>
          </div>
        </div>
      </div>
      <div
        className="about-section"
        onMouseOver={() => handleHover("paragraph8")}
      >
        <div className="about-project">
          <h2>
            <mark>ABOUT</mark>
          </h2>
          <p>
            <mark>
              Made by Aimeric Permata Guerre in 2024, for his graduation from
              Willem de Kooning Academy (Rotterdam, Netherlands).
              <br></br>
              <br></br>
              Unveiling Nusantara is a manifesto that challenges and sparks
              conversations about decolonizing and de-canonizing type and
              graphic design to encourage the development of ‘local’ scripts and
              the ‘common informal’ of the Indonesian archipelago. It looks into
              the ongoing challenges due to the influence and past presence of
              Western colonial powers in the region.
            </mark>
          </p>
        </div>
        <div className="about-ressources">
          <h2>
            <mark>ADDITIONAL RESSOURCE</mark>
          </h2>
          <p>
            <mark>
              Ressources below shares this knowledge helped determine the
              attitude and power of my project.<br></br>
              <br></br>
              <a href="https://docs.google.com/document/d/1Hbymt6a3zz044xF_LCqGfTmXJip3cetj5sHlxZEjtJ4/edit">
                The Decolonial Reader
              </a>
              <br></br>
              <a href="https://www.donner.nl/politics-of-design/ruben-pater/9789063694227">
                The Politics of Design
              </a>
              <br></br>
              <a href="https://www.donner.nl/politics-of-design/ruben-pater/9789063694227">
                Affective Graphic Design: Beyond Identities & De-modernizing
                Design
              </a>
            </mark>
          </p>
        </div>
      </div>
      {/* When the user hovers over the image we apply the wiggle style to it */}
      <h1 className="title" style={{ opacity: prevHello ? 0 : 1 }}>
        {prevHello ? prevHello : hello}
      </h1>
    </>
  );
}
