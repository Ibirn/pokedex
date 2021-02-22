import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import _ from "lodash";

export default function StatTable({ currentPokemon, colors }) {
  //fills stat bars
  const Stat = styled.div(
    {
      height: "1rem",
      textAlign: "left",
      borderRight: "1px solid white",
      borderRadius: "1rem",
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

  useEffect(() => {
    console.log(colors);
  }, [colors]);

  return (
    <div className="display-bottom">
      <table>
        <tbody>
          <tr>
            <TdStyled color={colors[0]}>
              <InfoBlock color={"FFFFFF"}>
                <strong>NAME:</strong>
                <table className="inner-table">
                  <tbody>
                    <tr>
                      <td>{_.capitalize(currentPokemon.name)}</td>
                    </tr>
                  </tbody>
                </table>
              </InfoBlock>
            </TdStyled>
          </tr>

          <tr>
            <TdStyled color={colors[0]}>
              <InfoBlock color="FFFFFF">
                <strong>TYPE:</strong>
                <table className="inner-table">
                  <tbody>
                    <tr>
                      {currentPokemon.types.map((type, ind) => (
                        <TdStyled color={colors[ind]} key={ind}>
                          {_.capitalize(type.type.name)}
                        </TdStyled>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </InfoBlock>
            </TdStyled>
          </tr>

          <tr>
            <TdStyled color={colors[0]}>
              <InfoBlock color="FFFFFF" width={"50%"}>
                <strong>HEIGHT:</strong>
                <table className="inner-table">
                  <tbody>
                    <tr>
                      <td>{currentPokemon.height / 10}M</td>
                    </tr>
                  </tbody>
                </table>
              </InfoBlock>
              <InfoBlock color="FFFFFF" width={"50%"}>
                <strong>WEIGHT:</strong>
                <table className="inner-table">
                  <tbody>
                    <tr>
                      <td>{currentPokemon.weight / 10}kG</td>
                    </tr>
                  </tbody>
                </table>
              </InfoBlock>
            </TdStyled>
          </tr>

          <tr>
            <TdStyled color={colors[0]}>
              <InfoBlock color="FFFFFF">
                <strong>ABILITIES:</strong>
                <table className="inner-table">
                  <tbody>
                    <tr>
                      {currentPokemon.abilities.map((ability, ind) => (
                        <td className="abilities" key={ind}>
                          {_.capitalize(ability.ability.name)}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </InfoBlock>
            </TdStyled>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <TdStyled color={colors[1] ? colors[1] : colors[0]}>
              <InfoBlock color="FFFFFF">
                <strong>STATS:</strong>
                <table className="inner-table">
                  <tbody>
                    <tr>
                      <td className="stat-bg hit-points">
                        <Stat
                          value={currentPokemon.stats[0].base_stat}
                          color={"ae2334"}
                        >
                          HP
                        </Stat>
                      </td>
                    </tr>
                    <tr>
                      <td className="stat-bg attack">
                        <Stat
                          value={currentPokemon.stats[1].base_stat}
                          color={"86482f"}
                        >
                          ATK
                        </Stat>
                      </td>
                    </tr>
                    <tr>
                      <td className="stat-bg defense">
                        <Stat
                          value={currentPokemon.stats[2].base_stat}
                          color={"2c89af"}
                        >
                          DEF
                        </Stat>
                      </td>
                    </tr>
                    <tr>
                      <td className="stat-bg special-attack">
                        <Stat
                          value={currentPokemon.stats[3].base_stat}
                          color={"48246d"}
                        >
                          SP ATK
                        </Stat>
                      </td>
                    </tr>
                    <tr>
                      <td className="stat-bg special-defense">
                        <Stat
                          value={currentPokemon.stats[4].base_stat}
                          color={"214574"}
                        >
                          SP DEF
                        </Stat>
                      </td>
                    </tr>
                    <tr>
                      <td className="stat-bg speed">
                        <Stat
                          value={currentPokemon.stats[5].base_stat}
                          color={"229443"}
                        >
                          SPD
                        </Stat>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </InfoBlock>
            </TdStyled>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
