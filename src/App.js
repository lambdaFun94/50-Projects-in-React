import "./App.css";
import ExpandingCards from "./components/ExpandingCards/ExpandingCards";
import ProgressBar from "./components/ProgressSteps/ProgressBar";
import Card from "./components/Card";

function App() {
  const projects = [
    {
      title: "Expanding Cards",
      component: <ExpandingCards />,
    },
    {
      title: "Progress Steps",
      component: <ProgressBar />,
    },
  ];

  const renderProjects = () => {
    return projects.map((project) => (
      <Card title={project.title} content={project.component} />
    ));
  };

  return (
    <div className="app">
      <header>
        <h1>
          50 Projects in 50 Days <em>in React</em>
        </h1>
        <h2>
          Thanks to <a href="https://www.traversymedia.com/">Brad Traversy</a>
        </h2>
      </header>

      <section>{renderProjects()}</section>
    </div>
  );
}

export default App;
