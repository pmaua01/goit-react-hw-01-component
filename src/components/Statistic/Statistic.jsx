import PropTypes from "prop-types";

export const Statisctic = ({ data }) => {
  const { label, percentage } = data;
  return (
    <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
  );
};

Statisctic.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
