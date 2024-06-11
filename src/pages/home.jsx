import React, { useState, useEffect } from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

const strings1 = [
  "HOW CAN CULTURAL CRINGE BE COUNTERED?", 
  "HOW CAN THESE COLONIAL TRAPS BE AVOIDED?"

];
const strings2 = [
  "ARE WESTERN SOFTWARE THEREFORE DICTATING THE DEVELOPMENTS OF ‘LOCAL’ SCRIPTS?", "IS THE UNICODE RESPECTING ‘LOCAL’ ETHICS AND CUSTOMS?", "CAN THE UNICODE BE NON-RESTRICTIVE?", "CAN ENCODING SCRIPT BE NON-STANDARDIZED AND INCLUSIVE?", "CAN A UNIVERSAL ENCODING BE APPLIED WITHOUT DISCREDITING LOCAL CUSTOMS?", "DOES DIGITALIZATION REALLY LEAD TO LANGUAGE PRESERVATION?", "CAN A NEW DIGITAL SPACE EMERGE TO FACE THESE CHALLENGES?",

  "DO ENDANGERED SCRIPTS ONLY SURVIVE IF DIGITALIZED?",
  "DOES DIGITALIZATION REALLY CONCLUDE TO LANGUAGE PRESERVATION?",
  "CAN THE UNICODE BE NON-RESTRICTIVE?",
  "CAN ENCODING SCRIPT BE NON-STANDARDIZED AND INCLUSIVE?",
];
const strings3 = [
  "IS THIS LOSS OF MATERIALITY A NECESSARY SACRIFICE FOR THE SAKE OF EFFICIENCY AND MODERNITY?", 
  "WHAT WOULD HAPPEN IF THAT MATERIALITY IS LOST?", 
  "SHOULDN'T THE SCRIPT'S IMPERFECTIONS BE RESPECTED AS AN INTEGRAL PART OF ITS IDENTITY?", 
  "IS THE MATERIALITY OF NON-LATIN SCRIPTS BEING ERODED?", 
  "IN THIS SEARCH FOR PERFECT TYPOGRAPHY, DO THESE MODERN APPROACHES SHARE THE VISION OF LOCALS?", 
  "ARE THESE TYPEFACES JUST A QUICK OR EFFICIENT DIGITAL ALTERNATIVE TO SIGN PAINTINGS?", 
  "ARE THEY BENEFITTING LOCAL TRADITIONS AND LOCAL CUSTOMS?"

];
const strings4 = [
  "HOW CAN LOCAL SCRIPTS ABSTRACT THEMSELVES FROM PAST LATIN SCRIPT DEVELOPMENTS?",
  "IS NEUTRALITY TRULY ACHIEVABLE IN A GLOBAL CONTEXT?",
  "ARE LATIN SCRIPT DEVELOPMENTS TO BE IGNORED?",
  "ARE LATIN SCRIPT DEVELOPMENTS IRRELEVANT TO LOCAL SCRIPTS?",
  "WHO SHOULD BE ABLE TO PART TAKE IN SCRIPT DECISIONS AND ENCODING?", 
  "HOW CAN TYPE DESIGN PROCESSES BE LESS DEPENDENT ON LATIN SCRIPT DEVELOPMENTS?", 
  "CAN SCRIPT DEVELOPMENT BREAK FREE FROM LATIN SCRIPT DOMINANCE?", 
  "WHERE DO WE DRAW THE LINE BETWEEN PROCESSES OF LATINIZATION AND INDEPENDENT DEVELOPMENT?",
];
const strings5 = [
  "ARE WESTERN TYPEFACES CENSORING 'LOCAL' CULTURAL IDENTITIES?", "ARE NEW ‘LOCAL’ TYPEFACES AND SCRIPTS ABLE TO DEVELOP THEIR OWN DISTINCTIVE IDENTITY?", "WHERE IS THE PRESENCE OF INDONESIAN TYPOGRAPHY AMIDST THIS DOMINANCE?", "IS INDONESIAN TYPE DESIGN GIVEN ENOUGH SPACE TO DEVELOP ITS OWN IDENTITY?"

];
const strings6 = [
  "SHOULD DESIGN PRINCIPLES REALLY BE ADAPTED GLOBALLY?", 
  "ISN’T THEIR INTENT FOR NEUTRALITY ERASING LOCAL CULTURAL IDENTITIES AND ASSOCIATED LANGUAGES?",
   "SHOULD THERE REALLY BE DESIGN PRINCIPLES FOR DEFINING WHAT IS GOOD OR BAD DESIGN?", "HOW CAN NON-WESTERN-CENTRIC CONVENTIONS ADAPT TO THESE DOMINANT DESIGN PRINCIPLES?", "HOW DO LOCAL IDENTITIES EVOLVE UNDER RESTRICTIVE WESTERN CONVENTIONS?", "CAN LOCAL LANGUAGES TRULY FIND THEIR OWN DISTINCT CONVENTIONS AND STRUCTURES?", "ARE THEY TRAPPED BY THE DOMINANT DESIGN PRINCIPLES?", "CAN DOMINANT POWERS ADAPT THEIR NARRATIVE FOR MORE INCLUSIVE CONVENTIONS?",

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
    const aboutSection = document.querySelector(".about-section");

    const originalContent = aboutSection
      .querySelector("#originalAbout")
      .cloneNode(true);

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
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1Element) => {
        h1Element.style.color = "white";
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
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1Element) => {
        h1Element.style.color = "";
      });
    });

    paragraph2.addEventListener("mouseover", () => {
      const chosenColor = "rgba(0,230,230,1)";
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
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1Element) => {
        h1Element.style.color = "white";
      });
    });

    paragraph2.addEventListener("mouseout", () => {
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
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1Element) => {
        h1Element.style.color = "";
      });
    });

    paragraph3.addEventListener("mouseover", () => {
      const chosenColor = "rgba(206, 189, 172, 1)";
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
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1Element) => {
        h1Element.style.color = "white";
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
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1Element) => {
        h1Element.style.color = "";
      });
    });

    paragraph4.addEventListener("mouseover", () => {
      document.body.style.background = "yellow";
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = "yellow";
      });
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1Element) => {
        h1Element.style.color = "white";
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
      document.body.style.background = "rgba(20, 220, 20, 1)";
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = "rgba(20, 220, 20, 1)";
      });
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1Element) => {
        h1Element.style.color = "white";
      });
    });

    paragraph5.addEventListener("mouseout", () => {
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

    paragraph6.addEventListener("mouseover", () => {
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
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1Element) => {
        h1Element.style.color = "white";
      });
    });

    paragraph6.addEventListener("mouseout", () => {
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
      const h1Elements = document.querySelectorAll("h1");
      h1Elements.forEach((h1Element) => {
        h1Element.style.color = "";
      });
    });

    aboutSection.addEventListener("mouseover", () => {
      const scrollContainers = document.querySelectorAll(".scroll-container");
      scrollContainers.forEach((container) => {
        container.style.maxHeight = "53vh";
        container.style.top = "-14rem";
      });
      
      const aboutParagraph = aboutSection.querySelector("p");
      if (aboutParagraph) {
        aboutParagraph.innerHTML = `
        <mark>Unveiling Nusantara is a design manifesto that sparks conversations about decolonizing type and graphic design, encouraging the development of ‘local’ scripts and the ‘common informal’ of the Indonesian archipelago. The manifesto explores the ongoing challenges posed by the historical influence of Western colonial powers, placing strict colonial conventions and ideologies back up for debate.
<br></br>
It draws its argumentation from observations gathered through a visual derive, workshops in Indonesia, and interviews with people involved with local scripts. Unlike more common design manifestos, its argumentation is less defined and is open for discussion, addressing questions to help interrogate our own positionality.
<br></br>
This manifesto is mainly addressed to individuals and students whose education is Western-centric and who work within a multicultural scope. Furthermore, it is also intended for use in Indonesia as a motivational booster for movements of urgent reclaiming.
<br></br>
‘Nusantara’ refers to the Indonesian archipelago as a whole, reclaimed as a term predating Western colonization. It encompasses the concept of “buitengewesten,” which originally referred to the outer islands beyond Java during the Javanese empire. Now to be used rebelliously to reclaim the identity of overlooked regions. By embracing this term, ‘Nusantara’ becomes a powerful symbol of Indonesian resistance, challenging dominant narratives against the erasure of ‘local’ cultures and the imposition of limiting foreign values.
</mark>
      `;
      }
    });

    aboutSection.addEventListener("mouseout", () => {
      const scrollContainers = document.querySelectorAll(".scroll-container");
      scrollContainers.forEach((container) => {
        container.style.maxHeight = "";
        container.style.top = "";
      });

      const aboutParagraph = aboutSection.querySelector("p");
      if (aboutParagraph) {
        aboutParagraph.style.opacity = 1;
        aboutParagraph.parentNode.replaceChild(
          originalContent.cloneNode(true),
          aboutParagraph
        );
      }
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
              Java. They are characterized by illustrations/paintings of
              animals, neon borders and text with warm gradients.
              <br></br>
              <br></br>
              This Western critical eye relates to A.A. Philip’s theory of
              cultural cringe, which Filipino cultural worker Clara Balaguer
              defines as the phenomenon “by which the culture produced in an
              ex-colonial or colonial country is seen as inferior to that being
              produced in the colonial seat”2. This is furthermore accentuated
              by Novreica, “the opulence of these Indonesian-styled graphics is
              sometimes overlooked, forgotten, and even underestimated because
              of the assumptions of them being low-brow or kitschy.”
              <br></br>
              <br></br>
              How can cultural cringe be countered? How can these colonial traps
              be avoided? The focus of study should be shifted towards
              prioritizing ‘local’ cultures rather than the study of Western
              concepts first. How can the Western design can be re-questioned?
              How can one step out of the Western design canon? Should a new
              canon be built?
              <br></br>
              <br></br>
              Novreica emphasizes that “Indonesian ephemeras deserve to be used
              as a primary source for further research– which offers unique
              windows into cultures past.”3 By digging deeper into Indonesian
              ephemeras and artifacts, we can uncover the stories and designs
              that make Indonesian culture unique.
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
              therefore adapted and conceived according to that user.1 Present
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
              cannot access font features linked to particular languages.”2
              (Mitchell). The use of ‘local’ scripts is sometimes therefore
              “susceptible to highly unattractive typographic representation, as
              some users are using the "QWERTY" keyboard to type out scripts
              like Balinese, often leading to strings of gibberish characters.”3
              (Perdana) The adaptation of software for ‘local’ minorities is
              often neglected yet those have impacts on how their languages and
              culture develop over time.
              <br></br>
              <br></br>
              As Western technological developments are the ones leading the
              march for the implementation of ‘local’ scripts, they hold a
              certain position of power. Are Western software therefore
              dictating the development of ‘local’ scripts? With the importation
              of Unicode, ‘local’ scripts are subjected to a new form of writing
              system that is developed around ‘movable type’ and the Latin
              script. In addition to that, trapped in a new language
              standardization with a Unicode consortium that stays impartial. Is
              the Unicode therefore always respecting ‘local’ ethics and
              customs? Can the Unicode be non-restrictive? Can encoding scriptbe
              non-standardized and inclusive? Can a universal encoding be
              applied without discrediting local customs?
              <br></br>
              <br></br>
              We could think of QUNI by collective Bye Bye Binary for example
              which is a first approach towards a more inclusive encoding. “QUNI
              allows us to bring together our fonts, with all the diversity they
              contain, around the same encoding system for their use by a wide
              audience.”*4
              <br></br>
              <br></br>
              However, concerning its effects on ‘local’ cultures: Does
              digitalization really lead to language preservation? Can a new
              digital space emerge to face these challenges? As stated by Aditya
              Bayu Perdana, “digitalization should be hand in hand with the
              people’s willingness to use it in mundane everyday manner. Some
              scripts are not to be used digitally as their everyday common use
              is outside of the digital space.”
            </p>
          </div>
        </div>
        <div
          className="paragraph3"
          onMouseOver={() => handleHover("paragraph3")}
        >
          <div className="scroll-container">
            <h2>MATERIAL ESSENCE</h2>
            <p>
              The process of creating a modern typeface in the digital sphere
              often prioritizes efficiency over materiality, leading to the loss
              of the script’s original written characteristics. As modifications
              are made, imperfections are gradually erased, and the medium on
              which the letters were initially engraved or brushed becomes less
              prominent in its design.Is this loss of materiality a necessary
              sacrifice for the sake of efficiency and modernity? The Balinese
              script Aksara Bali is heavily linked to its role in religious
              manuscripts, sacred in the forms of ‘lontar’ made out of palm leaf
              strips and inked with burnt candlenut. If the main use of the
              script today is in a palm-leaf manuscript. What would happen if
              that materiality is lost? Shouldn’t the script’s imperfections be
              respected as an integral part of its identity?
              <br></br>
              <br></br>
              Under colonial rule, the Javanese script, a sister script of
              Aksara Bali, was altered to accommodate movable type and
              letterpress printing. Are we witnessing a similar phenomenon in
              the digital era, where the materiality of non-Latin scripts is
              being eroded?
              <br></br>
              <br></br>
              In this search for perfect typography, do these modern approaches
              share the vision of locals? Views of modernity in South East Asia
              for example are quite distinct from Western visions, sometimes
              viewed quite negatively. “In Myanmar/Burmese, other more
              idiosyncratic terms for the modern have also appeared, related not
              to time but rather to an ill-at-ease mental state: a phenomenon
              which seems not to have been replicated in the other languages
              under discussion.” (Nelson, 1)
              <br></br>
              <br></br>
              However, there is a resurgence to materiality with the arrival of
              hand brush, and handwritten stylized typography in the Indonesian
              ‘common informal’. “Some years ago, probably circa 2010-2018,
              lettering was booming in Indonesia, thanks to Instagram and other
              similar platforms. More people tried hand lettering, calligraphy,
              etc.” However, are these typefaces just a quick or efficient
              digital alternative to sign paintings? Are they benefitting local
              traditions and local customs?
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
              scripts, regardless of whether they conform to the script's
              initial conventions, this can result in a disregard for the
              script's unique characteristics and ‘local’ identity.
              <br></br>
              <br></br>
              How can type design processes be less dependent on Latin script
              developments? Can script development break free from Latin script
              dominance? Despite some efforts to revitalize a script
              respectfully, most current type design processes remain centered
              on the notions and developments of the Latin script, with less
              attention paid to the specific needs and requirements of
              distinguished scripts. Current typographic endeavors for
              multi-script typefaces start with the objective of harmonization
              “yet the problem arising is assimilation” (Ben Ayed). There is a
              certain push for unifying scripts to be legible in the same exact
              way, with a typeface that matches from script to script.
              <br></br>
              <br></br>
              Where do we draw the line between processes of Latinization and
              independent development? At what point do we prioritize preserving
              the unique characteristics of non-Latin scripts over the pursuit
              of uniformity and legibility in multi-script typefaces? To adhere
              to Western markets some once exclusively Latin concepts have been
              applied to ‘local’ scripts completely foreign from that. Such as
              weights and thick and thin contrasts. In efforts to unify a wide
              range of scripts for Google Fonts Noto Sans, thick/thin contrasts
              have been named with the concepts of ‘serif’ and ‘sans serif’
              completely irrelevant to ‘local’ scripts like Balinese, Javanese,
              or Lontara. Or any other scripts other than Latin or Greek.
              <br></br>
              <br></br>
              Is Latinization a new form of language standardization? Are
              ‘local’ scripts benefitting from being latinized or is it
              exclusively empowering the Latin script?
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
              The widespread use of Western typefaces in Indonesian “common
              informal” graphic design raises important concerns about cultural
              representation and the development of ‘local’ design identities.
              Western typefaces have been popularized globally, spreading a
              design vision that can be inconsiderate of ‘local’ customs.
              <br></br>
              <br></br>
              There is prevalence of American typefaces —such as Helvetica,
              which has become quite ubiquitous.”Now it’s probably never going
              to go away because it’s ubiquitous; it’s a default. It’s air, you
              know, it’s just there. There’s no choice. “1 (Spiekerman,
              Helvetica, 2007)
              <br></br>
              <br></br>
              Clearview Hwy/Highway Gothic, the chosen typeface(s) for the
              national traffic signage of Indonesia whilst initially
              conceptualized for the traffic signage of the United-States.
              Cooper Black, Impact, Egyptienne, Balloon and other common Western
              typefaces found on warung stands—illustrate the significant
              Western influence on Indonesian visual culture. Davida is used out
              of a Victorian context, for its decorative features.
              <br></br>
              <br></br>
              Typefaces mentioned previously were mainly conceptualized for
              Western environments making them not entirely suitable for such
              global outreach. Possibly leading to lack of consideration for the
              specific linguistic and cultural needs of Southeast Asian
              countries like Indonesia. Can typefaces and conventions be
              suitable globally without disrespecting ‘local’ customs? Shouldn’t
              the appropriateness of these Western typefaces be questioned
              before being accepted as the default choice for all situations?
              Does the dominant presence of Western typefaces change the way
              locals interact with letters and their unique alphabets?
              <br></br>
              <br></br>
              With this massive dominance of Western typefaces, Are new ‘local’
              typefaces and scripts able to develop their own distinctive
              identity? Very little room is given for Indonesian type design to
              be explored. Cultural identity with the use of Latin script is
              also suppressed and placed in a concerning position for its
              development. Where is the presence of Indonesian typography amidst
              this dominance? Is Indonesian type design given enough space to
              develop its own identity?
            </p>
          </div>
        </div>
        <div
          className="paragraph6"
          onMouseOver={() => handleHover("paragraph6")}
        >
          <div className="scroll-container">
            <h2>BANISHING DESIGN PRINCIPLES?</h2>
            <p>
              On a global level, design criterias cannot be simply generalized
              without considering the unique cultural contexts and local
              identities that shape them. Should design principles really be
              adapted globally? Isn’t their intent for neutrality erasing local
              cultural identities and associated languages?
              <br></br>
              <br></br>
              The International/Swiss style is often taught at school globally
              and is often a first reference to graphic design. Academically it
              often dictates what is good or bad design. Should there really be
              design principles for defining what is good or bad design? How can
              non-Western-centric conventions adapt to these dominant design
              principles? How do local identities evolve under restrictive
              Western conventions? These Western-imposed conventions do come at
              the expense of local visual cultures and cultural diversity. Where
              expressiveness is toned down and nurtured.
              <br></br>
              <br></br>
              However, as stated by Peter Bilak, “The alphabet is by its very
              nature dependent on and defined by conventions. Type design that
              is not bound by convention is like a private language: both lack
              the ability to communicate.” Therefore there still needs to be
              some conventions for the message to come across successfully.
              <br></br>
              <br></br>
              Can local languages truly find their own distinct conventions and
              structures? Are they trapped by the dominant design principles?
              Can dominant powers adapt their narrative for more inclusive
              conventions?
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
          <p id="originalAbout">
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
