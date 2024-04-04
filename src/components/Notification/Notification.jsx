// eslint-disable-next-line react/prop-types
const Notification = ({ totalFeedback }) => {
  if (totalFeedback !== 0) {
    return null;
  }
  return (
    <div>
      <span>No feedback yet</span>
    </div>
  );
};

export default Notification;
