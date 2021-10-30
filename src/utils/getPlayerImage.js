export default ({ rank, mainRole, additionalRoles }) => {
  let [parsedRank] = rank.split(' ');
  parsedRank = parsedRank.toLowerCase();

  return {
    rankEmblem: `img/ranked-emblems/Emblem_${parsedRank}.png`,
    mainRoleEmblem: `img/ranked-positions/Position_${parsedRank}-${mainRole.toLowerCase()}.png`,
    additionalRolesEmblem: additionalRoles
      ? additionalRoles.map((role) => `img/ranked-positions/Position_${parsedRank}-${role.toLowerCase()}.png`)
      : [],
  };
};
