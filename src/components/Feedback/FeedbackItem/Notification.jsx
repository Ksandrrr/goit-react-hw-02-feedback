import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <h3>{message}</h3>;
};
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
