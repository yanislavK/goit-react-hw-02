// eslint-disable-next-line react/prop-types
import css from "./Options.module.css";

// eslint-disable-next-line react/prop-types
const Options = ({ update, reset, totalFeedback }) => {
  return (
    <div className={css.box}>
      <button onClick={() => update("good")}>good</button>
      <button onClick={() => update("bad")}>bad</button>
      <button onClick={() => update("neutral")}>neutral</button>
      {totalFeedback != 0 && <button onClick={() => reset()}>reset</button>}
    </div>
  );
};

export default Options;
