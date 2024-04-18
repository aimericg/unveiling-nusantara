import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

// Our language strings for the header
const strings = ["Bahasa Dekolonial", "Decolonial Language"];

// Utility function to choose a random value from the language array
function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}

/**
 * The Home function defines the content that makes up the main content of the Home page
 *
 * This component is attached to the /about path in router.jsx
 * The function in app.jsx defines the page wrapper that this appears in along with the footer
 */

export default function Home() {
  /* We use state to set the hello string from the array https://reactjs.org/docs/hooks-state.html
     - We'll call setHello when the user clicks to change the string
  */
  const [hello, setHello] = React.useState(strings[0]);

  /* The wiggle function defined in /hooks/wiggle.jsx returns the style effect and trigger function
     - We can attach this to events on elements in the page and apply the resulting style
  */
  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  // When the user clicks we change the header language
  const handleChangeHello = () => {
    // Choose a new Hello from our languages
    const newHello = randomLanguage();

    // Call the function to set the state string in our component
    setHello(newHello);
  };
  return (
    <>
      <h1 className="title">{hello}</h1>
      {/* When the user hovers over the image we apply the wiggle style to it */}
      <h1 className="title">
        --- Decolonial Design <br></br>----- Manifesto Indonesia
      </h1>
      <div className="grid-container">
        <div className="paragraph1">
          <div className="scroll-container">
            <h2>Warung Banner Identity</h2>
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
                <img
                  src="https://cdn.glitch.global/53ce0b84-77c9-492a-9b7d-5ff4dec3955e/pecel-lele-warung.jpg?v=1713431011588"
                  alt="Warung stand in lamongan"
                ></img>{" "}
                <br></br> The use of these fonts are not the same in a western
                context, they are more used or they used to be more used for
                more conventional stuff. Waroeng have embraced new meanings and
                new purposes for the font, they are now used more
                unconventionally, in bold store fronts fulll of color and often
                strechted to the max. The graphic identity of Warung in
                Indonesia should be celebrated and embraced rather than seen as
                cheap. The practicality and the commonalities have emerged to
                give it its own charm. Waroeng in Indonesia have started to be
                embodied by “cheap” fonts, such as impact, strechted type,
                cooper black and more. The use of these fonts are not the same
                in a western context, they are more used or they used to be more
                used for more conventional stuff. Waroeng have embraced new
                meanings and new purposes for the font, they are now used more
                unconventionally, in bold store fronts fulll of color and often
                strechted to the max. The graphic identity of Warung in
                Indonesia should be celebrated and embraced rather than seen as
                cheap. The practicality and the commonalities have emerged to
                give it its own charm.
              </mark>
            </p>
          </div>
        </div>
        <div className="paragraph2">
          <div className="scroll-container">
            <h2>Typeface as a Program</h2>
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
        <div className="paragraph3">
          <div className="scroll-container">
            <h2>Positions of Neutrality</h2>
            <p>Is it really efficient to create neutrality?</p>
          </div>
        </div>
        <div className="paragraph4">
          <div className="scroll-container">
            <h2>Latinisation</h2>
            <p>
              Are the aspects of weights, italics, contrast only applicable to
              Latin script? Design education is centered around Latin script,
              notions of weights, italics, contrast have been used for the
              developments of typefaces and is creating the designer's liberty
              to create emphasis on certain aspects. Though in other languages,
              emphasis can be done through different forms.
            </p>
          </div>
        </div>
        <div className="paragraph5">
          <div className="scroll-container">
            <h2>Public Presence</h2>
            <p>
              Public signage is overly dominated with typefaces like the
              American's Highway Gothic present in an immense number of
              countries around the world. Doesn't that pose domincance over
              communication?
            </p>
          </div>
        </div>
        <div className="paragraph6">
          <div className="scroll-container">
            <h2>Process of Modernisation</h2>
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
        <div className="paragraph6">
          <div className="scroll-container">
            <h2>Banishing Design Principles</h2>
            <p>Should there really be design principles for defining what is good or bad design? On a global level, generalising criterias for design can not be simply put.</p>
          </div>
        </div>
      </div>

      <div className="grid-container2">
        <div className="about-project">
          <h2>About this Project</h2>
          <p>
            This is a project started by Aimeric Permata Guerre, for his
            graduation from Willem de Kooning Academy (Rotterdam, NL). <br></br>
            <br></br>
            The main purpose was a rediscovery of his Indonesian roots through
            the study of local languages and the developement of the Graphic
            Design in the region of South East Asia. As well as growing a
            critical perspective on his past education which tended to be a bit
            more Eurocentric/Western centric. This project very much welcomes
            criticism and outside opinions. You are invited to contribute via
            the following form.
          </p>
        </div>
        <div className="about-ressources">
          <h2>Ressources</h2>
          <p>
            Ressources below shares this knowledge helped determine the attitude
            and power of my project.<br></br>
            <br></br>
            <a href="https://docs.google.com/document/d/1Hbymt6a3zz044xF_LCqGfTmXJip3cetj5sHlxZEjtJ4/edit">
              The Decolonial Reader
            </a>
            <br></br>
            <a href="https://www.donner.nl/politics-of-design/ruben-pater/9789063694227">
              The Politics of Design
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
