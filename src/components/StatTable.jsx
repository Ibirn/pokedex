import React from "react";
import styled from "@emotion/styled";
import _ from "lodash";

export default function StatTable({ currentPokemon }) {
  //fills stat bars
  const Stat = styled.div(
    {
      height: "1rem",
      textAlign: "left",
      borderRight: "1px solid white",
    },
    (props) => ({
      width: `${(props.value / 255) * 100}%`,
      backgroundColor: `#${props.color}`,
    })
  );

  return (
    <table className="stat-block">
      <tbody>
        <tr className="cell">
          <td>
            <strong>NAME:</strong>
            <table className="inner-table">
              <tbody>
                <tr>
                  <td>{_.capitalize(currentPokemon.name)}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr className="cell">
          <td>
            <strong>TYPE:</strong>
            <table className="inner-table">
              <tbody>
                <tr>
                  {currentPokemon.types.map((type, ind) => (
                    <td key={ind}>{type.type.name}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr className="cell">
          <td>
            <table className="inner-table">
              <tbody>
                <tr>
                  <th width="50%">HEIGHT:</th>
                  <td>{currentPokemon.height / 10}M</td>
                  <th width="50%">WEIGHT:</th>
                  <td>{currentPokemon.weight / 10}kG</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr className="cell">
          <td>
            <strong>ABILITIES:</strong>
            <table className="inner-table">
              <tbody>
                <tr>
                  {currentPokemon.abilities.map((ability, ind) => (
                    <td className="abilities" key={ind}>
                      {ability.ability.name}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr>
          <td>
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
          </td>
        </tr>
      </tbody>
    </table>
  );
}
