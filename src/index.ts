import { ancestries, Ancestry } from "./ancestries";
import { inventory, InventoryItems } from "./inventory";
import { getRandom } from "./utils";
// Helper function to get a random item from an array

// Function to randomly determine stats
function roll3d6KeepLowest(): number {
  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;
  const roll3 = Math.floor(Math.random() * 6) + 1;
  return Math.min(roll1, roll2, roll3);
}
// Function to randomly determine health
function getRandomHealth(): number {
  return Math.floor(Math.random() * 6) + 1;
}
let randomTraits;

function generateCharacter() {
  const ancestrySelect: string = (
    document.getElementById("ancestrySelectBtn") as HTMLSelectElement
  ).value; // this gives the value of the selected option so we can use it to select the ancestry
  let selectedAncestryKey; // this will be the key of the selected ancestry
  const ancestryKeys = Object.keys(ancestries);
  // If the user has selected an ancestry, use that; otherwise, randomly select one
  if (ancestrySelect) {
    // if ancestrySelect is not null or undefined; i.e., if the user has selected an ancestry
    // const ancestryKeys = Object.keys(ancestries); // create a variable equal to an array of the ancestries object properties (in this case a list of ancestries as strings); the Object.keys() method returns an array of the properties of an object, in this case a list of all the ancestries since they are the keys of the ancestries object. This line then says that the variable ancestryKeys will be an array of strings, which I can then use to select a random ancestry
    selectedAncestryKey = ancestrySelect; // therefore, use the dropdown selection to select the ancestry
  } else {
    // otherwise randomly select one
    selectedAncestryKey = getRandom(ancestryKeys); // Random ancestry; this line creates a variable selectedAncestryKey by taking the array of ancestryKeys and randomly selecting one of its strings.
  }
  const selectedAncestry: Ancestry =
    ancestries[selectedAncestryKey as keyof typeof ancestries];

  // set static ancestry properties
  document.getElementById("ancestry")!.innerHTML =
    selectedAncestry.ancestryName;
  document.getElementById("ancestryDescription")!.innerHTML =
    selectedAncestry.description;
  document.getElementById("ancestryAbilities")!.innerHTML =
    selectedAncestry.abilities;
  document.getElementById("ancestryTraits")!.innerHTML =
    selectedAncestry.sentenceTemplate;

  function initializeTraits(ancestry: Ancestry) {
    const selectedTraits: { [key: string]: string | undefined } = {};

    // Generate random traits and populate the HTML
    for (const [traitType, traitArray] of Object.entries(ancestry.traits)) {
      if (Array.isArray(traitArray) && traitArray.length > 0) {
        // Generate a random trait
        const traitValue = getRandom(traitArray);
        selectedTraits[traitType] = traitValue;

        // Find the corresponding HTML element by ID
        const element = document.getElementById(traitType);
        if (element && traitValue) {
          element.innerText = traitValue; // Set initial text content
          // Add an onclick listener to regenerate only this trait
          element.onclick = () => {
            const newTraitValue = getRandom(traitArray);
            if (newTraitValue) {
              element.innerText = newTraitValue; // Update text with new trait
              selectedTraits[traitType] = newTraitValue; // Update selected traits
            }
          };
        }
      }
    }

    return selectedTraits;
  }

  const randomTraits = initializeTraits(selectedAncestry);

  const randomInventory = initializeInventory(inventory);

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

  let inventoryMaxKey = 10 + stats.con;
  let inventoryMax = inventoryMaxKey.toString();

  // updateInventoryDisplay(inventory);
  // const selectedArmourType = randomInventory.armourType;
  // const selectedWeaponType = randomInventory.weaponType;
  // let inventoryCurrent = 7; // Start at 7

  let selectedArmourType = randomInventory.armourType;
  let selectedWeaponType = randomInventory.weaponType;

  // inventory functions up top
  function calculateArmourDefense() {
    let armourDefense = 10; // Start at 10
    if (selectedArmourType) {
      if (selectedArmourType.includes("11 AD")) {
        armourDefense += 1;
      } else if (selectedArmourType.includes("12 AD")) {
        armourDefense += 2;
      } else if (selectedArmourType.includes("13 AD")) {
        armourDefense += 3;
      } else if (selectedArmourType.includes("14 AD")) {
        armourDefense += 4;
      } else if (selectedArmourType.includes("15 AD")) {
        armourDefense += 5;
      } else if (selectedArmourType.includes("16 AD")) {
        armourDefense += 6;
      } else {
        return armourDefense;
      }
    }
    return armourDefense;
  }

  function calculateInventorySize() {
    let inventoryCurrent = 7;
    // Adjust for armour slots
    if (selectedArmourType) {
      if (selectedArmourType.includes("2 slots")) {
        inventoryCurrent += 1;
      } else if (selectedArmourType.includes("3 slots")) {
        inventoryCurrent += 2;
      } else if (selectedArmourType.includes("4 slots")) {
        inventoryCurrent += 3;
      } else if (selectedArmourType.includes("5 slots")) {
        inventoryCurrent += 4;
      } else if (selectedArmourType.includes("6 slots")) {
        inventoryCurrent += 5;
      } else {
      }
    }
    // Adjust for weapon slots
    if (selectedWeaponType) {
      if (selectedWeaponType.includes("2 slots")) {
        inventoryCurrent += 1;
      } else if (selectedWeaponType.includes("3 slots")) {
        inventoryCurrent += 2;
      } else if (selectedWeaponType.includes("4 slots")) {
        inventoryCurrent += 3;
      } else if (selectedWeaponType.includes("5 slots")) {
        inventoryCurrent += 4;
      } else if (selectedWeaponType.includes("6 slots")) {
        inventoryCurrent += 5;
      } else {
      }
    }
    return inventoryCurrent;
  }

  function initializeInventory(inventory: InventoryItems) {
    selectedInventory = {};
    // Generate random inventory items and populate the HTML
    for (const [itemType, itemArray] of Object.entries(inventory)) {
      if (Array.isArray(itemArray) && itemArray.length > 0) {
        // Generate a random item
        const itemValue = getRandom(itemArray);
        selectedInventory[itemType] = itemValue;

        // Find the corresponding HTML element by ID
        const element = document.getElementById(itemType);
        if (element && itemValue) {
          element.innerText = itemValue; // Set initial text content

          // Add an onclick listener to regenerate only this item
          // Add an onclick listener to regenerate this item
          element.onclick = () =>
            regenerateItemAndUpdateValues(
              itemType as keyof InventoryItems,
              inventory
            );
        }
      }
    }

    return selectedInventory;
  }

  let selectedInventory: { [key: string]: string | undefined } = {}; // Declare it outside the functions

  // Function to regenerate the item and update armor defense and inventory size
  function regenerateItemAndUpdateValues(
    itemType: keyof InventoryItems,
    inventory: InventoryItems
  ) {
    // Get the inventory element
    const element = document.getElementById(itemType);
    if (!element) return;

    // Regenerate the inventory item
    const newItemValue = getRandom(inventory[itemType]);
    if (newItemValue) {
      element.innerText = newItemValue; // Update the item in the HTML
      selectedInventory[itemType] = newItemValue; // Update the selected inventory

      // Update selectedArmourType or selectedWeaponType based on itemType
      if (itemType === "armourType") {
        selectedArmourType = newItemValue; // Update selected armor type
      } else if (itemType === "weaponType") {
        selectedWeaponType = newItemValue; // Update selected weapon type
      }

      // Recalculate armor defense and inventory size
      applyAdAndInventory(); // Call this to refresh values displayed in the HTML
    }
  }

  function applyAdAndInventory() {
    let currentInventory = calculateInventorySize().toString();
    let finalDefense = calculateArmourDefense().toString();
    document.getElementById("ad")!.innerHTML = finalDefense;
    document.getElementById("invCur")!.textContent = currentInventory;
    console.log(currentInventory);
  }

  calculateInventorySize();
  calculateArmourDefense();
  applyAdAndInventory();

  // Update the HTML elements with generated values for Stats
  Object.entries(stats).forEach(([key, value]) => {
    const element = document.getElementById(key);
    if (element) element.innerHTML = value.toString();
  });

  document.getElementById("invMax")!.innerHTML = inventoryMax;
}

document.getElementById("generateBtn")!.onclick = generateCharacter;

window.onload = function () {
  generateCharacter();
};
