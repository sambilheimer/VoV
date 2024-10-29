// import { getRandom } from "./utils";

// Define the type for the ancestries object
export interface InventoryItems {
  exotica: string[];
  mGSource: string[];
  mGift: string[];
  armourQuality: string[];
  armourType: string[];
  weaponAspect: string[];
  weaponType: string[];
  gear1: string[];
  gear2: string[];
}
// export const ancestries: Ancestries = {
export const inventory: InventoryItems = {
  exotica: [
    "Mirror Ring - Projects a hologram copy of the wearer that mimics their actions.",
    "A Fool’s Head - The severed head of a synthetic jester. Not in great condition but can still remember some jokes.",
    "Singing Crystal - When struck, sings loudly and beautifully for up to an hour.",
    "Nightmare Box - Small cube of unbreakable, dark-tinted glass. One small peephole. Anyone looks inside will be paralysed by horror.",
    "Sandworm Horn - Blow outdoors to summon a sandworm, if you are bold enough.",
    "Midas Bomb - Transforms organic matter into gold.",
    "Sky-seeking Salve - Reverses effect of gravity on object it coats. Take care when outdoors",
    "Chameleon Cloak - Perfectly matches the colour of its surroundings",
    "Desiccated Mycomorph - Tiny dried out fungus-man. A drop of blood will revive him.",
    "Flesh of the Honeyed Lamb - Stolen from the Cult of the Honeyed Lamb; meat imbued with a powerful medicinal psychedelic.",
    "Agoniser - A barbaric relic. Silver needle that causes unbearable pain to organic creatures without leaving a mark.",
    "Exultant’s Hawk - Cybernetic hunting animal, bound to you telepathically. 3 HP, Armour 17, d4 claw damage.",
    "Black Heart - Repulsive twitching cyborg organ. Will slowly and painfully revive a single dead body.",
    "All-Purpose Idol - Imbued with powerful neuro-active programming. Observers always believe idol represents the deity they worship.",
    "Ulfire Candle - Ulfire is the ninth colour; its light has the unusual quality of shining through solid objects. It is blocked by lead.",
    "Vial of ICE-9 - Alchemical substance that transforms all water it touches into un-meltable ice.",
    "Pale Blade of Amun-Oh - Priests of Amun-Oh pledged never to take a life; their white knives will cut through anything except living flesh.",
    "Blasphemies of the Binary Demon - A tablet engraved with a series of quantum-logical propositions. Poses little threat to organic life, but can be deadly to sentient machines.",
    "Helpful Snake - It lives up your sleeve and tries, whenever it can, to help.",
    "Dried Crypt Lotus - Grim flower that sprouts from the forehead of corpses. Sometimes kept as a keepsake of a lost companion.",
  ],
  mGSource: [
    "is a Mystical Crystal",
    "is Ritual Cannibalism",
    "is a Psychoactive Fungus",
    "is a Nanomachine Infection",
    "was when you were Irridiated at Birth",
    "is Meditation",
    "is a Dream Quest",
    "is a Parasitic Spirit Entity",
    "is a Mutation",
    "is an Addictive Rare Drug",
    "is Cybernetic Implants",
    "is Devouring Memories",
    "is Brain Surgery",
    "is Religion",
    "is an Ancient Mask",
    "is an Ancient Ring",
    "was Born During Eclipse",
    "was when you Found Weird Orb",
    "was when you Beheld Azathoth, the Daemon Sultan",
    "was when youStudied in Lost Archives",
  ],
  mGift: [
    "Telekinesis",
    "Pyrokinesis",
    "Telepathy",
    "Memory Extraction",
    "Mind Control",
    "Invisibility",
    "Astral Projection",
    "Healing Hands",
    "Paralysing Touch",
    "Eye Lasers",
    "Augury",
    "Inhuman Speed",
    "Second Sight",
    "Force Wall",
    "Generate Lightning",
    "Ultrasonic Scream",
    "Levitation",
    "Summon Orbs",
    "Cryokinesis",
    "Induce Sleep",
  ],
  weaponAspect: [
    "Golden",
    "Quicksilver",
    "Ultraviolet",
    "Crystal",
    "Nomad",
    "Black",
    "Ancient",
    "Bone",
    "Parasitic",
    "Fungal",
    "Ritual",
    "Biomechanical",
    "Sacred",
    "Blasphemous",
    "Venomous",
    "Obsidian",
    "Bronze",
    "Jewelled",
    "Plasma",
    "Translucent",
  ],
  weaponType: [
    "Knife (d6)",
    "Flail (d6)",
    "Whip (d6)",
    "Axe (d6)",
    "Club (d6)",
    "Sling (d6)",
    "Rapier (d6)",
    "Pistol (d6)",
    "Spear (d6)",
    "Shortbow (d6)",
    "Halberd (2 slots, d8)",
    "Rifle (2 slots, d8)",
    "Musket (2 slots, d8)",
    "Shotgun (2 slots, d8)",
    "Crossbow (2 slots, d8)",
    "Sword (2 slots, d8)",
    "Revolver (2 slots, d8)",
    "Laser (2 slots, d8)",
    "Spore Thrower (3 slots, d10)",
    "Railgun (3 slots, d10)",
  ],
  armourQuality: [
    "Shabby",
    "Decadent",
    "Ancestral",
    "Quicksilver",
    "Nano-weave",
    "Spiny",
    "Dazzling",
    "Tarnished",
    "Indigo",
    "Golden",
    "Symbiotic",
    "Biomechanical",
    "Occult",
    "Fungal",
    "Translucent",
    "Gaudy",
    "Sacred",
    "Iridescent",
    "Crystalline",
    "Ornate",
  ],
  armourType: [
    "Desert Robes (11 AD)",
    "Desert Robes (11 AD)",
    "Hazard Wrap (12 AD, 2 slots, immunity from radiation and toxins)",
    "Hazard Wrap (12 AD, 2 slots, immunity from radiation and toxins)",
    "War Shirt (12 AD, 2 slots)",
    "War Shirt (12 AD, 2 slots)",
    "War Shirt (12 AD, 2 slots)",
    "War Shirt (12 AD, 2 slots)",
    "Brigandine (13 AD, 3 slots)",
    "Brigandine (13 AD, 3 slots)",
    "Brigandine (13 AD, 3 slots)",
    "Brigandine (13 AD, 3 slots)",
    "Brigandine (13 AD, 3 slots)",
    "Curiass (14 AD, 4 slots)",
    "Curiass (14 AD, 4 slots)",
    "Curiass (14 AD, 4 slots)",
    "Chain-mail (15 AD, 5 slots)",
    "Chain-mail (15 AD, 5 slots)",
    "Plate Armour (16 AD, 6 slots, disadvantage to swim or climb)",
    "Plate Armour (16 AD, 6 slots, disadvantage to swim or climb)",
  ],
  gear1: [
    "Flashbang (5)",
    "Magnetic Boots",
    "Grappling Hook & Rope",
    "Flare (5)",
    "Smoke Bomb (5)",
    "Flask of Oil",
    "Portable Stove",
    "Caltrops",
    "Vial of Acid",
    "Animal Trap (3)",
    "Handheld Drill",
    "Chain & Manacles",
    "Hand Mirror",
    "Motion Sensor",
    "Crowbar",
    "EMP Grenade (3)",
    "Skin of Wine",
    "Tube of Omni-Glue",
    "Ball Bearings (LOTS)",
    "Glowstone",
  ],
  gear2: [
    "Sleeping Gas (3)",
    "Oxygen Mask",
    "Cast Iron Skillet",
    "Black Clay",
    "Loaded Dice",
    "Raucous Whistle",
    "Luminous Paint",
    "Drug",
    "Poison Pill",
    "Autoglot Translator",
    "Lock Picks",
    "Mortar & Pestle",
    "Strong Liquor",
    "Hourglass",
    "Chisel",
    "Anti-venom (3)",
    "Welding Torch",
    "Thermal Goggles",
    "Fungicide Bomb",
    "Canary in Cage",
  ],
};

