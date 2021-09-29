import { useState, useEffect } from "react";
import Pagination from "./components/Pagination";

//components
import Wrap from "./utils/Wrap.styles";
import SideBar from "./components/SideBar.styled";
import { NewsCard } from "./components/NewsCardContainer.styled";

function App() {
  const [checked, setChecked] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [news, setNews] = useState([]);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };
  console.log(showFeedback);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => setNews(json));
  }, []);

  return (
    <Wrap>
      {showFeedback ? (
        <SideBar
          checked={checked}
          handleChange={handleChange}
          showFeedback={showFeedback}
          setShowFeedback={setShowFeedback}
          withFeedback
        />
      ) : (
        <SideBar
          checked={checked}
          handleChange={handleChange}
          showFeedback={showFeedback}
          setShowFeedback={setShowFeedback}
        />
      )}

      <Pagination
        NewsCard={NewsCard}
        data={news}
        pageLimit={3}
        dataLimit={checked ? 5 : 6}
        checked={checked}
      />
    </Wrap>
  );
}

export default App;
