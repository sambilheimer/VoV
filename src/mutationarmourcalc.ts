// let randomMutation;
// // Helper function to extract the armour bonus from a string
// function extractArmourBonus(traitString) {
//   const match = String(traitString).match(/\+(\d+)/); // Looks for "+<number>"
//   return match ? parseInt(match[1], 10) : 0;
// }
// // Adjust defense based on ancestry traits
// const randomMutation = selectedAncestry.traits.mutations;
// if (selectedAncestry.traits.mutations) {
//   if (selectedAncestry.traits.mutations.includes("Armour")) {
//     const bonus = extractArmourBonus(randomMutation);
//     armourDefense += bonus; // Adds +2, +1, or other based on the extracted number
//     console.log(bonus);
//   } else {
//     return armourDefense;
//   }
// }
