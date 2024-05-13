import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHome from "./AppHome";
import Video from "./components/Integration/video/Video";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AppHome />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </Router>
  );
};

export default App;
