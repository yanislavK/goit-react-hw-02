/* eslint-disable react/prop-types */
import css from "./Feedback.module.css";

const Feedback = ({
  totalFeedback,
  positiveFeedback,
  stats: { good, bad, neutral },
}) => {
  return (
    <div className={css.box}>
      <ul className={css.list}>
        <li>Good: {good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{`${totalFeedback}`}</li>
        <li>Positive:{`${positiveFeedback}%`}</li>
      </ul>
    </div>
  );
};

export default Feedback;
