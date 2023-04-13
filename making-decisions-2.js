
let backpack = [];
let belt = [];
let equippedItems = [];
let saddleBag = [];

backpack.push("sword", "shield", "food");

let firstItem = backpack.shift();

belt.push(firstItem);

let furCoat = "Fur Coat";

backpack.unshift(furCoat);

equippedItems.push(backpack.splice(0, 1)[0]);

backpack.push("flint", "blanket", "knife", "toothbrush");

saddleBag.push(...backpack.splice(2, 3));

let backpackCount = backpack.length

console.log(backpack,backpackCount, belt, equippedItems, saddleBag);