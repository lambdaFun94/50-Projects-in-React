import "./App.css";
import Card from "./components/Card";
import ExpandingCards from "./components/ExpandingCards/ExpandingCards";
import ProgressBar from "./components/ProgressSteps/ProgressBar";
import HiddenSearch from "./components/HiddenSearch/HiddenSearch";
import BlurryLoading from "./components/BlurryLoading/BlurryLoading";

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
    {
      title: "Hidden Search",
      component: <HiddenSearch />,
    },
    {
      title: "",
      component: <BlurryLoading />,
    },
  ];

  const renderProjects = () => {
    return projects.map((project) => (
      <Card
        key={project.title}
        title={project.title}
        content={project.component}
      />
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
