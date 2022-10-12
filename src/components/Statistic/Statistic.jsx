import PropTypes from "prop-types";

export const Statisctic = ({ data: { id, label, percentage } }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
  );
};

Statisctic.prototype = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};
