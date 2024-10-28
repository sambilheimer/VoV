import { ancestries } from "./ancestries";
import { inventory } from "./inventory";

// Randomly determine stats
function roll3d6KeepLowest() {
  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;
  const roll3 = Math.floor(Math.random() * 6) + 1;
  return Math.min(roll1, roll2, roll3);
}
function getRandomHealth() {
  return Math.floor(Math.random() * 6) + 1;
}
// Stores the current items for later reference
let currentInventory = {};
let inventoryCurrent; // Start at 5

function updateCurrentInventory() {
  currentInventory.armourType =
    document.getElementById("armourType").textContent;
  currentInventory.weaponType =
    document.getElementById("weaponType").textContent;
}

function generateCharacter() {
  const ancestrySelect = document.getElementById("ancestrySelectBtn").value;
  let selectedAncestryKey;
  // If the user has selected an ancestry, use that; otherwise, randomly select one
  if (ancestrySelect) {
    const ancestryKeys = Object.keys(ancestries);
    selectedAncestryKey = ancestrySelect; // Use the dropdown selection
  } else {
    const ancestryKeys = Object.keys(ancestries);
    selectedAncestryKey =
      ancestryKeys[Math.floor(Math.random() * ancestryKeys.length)]; // Random ancestry
  }

  const selectedAncestry = ancestries[selectedAncestryKey];

  // Helper function to get a random item from an array
  function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  // Object to map inventory categories to their corresponding HTML element IDs
  const inventoryMapping = {
    Exotica: "exotica",
    MGSource: "mgSource",
    MGGift: "mgGift",
    ArmourQuality: "armourTrait",
    ArmourType: "armourType",
    WeaponAspect: "weaponAspect",
    WeaponType: "weaponType",
    Gear1: "gear1",
    Gear2: "gear2",
  };

  currentInventory = {
    exotica: getRandomItem(inventory.Exotica),
    mgSource: getRandomItem(inventory.MGSource),
    mgGift: getRandomItem(inventory.MGGift),
    armourTrait: getRandomItem(inventory.ArmourQuality),
    armourType: getRandomItem(inventory.ArmourType),
    weaponAspect: getRandomItem(inventory.WeaponAspect),
    weaponType: getRandomItem(inventory.WeaponType),
    gear1: getRandomItem(inventory.Gear1),
    gear2: getRandomItem(inventory.Gear2),
  };

  // Update inventory display with the initial random items
  function updateInventoryDisplay(inventory) {
    Object.keys(inventoryMapping).forEach((key) => {
      const elementId = inventoryMapping[key];
      const element = document.getElementById(elementId);

      // Generate and store a random item in `currentInventory`
      const randomItem = getRandomItem(inventory[key]);
      currentInventory[key] = randomItem; // store in object
      element.innerHTML = randomItem;

      // Regenerate item on click and update stored value
      element.onclick = () => {
        const newRandomItem = getRandomItem(inventory[key]);
        currentInventory[key] = newRandomItem;
        element.innerHTML = newRandomItem;
      };
    });
  }

  updateInventoryDisplay(inventory);

  // Randomly select a name

  function setRandomName() {
    const randomName =
      selectedAncestry.names[
        Math.floor(Math.random() * selectedAncestry.names.length)
      ];
    document.getElementById("name").innerHTML = randomName;
  }
  setRandomName();
  document.getElementById("name").onclick = setRandomName;
  // Step 3: Randomly select traits based on the ancestry

  const randomTraits = {};
  Object.keys(selectedAncestry.traits).forEach((trait) => {
    const traitOptions = selectedAncestry.traits[trait];
    randomTraits[trait] =
      traitOptions[Math.floor(Math.random() * traitOptions.length)];
  });

  // Step 4: Replace the trait placeholders in the sentence
  let traitSentence = selectedAncestry.sentenceTemplate;
  let abilitySentence = selectedAncestry.abilities;
  Object.keys(randomTraits).forEach((trait) => {
    traitSentence = traitSentence.replace(
      trait.toUpperCase(),
      randomTraits[trait]
    );
  });

  // Step 5: Set ancestry description and abilities
  document.getElementById("ancestry").innerHTML = selectedAncestry.ancestryName;
  document.getElementById("ancestryDescription").innerHTML =
    selectedAncestry.description;
  document.getElementById("ancestryAbilities").innerHTML = abilitySentence;

  // Step 6: Output name and traits in text

  document.getElementById("ancestryTraits").innerHTML = traitSentence;

  // Step 7: Randomized character art
  //  let previousImageNumber = null;
  //  let randomImageNumber;
  //  do {
  //      randomImageNumber = Math.floor(Math.random() * selectedAncestry.imageCount) + 1;
  //  } while (randomImageNumber === previousImageNumber);
  // Store the current image number for the next generation
  //  previousImageNumber = randomImageNumber;
  // document.querySelector('.ancestryImg').style.backgroundImage = `url('assets/${selectedAncestryKey}-${randomImageNumber}.jpg')`;

  // Stats
  // Generate stats
  const stats = {
    str: roll3d6KeepLowest(),
    dex: roll3d6KeepLowest(),
    con: roll3d6KeepLowest(),
    int: roll3d6KeepLowest(),
    psy: roll3d6KeepLowest(),
    ego: roll3d6KeepLowest(),
    hp: getRandomHealth(),
  };

  let inventoryMax = stats.con + 10;

  function calculateInventory(): number {
    let inventoryCurrent: number = 7; // Start at 7

    // Adjust for armour slots
    if (currentInventory.armourType.includes("2 slots")) {
      inventoryCurrent += 1;
    } else if (currentInventory.armourType.includes("3 slots")) {
      inventoryCurrent += 2;
    } else if (currentInventory.armourType.includes("4 slots")) {
      inventoryCurrent += 3;
    } else if (currentInventory.armourType.includes("5 slots")) {
      inventoryCurrent += 4;
    } else if (currentInventory.armourType.includes("6 slots")) {
      inventoryCurrent += 5;
    }

    // Adjust for weapon slots
    if (currentInventory.weaponType.includes("2 slots")) {
      inventoryCurrent += 1;
    } else if (currentInventory.weaponType.includes("3 slots")) {
      inventoryCurrent += 2;
    } else if (currentInventory.weaponType.includes("4 slots")) {
      inventoryCurrent += 3;
    } else if (currentInventory.weaponType.includes("5 slots")) {
      inventoryCurrent += 4;
    } else if (currentInventory.weaponType.includes("6 slots")) {
      inventoryCurrent += 5;
    }

    return inventoryCurrent;
  }

  // Update `currentInventory` to reflect the page elements
  updateCurrentInventory();

  // Now call calculateInventory with the updated values
  const finalInvCur = calculateInventory();
  console.log("Final inventory slots:", finalInvCur);

  function calculateArmourDefense() {
    let armourDefense = 10; // Start at 10
    // Helper function to extract the armour bonus from a string
    function extractArmourBonus(traitString) {
      const match = String(traitString).match(/\+(\d+)/); // Looks for "+<number>"
      return match ? parseInt(match[1], 10) : 0;
    }
    // Adjust defense based on ancestry traits
    if (selectedAncestry.ancestryName.includes("Cacogen")) {
      const randomMutation =
        selectedAncestry.mutations[
          Math.floor(Math.random() * selectedAncestry.mutations.length)
        ];
      document.getElementById("mutation").innerHTML = randomMutation;
      if (randomMutation.includes("Armour")) {
        const bonus = extractArmourBonus(randomMutation);
        armourDefense += bonus; // Adds +2, +1, or other based on the extracted number
        console.log(bonus);
      }
    }
    // Adjust defense based on armour equipment
    if (currentInventory.armourType.includes("11 AD")) {
      armourDefense += 1;
    } else if (currentInventory.armourType.includes("12 AD")) {
      armourDefense += 2;
    } else if (currentInventory.armourType.includes("13 AD")) {
      armourDefense += 3;
    } else if (currentInventory.armourType.includes("14 AD")) {
      armourDefense += 4;
    } else if (currentInventory.armourType.includes("15 AD")) {
      armourDefense += 5;
    } else if (currentInventory.armourType.includes("16 AD")) {
      armourDefense += 6;
    }
    return armourDefense;
  }
  const finalDefense = calculateArmourDefense();

  // Update the HTML elements with generated values
  document.getElementById("str").innerHTML = stats.str;
  document.getElementById("dex").innerHTML = stats.dex;
  document.getElementById("con").innerHTML = stats.con;
  document.getElementById("int").innerHTML = stats.int;
  document.getElementById("psy").innerHTML = stats.psy;
  document.getElementById("ego").innerHTML = stats.ego;
  document.getElementById("hp").innerHTML = stats.hp;
  document.getElementById("ad").innerHTML = finalDefense;
  document.getElementById("invCur").innerHTML = finalInvCur;
  document.getElementById("invMax").innerHTML = inventoryMax;
}

document.querySelector(".characterGeneratorBtn").onclick = generateCharacter;

window.onload = function () {
  generateCharacter();
};
