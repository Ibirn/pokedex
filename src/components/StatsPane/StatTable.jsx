import React from "react";
import _ from "lodash";
import NestedTable from "./NestedTable";
import { InfoBlock, Stat, TdStyled, BackgroundTable } from "./StyledComponents";

export default function StatTable({ currentPokemon, colors }) {
  return (
    <div className="display-bottom">
      <BackgroundTable colors={colors}>
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
                                  value={
                                    currentPokemon.stats[0].base_stat
                                      ? currentPokemon.stats[0].base_stat
                                      : 25
                                  }
                                  color={
                                    currentPokemon.stats[0].base_stat
                                      ? "ae2334"
                                      : "deb887"
                                  }
                                >
                                  <div className="stat-text">HP</div>
                                </Stat>
                              </td>
                            </tr>
                            <tr>
                              <td className="stat-bg attack">
                                <Stat
                                  value={
                                    currentPokemon.stats[1].base_stat
                                      ? currentPokemon.stats[1].base_stat
                                      : 25
                                  }
                                  color={
                                    currentPokemon.stats[1].base_stat
                                      ? "86482f"
                                      : "deb887"
                                  }
                                >
                                  <div className="stat-text">ATK</div>
                                </Stat>
                              </td>
                            </tr>
                            <tr>
                              <td className="stat-bg defense">
                                <Stat
                                  value={
                                    currentPokemon.stats[2].base_stat
                                      ? currentPokemon.stats[2].base_stat
                                      : 25
                                  }
                                  color={
                                    currentPokemon.stats[2].base_stat
                                      ? "2c89af"
                                      : "deb887"
                                  }
                                >
                                  <div className="stat-text">DEF</div>
                                </Stat>
                              </td>
                            </tr>
                            <tr>
                              <td className="stat-bg special-attack">
                                <Stat
                                  value={
                                    currentPokemon.stats[3].base_stat
                                      ? currentPokemon.stats[3].base_stat
                                      : 25
                                  }
                                  color={
                                    currentPokemon.stats[3].base_stat
                                      ? "48246d"
                                      : "deb887"
                                  }
                                >
                                  <div className="stat-text">SP ATK</div>
                                </Stat>
                              </td>
                            </tr>
                            <tr>
                              <td className="stat-bg special-defense">
                                <Stat
                                  value={
                                    currentPokemon.stats[4].base_stat
                                      ? currentPokemon.stats[4].base_stat
                                      : 25
                                  }
                                  color={
                                    currentPokemon.stats[4].base_stat
                                      ? "214574"
                                      : "deb887"
                                  }
                                >
                                  <div className="stat-text">SP DEF</div>
                                </Stat>
                              </td>
                            </tr>
                            <tr>
                              <td className="stat-bg speed">
                                <Stat
                                  value={currentPokemon.stats[5].base_stat}
                                  color={"229443"}
                                >
                                  <div className="stat-text">SPD</div>
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
      </BackgroundTable>
    </div>
  );
}
