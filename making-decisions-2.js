
let backpack = [];
let belt = [];
let equippedItems = [];

backpack.push("sword", "shield", "food");

let firstItem = backpack.shift();

belt.push(firstItem);

let furCoat = "Fur Coat";

backpack.unshift(furCoat);

equippedItems.push(...backpack.splice(0, 1));

backpack.push("flint", "blanket", "knife", "toothbrush");

let backpackCount = backpack.length

console.log(backpack,backpackCount, belt, equippedItems);