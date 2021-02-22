import React from "react";
import styled from "@emotion/styled";
// import _ from "lodash";

export default function NestedTable({ colors, title, children }) {
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
  return (
    <tr>
      <TdStyled color={colors[0]}>
        <InfoBlock color={"FFFFFF"}>
          <strong>{title}</strong>
          <table className="inner-table">
            <tbody>
              <tr>{children()}</tr>
            </tbody>
          </table>
        </InfoBlock>
      </TdStyled>
    </tr>
  );
}
