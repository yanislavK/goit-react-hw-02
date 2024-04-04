/* eslint-disable react/prop-types */
import css from "./Feedback.module.css";

const Feedback = ({
  positiveFeedback,
  totalFeedback,
  stats: { good, bad, neutral },
}) => {
  if (totalFeedback === 0) {
    return null;
  }
  return (
    <div className={css.box}>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Positive:{`${positiveFeedback}%`}</li>
      </ul>
    </div>
  );
};

export default Feedback;
