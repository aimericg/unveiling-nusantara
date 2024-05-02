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
        >>> Decolonial Design <br></br>> >>>> Manifesto Indonesia
      </h1>
      <div className="grid-container">
        <div className="paragraph1">
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
                <img
                  src="https://cdn.glitch.global/53ce0b84-77c9-492a-9b7d-5ff4dec3955e/pecel-lele-warung.jpg?v=1713431011588"
                  alt="Warung stand in lamongan"
                ></img>{" "}
                <br></br>{" "}
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
              </mark>
            </p>
          </div>
        </div>
        <div className="paragraph2">
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
        <div className="paragraph3">
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
        <div className="paragraph4">
          <div className="scroll-container">
            <h2>LATINISATION AND LATIN BIAS</h2>
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
        <div className="paragraph5">
          <div className="scroll-container">
            <h2><mark>PUBLIC PRESENCE</mark></h2>
            <p><mark>
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
              information in vastly different cultural contexts?<br></br>
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
        <div className="paragraph6">
          <div className="scroll-container">
            <h2>MODERNISATION</h2>
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
            <h2>BANISHING DESIGN PRINCIPLES</h2>
            <p>
              Should there really be design principles for defining what is good
              or bad design? On a global level, generalising criterias for
              design can not be simply put. Design principles cannot and
              shouldnt be adapted globally, this has consequences the local
              cultural identity and its associated language.
            </p>
          </div>
        </div>
      </div>

      <div className="grid-container2">
        <div className="about-project">
          <h2>PURPOSE OF THIS TEXT</h2>
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
          <h2>ADDITIONAL RESSOURCES</h2>
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
