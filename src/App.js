import "./App.css";
import ExpandingCards from "./components/ExpandingCards/ExpandingCards";

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
      </section>
    </div>
  );
}

export default App;
