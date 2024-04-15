import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";

function CoreConcepts({image,title,description}) {
  return (
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )

}

function App() {

  const [tabContent,setTabContent] = useState("Please select a tab");

  function clickHandler(selectedButton) {
    setTabContent(selectedButton);
    console.log("Clicked ",selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]}/>
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onHandleClick={() => clickHandler("Components")}>Components</TabButton>
            <TabButton onHandleClick={() => clickHandler("JSX")}>JSX</TabButton>
            <TabButton onHandleClick={() => clickHandler("Props")}>Props</TabButton>
            <TabButton onHandleClick={() => clickHandler("State")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
