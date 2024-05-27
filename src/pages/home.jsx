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
  "IS NEUTRALITY TRULY ACHIEVABLE IN A GLOBAL CONTEXT?",
  "ARE LATIN SCRIPT DEVELOPMENTS TO BE IGNORED?",
  "ARE LATIN SCRIPT DEVELOPMENTS IRRELEVANT TO LOCAL SCRIPTS?",
  "WHO SHOULD BE ABLE TO PART TAKE IN SCRIPT DECISIONS AND ENCODING?",
];
const strings4 = [
  "HOW CAN LOCAL SCRIPTS ABSTRACT THEMSELVES FROM PAST LATIN SCRIPT DEVELOPMENTS?"
];
const strings5 = [
  "ARE AMERICAN TYPEFACES CONTROLLING COMMUNICATION IN FOREIGN COUNTRIES?"
];
const strings6 = [
  "ARE TYPEFACES TO ABSTRACT AWAY FROM THEIR MATERIAL PAST?",
  "IS MODERNITY TO BE DEFINED IN THE SAME WAY GLOBALLY?"
];
const strings7 = [
  "WHAT IS GOOD OR BAD DESIGN IN A GLOBAL CONTEXT?",
  "HOW CAN WESTERN VISIONS ASSERT DOMINANCE OVER GLOBAL DESIGN KNOWLEDGE?"
];
const strings8 = [
  "UNVEILING NUSANTARA BY AIMERIC PERMATA GUERRE",
  
];

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
        : paragraph === "paragraph7"
        ? strings7
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
    const paragraph7 = document.querySelector(".paragraph7");

    paragraph1.addEventListener("mouseover", () => {
      const chosenColor = "#ff00ff";
      document.body.style.background = chosenColor;

      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = chosenColor;
      });
      const highlightElements = document.querySelectorAll(
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark, .paragraph7 mark"
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
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark, .paragraph7 mark"
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
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark, .paragraph7 mark"
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
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark, .paragraph7 mark"
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
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark, .paragraph7 mark"
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
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark, .paragraph7 mark"
      );
      highlightElements.forEach((highlightElement) => {
        highlightElement.style.boxShadow = "";
      });
    });
    
    paragraph7.addEventListener("mouseover", () => {
      const chosenColor = "red";
      document.body.style.background = chosenColor;
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = chosenColor;
      });
      const highlightElements = document.querySelectorAll(
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark, .paragraph7 mark"
      );
      highlightElements.forEach((highlightElement) => {
        highlightElement.style.boxShadow =
          "inset 0 1px 5px rgba(255, 0, 0, 0.3)";
      });
    });

    paragraph7.addEventListener("mouseout", () => {
      document.body.style.background = ""; // reset the background color
      const markElements = document.querySelectorAll(".about-section mark");
      markElements.forEach((markElement) => {
        markElement.style.background = "";
      });
      const highlightElements = document.querySelectorAll(
        ".paragraph1 mark, .paragraph2 mark, .paragraph3 mark, .paragraph4 mark, .paragraph5 mark, .paragraph6 mark, .paragraph7 mark"
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
            <h2>
              <mark>VERNACULAR SHOUTING</mark>
            </h2>

            <p>
              <mark>
                Waroeng in Indonesia have started to be embodied by “cheap”
                fonts, such as impact, strechted type, cooper black and more.
                The use of these fonts are not the same in a western context,
                they are more used or they used to be more used for more
                conventional stuff. Waroeng have embraced new meanings and new
                purposes for the font, they are now used more unconventionally,
                in bold store fronts fulll of color and often strechted to the
                max. The graphic identity of Warung in Indonesia should be
                celebrated and embraced rather than seen as cheap. The
                practicality and the commonalities have emerged to give it its
                own charm. Waroeng in Indonesia have started to be embodied by
                “cheap” fonts, such as impact, strechted type, cooper black and
                more.
                <br></br>
                <br></br>
                <img
                  src="https://cdn.glitch.global/53ce0b84-77c9-492a-9b7d-5ff4dec3955e/pecel-lele-warung.jpg?v=1713431011588"
                  alt="Warung stand in lamongan"
                ></img>{" "}
                <img
                  style={{ left: "7rem" }}
                  src="https://cdn.glitch.global/7a0d470d-a08c-46c5-8148-bedf2cbc70f7/Pedagang_Makanan_Pecel_Lele_Lamongan_DiKebumen_Jateng_NKRI.jpg?v=1715015137489"
                  alt="Warung stand in lamongan"
                ></img>{" "}
                <br></br> <br></br>
                <a>
                  CAN TYPEFACES BE READAPTED IN A FOREIGN ENVIRONMENT? ARE
                  TYPEFACES TO CHANGE FUNCTION IN A FOREIGN ENVIRONMENT? CAN
                  TYPEFACES CHANGE POSITIONALITY WHEN BEING USED VERNACULARLY?
                </a>{" "}
                The use of these fonts are not the same in a western context,
                they are more used or they used to be more used for more
                conventional stuff. Waroeng have embraced new meanings and new
                purposes for the font, they are now used more unconventionally,
                in bold store fronts fulll of color and often strechted to the
                max. The graphic identity of Warung in Indonesia should be
                celebrated and embraced rather than seen as cheap. The
                practicality and the commonalities have emerged to give it its
                own charm. Waroeng in Indonesia have started to be embodied by
                “cheap” fonts, such as impact, strechted type, cooper black and
                more. The use of these fonts are not the same in a western
                context, they are more used or they used to be more used for
                more conventional stuff. Waroeng have embraced new meanings and
                new purposes for the font, they are now used more
                unconventionally, in bold store fronts fulll of color and often
                strechted to the max. The graphic identity of Warung in
                Indonesia should be celebrated and embraced rather than seen as
                cheap. The practicality and the commonalities have emerged to
                give it its own charm.
                <br></br>
                <br></br>
                Should we accept the design canon or should start over from
                scratch and remove it? Its time for the canon to incorporate
                these different voices in design.
                <br></br>
                <br></br>
                There is also this shouting aspect of having ALL CAPS. It comes
                from a more capitalist approach and does not correspond the
                design thinking of Western designers. It is the perfect example
                to the showcase of how design is not well seen in a global
                perspective. Its in a way a conflict of who is being the loudest
                to put themselves forward.
                <br></br>
                <br></br>
                <img
                  style={{ left: "4rem" }}
                  src="https://cdn.glitch.global/7a0d470d-a08c-46c5-8148-bedf2cbc70f7/Pecel_Lele_Ayo_Mampir_-_Jelutung%2C_Kota_Jambi%2C_JA.jpg?v=1715015129285"
                  alt="Warung stand banners in Lamongan, East Java Indonesia"
                ></img>{" "}
              </mark>
            </p>
          </div>
        </div>
        <div
          className="paragraph2"
          onMouseOver={() => handleHover("paragraph2")}
        >
          <div className="scroll-container">
            <h2>
              <mark>TYPOGRAPHY AS A PROGRAM</mark>
            </h2>
            <p>
              {" "}
              <mark>
                Latinisation - latin bias, Unicode standardisation and
                showcasing alternatives, materiality of type, holistic thinking,
                preserving scripts, taking back the public space / public
                signage Apple and Adobe and large companies involved in the
                technologies of fonts and computers do not value the importance
                of other scripts and put themselves in a hierarchical role in
                which scripts must be adapted to their conventions/standards,
                not the other way around. In a larger perspective, perhaps other
                models should be inovated to counter this problem and perhaps
                Unicode is not the only way after all? The unicode also lacks
                funding and is mostly developped and iterating with the help of
                volunteer work. The Unicode should not be seen as this flawless
                and perfect model. It is a method of standardisation in itself.
                <br></br>
                <br></br>
                The use of typography is now heavily reliant on its digital form
                as a software, one that is nurtured for a specific expected use
                and that is mainly centered around the english language and
                languages that use the Latin alphabet as it is undoubtably the
                environment in which it was developped the most. The unicode
                consortium in that sense is made initially for the Latin script,
                now has been adapted to expand to various foreign scripts but a
                large latin bias is still quite present.
              </mark>
            </p>
          </div>
        </div>
        <div
          className="paragraph3"
          onMouseOver={() => handleHover("paragraph3")}
        >
          <div className="scroll-container">
            <h2>
              <mark>POSITIONS OF NEUTRALITY</mark>
            </h2>
            <p>
              <mark>
                Is it really efficient to create neutrality? Can you really be
                neutral? Perhaps you could in a more local Western environment
                but the emphasis on trying to show neutrality already creates a
                standpoint. Is there only one neutrality? Is neutral the same in
                every language? under different cultures and experiences? Title:
                Exploring Neutrality in Latin Script and Typography Is it truly
                possible to achieve neutrality? This question becomes
                particularly poignant when we consider the Latin script and
                typography.
                <br></br>
                <br></br>
                In our quest for neutrality, do we inadvertently create biases?
                Can there be a universal standard for neutrality, or does it
                vary across languages, cultures, and experiences? In many
                Western contexts, there's a prevailing notion that neutrality
                can be attained through certain typographic choices and the use
                of Latin script. However, this assumption warrants scrutiny. The
                very act of striving for neutrality already implies a
                standpoint, one that may not necessarily align with the diverse
                perspectives and cultural nuances present globally. Moreover,
                neutrality itself is not a monolithic concept. What may seem
                neutral in one cultural context could carry different
                connotations or implications in another. The fonts, styles, and
                even the spacing of letters can evoke different emotions and
                associations, shaped by the unique histories and experiences of
                different communities. Furthermore, the idea of neutrality in
                language and typography raises questions about power dynamics.
                Whose perspective is being privileged in the pursuit of
                neutrality? Whose voices are being marginalized or excluded?
                These considerations underscore the complexity of the concept
                and challenge us to reevaluate our assumptions about what
                constitutes neutrality. Ultimately, the quest for neutrality in
                Latin script and typography invites us to engage in a deeper
                exploration of language, culture, and representation. Rather
                than aiming for a one-size-fits-all solution, we must embrace
                diversity and multiplicity, recognizing that true neutrality may
                lie not in uniformity, but in embracing and celebrating
                difference.
              </mark>
            </p>
          </div>
        </div>
        <div
          className="paragraph4"
          onMouseOver={() => handleHover("paragraph4")}
        >
          <div className="scroll-container">
            <h2>
              <mark>LATINISATION AND LATIN BIAS</mark>
            </h2>
            <p>
              <mark>
                Are the aspects of weights, italics, contrast only applicable to
                Latin script? Design education is centered around Latin script,
                notions of weights, italics, contrast have been used for the
                developments of typefaces and is creating the designer's liberty
                to create emphasis on certain aspects. Though in other
                languages, emphasis can be done through different forms.
              </mark>
            </p>
          </div>
        </div>
        <div
          className="paragraph5"
          onMouseOver={() => handleHover("paragraph5")}
        >
          <div className="scroll-container">
            <h2>
              <mark>PUBLIC PRESENCE</mark>
            </h2>
            <p>
              <mark>
                Public signage is overly dominated with typefaces like the
                American's Highway Gothic present in an immense number of
                countries around the world. Doesn't that pose domincance over
                communication? The ubiquity of typefaces like America's Highway
                Gothic in public signage across numerous countries raises
                important questions about dominance in communication. Does the
                widespread adoption of such fonts inadvertently impose a
                singular cultural perspective on diverse communities?<br></br>
                <br></br>
                Public signage serves as a crucial tool for communication,
                guiding and informing people in various environments. However,
                the prevalence of certain typefaces, particularly those like
                Highway Gothic, suggests a hegemony in visual language that may
                overshadow alternative voices and perspectives.<br></br>
                <br></br>
                By standardizing typography across different regions and
                cultures, there is a risk of homogenizing communication and
                neglecting the rich diversity of local languages and visual
                traditions. What message does it send when the same font is used
                to convey information in vastly different cultural contexts?
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
              </mark>
            </p>
          </div>
        </div>
        <div
          className="paragraph6"
          onMouseOver={() => handleHover("paragraph6")}
        >
          <div className="scroll-container">
            <h2>
              <mark>MODERNISATION</mark>
            </h2>
            <p>
              <mark>
                The steps of making a modern typeface in a digital sphere mainly
                tends to the loss of its materiality. Over a series of
                modifications, imperfections lead to the medium the letters were
                initially engraved on or brushed into are less and less present.
                For the main objective of creating efficiency, yet sometimes
                burning a big part of the initial character. Should the process
                of digitalization be added to different scripts? As they all
                derive from different forms of materiality, the Balinese script
                Aksara Bali for example is heavily linked to its role in
                religious manuscripts, sacred in the forms of "lontars" made out
                of palm leaf strips and inked with burnt candlenut. If the main
                use of the script today is in a palm leaf manuscript, shouldn't
                the script still involve these imperfections as a vital part of
                its identity. What would happen if that materiality is not
                respected? Under colonial ruling, this is what happened for the
                Javanese script, which is a sister script of Aksara Bali, yet
                this one was changed to be adapted to movable type and to be
                printed with letterpress. Are we then not noticing these changes
                under a different colonial era? Should typefaces be developped
                the same as they were for Latin scripts but for other scripts?
                Because that process already works for the Latin script, it
                shouldnt not work for foreign scripts? See "Latinisation" for
                more on this subject.
              </mark>
            </p>
          </div>
        </div>
        <div
          className="paragraph7"
          onMouseOver={() => handleHover("paragraph7")}
        >
          <div className="scroll-container">
            <h2>
              <mark>BANISHING DESIGN PRINCIPLES</mark>
            </h2>
            <p>
              <mark>
                Should there really be design principles for defining what is
                good or bad design? On a global level, generalising criterias
                for design can not be simply put. Design principles cannot and
                shouldnt be adapted globally, this has consequences the local
                cultural identity and its associated language.
              </mark>
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
            <mark>PURPOSE OF THIS TEXT</mark>
          </h2>
          <p>
            <mark>
              This is a project started by Aimeric Permata Guerre, for his
              graduation from BA. Graphic Design at Willem de Kooning Academy
              (Rotterdam, Netherlands). <br></br>
              <br></br>
              The main purpose was a rediscovery of his Indonesian roots through
              the study of local languages and the developement of the Graphic
              Design in the region of South East Asia. As well as growing a
              critical perspective on his past education which tended to be a
              bit more Eurocentric/Western centric. This project very much
              welcomes criticism and outside opinions. You are invited to
              contribute via the following form.
              <br></br>
              <br></br>
              By writting this manifesto I am not authoritivally imposing change
              and searching for solutions to all problems rather creating a
              topics discussion to potentially address them in my own design
              practices.
            </mark>
          </p>
        </div>
        <div className="about-ressources">
          <h2>
            <mark>ADDITIONAL RESSOURCES</mark>
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
