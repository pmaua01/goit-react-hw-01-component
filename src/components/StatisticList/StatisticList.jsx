import { Statisctic } from "components/Statistic/Statistic";
import PropTypes from "prop-types";
import {
  StatiscticListStyle,
  StatiscticListItem,
} from "./StatiscticList.styled";
export const StatiscticList = ({ data }) => {
  return (
    <StatiscticListStyle>
      {data.map((element) => (
        <StatiscticListItem key={element.id}>
          <Statisctic data={element} />
        </StatiscticListItem>
      ))}
    </StatiscticListStyle>
  );
};

StatiscticList.prototype = {
  key: PropTypes.string.isRequired,
};
