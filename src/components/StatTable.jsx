import React from "react";
import styled from "@emotion/styled";
import _ from "lodash";
import NestedTable from "./NestedTable";

export default function StatTable({ currentPokemon, colors }) {
  //fills stat bars
  const Stat = styled.div(
    {
      height: "1rem",
      textAlign: "left",
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

  return (
    <div className="display-bottom">
      <table>
        <tbody>
          <tr>
            <td>
              <table id="info-table">
                <tbody>
                  <NestedTable
                    colors={colors}
                    title={"NAME"}
                    children={() => (
                      <td>{_.capitalize(currentPokemon.name)}</td>
                    )}
                  />
                  <NestedTable
                    colors={colors}
                    title={"TYPE:"}
                    children={() =>
                      currentPokemon.types.map((type, ind) => (
                        <td key={ind}>{_.capitalize(type.type.name)}</td>
                      ))
                    }
                  />
                  <NestedTable
                    colors={colors}
                    title={"HEIGHT:"}
                    children={() => <td>{currentPokemon.height / 10}M</td>}
                  />
                  <NestedTable
                    colors={colors}
                    title={"WEIGHT:"}
                    children={() => <td>{currentPokemon.weight / 10}kG</td>}
                  />
                  <NestedTable
                    colors={colors}
                    title={"ABILITIES:"}
                    children={() =>
                      currentPokemon.abilities.map((ability, ind) => (
                        <td key={ind}> {_.capitalize(ability.ability.name)}</td>
                      ))
                    }
                  />
                </tbody>
              </table>
              <table id="stat-table">
                <tbody>
                  <tr>
                    <TdStyled color={colors[1] ? colors[1] : colors[0]}>
                      <InfoBlock color="FFFFFF">
                        <strong>STATS:</strong>
                        <table className="inner-table buffer">
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