// // Object to map inventory categories to their corresponding HTML element IDs
// export const inventoryMapping = {
//   Exotica: "exotica",
//   MGSource: "mgSource",
//   MGGift: "mgGift",
//   ArmourQuality: "armourTrait",
//   ArmourType: "armourType",
//   WeaponAspect: "weaponAspect",
//   WeaponType: "weaponType",
//   Gear1: "gear1",
//   Gear2: "gear2",
// };

// // Update inventory display with the initial random items
// export function updateInventoryDisplay(inventory: string[]) {
//   Object.keys(inventoryMapping).forEach((key) => {
//     const elementId = inventoryMapping[key];
//     const element = document.getElementById(elementId);

//     // Generate and store a random item in `currentInventory`
//     const randomItem = getRandomItem(inventory[key]);
//     currentInventory[key] = randomItem; // store in object
//     element.innerHTML = randomItem;

//     // Regenerate item on click and update stored value
//     element.onclick = () => {
//       const newRandomItem = getRandomItem(inventory[key]);
//       currentInventory[key] = newRandomItem;
//       element.innerHTML = newRandomItem;
//     };
//   });
// }

// currentInventory = {
//   exotica: getRandomItem(inventory.Exotica),
//   mgSource: getRandomItem(inventory.MGSource),
//   mgGift: getRandomItem(inventory.MGGift),
//   armourTrait: getRandomItem(inventory.ArmourQuality),
//   armourType: getRandomItem(inventory.ArmourType),
//   weaponAspect: getRandomItem(inventory.WeaponAspect),
//   weaponType: getRandomItem(inventory.WeaponType),
//   gear1: getRandomItem(inventory.Gear1),
//   gear2: getRandomItem(inventory.Gear2),
// };

// updateInventoryDisplay(inventory);