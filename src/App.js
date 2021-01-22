import "./App.css";
import ExpandingCards from "./components/ExpandingCards/ExpandingCards";
import ProgressBar from "./components/ProgressSteps/ProgressBar";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          50 Projects in 50 Days <em>in React</em>
        </h1>
        <h2>
          Thanks to <a href="https://www.traversymedia.com/">Brad Traversy</a>
        </h2>
      </header>

      <section>
        <h3> Project One</h3>
        <h4> Expanding Cards</h4>
        <ExpandingCards />
        <ProgressBar />
      </section>
    </div>
  );
}

export default App;
