import styled from "@emotion/styled";

const TableStyled = styled.table({}, (props) => ({
  backgroundColor: `#${props.color}`,
}));

const Stat = styled.div(
  {
    height: "1rem",
    textAlign: "left",
    borderRadius: "1rem",
    color: "#F4F4F4",
  },
  (props) => ({
    width: `${(props.value / 255) * 100}%`,
    backgroundColor: `#${props.color}`,
  })
);

const InfoBlock = styled.div(
  {
    display: "flex",
    flexDirection: "column",
    borderRadius: "1rem",
    width: "100%",
    margin: "2px",
  },
  (props) => ({
    backgroundColor: `#${props.color}`,
    width: `${props.width}`,
  })
);

//dynamic color for tables
const TdStyled = styled.td(
  {
    display: "flex",
    justifyContent: "center",
  },
  (props) => ({
    backgroundColor: `#${props.color}`,
  })
);

export { TdStyled, Stat, InfoBlock, TableStyled };
