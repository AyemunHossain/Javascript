function choose(choice, ...availableChoices) {
    return availableChoices;
}
var num = [{ x: 22 }, { x: 42 }, { x: 2 }, { x: 33 }, { x: 444 }, { x: 1 }];
console.log(choose(...num));
