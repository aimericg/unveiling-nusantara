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
      <div className="grid-container">
        <div className="paragraph1">
          <h2>The Waroeng Experience</h2>
          <p>
            Waroeng in Indonesia have started to be embodied by “cheap” fonts,
            such as impact, strechted type, cooper black and more. The use of
            these fonts are not the same in a western context, they are more
            used or they used to be more used for more conventional stuff.
            Waroeng have embraced new meanings and new purposes for the font,
            they are now used more unconventionally, in bold store fronts fulll
            of color and often strechted to the max.
            
            The graphic identity of Warung in Indonesia should be celebrated and embraced rather than seen as cheap. The practicality and the commonalities have emerged to give it its own charm.
          </p>
        </div>
        <div className="paragraph2">
          <h2>Typography as a Program</h2>
          <p>
            Latinisation - latin bias, Unicode standardisation and showcasing
            alternatives, materiality of type, holistic thinking, preserving
            scripts, taking back the public space / public signage
          </p>
        </div>
        <div className="paragraph3">
          <h2>Questions of Neutrality</h2>
          <p>Content of paragraph 3 goes here.</p>
        </div>
      </div>
      
      <div className="instructions">
        <h2>About this Project</h2>
        <p>
          This is the Glitch <strong>Hello React</strong> project. You can use
          it to build your own app. See more info in the{" "}
          <Link href="/about">About</Link> page, and check out README.md in the
          editor for additional detail plus next steps you can take!
        </p>
      </div>
    </>
  );
}
