import React from "react";
import { InfoBlock, TdStyled } from "./StyledComponents";

export default function NestedTable({ colors, title, children }) {
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
