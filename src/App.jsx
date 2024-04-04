import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const initialStats = JSON.parse(window.localStorage.getItem("stats")) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    window.localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  const updateFeedback = (feedbackType) => {
    setStats({ ...stats, [feedbackType]: stats[feedbackType] + 1 });
  };
  const resetFeedback = () => setStats({ good: 0, neutral: 0, bad: 0 });
  const totalFeedback = stats.good + stats.neutral + stats.bad;
  const positiveFeedback = Math.round((stats.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options update={updateFeedback} reset={resetFeedback} />
      <Feedback
        stats={stats}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
      <Notification totalFeedback={totalFeedback} />
    </>
  );
};
export default App;
