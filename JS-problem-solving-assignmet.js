//feetToMile.....converting feet into mile 
let feetToMile = function (feet) {
  if (isNaN(feet) == false && typeof feet != null) {
    return feet * 0.000189394;
  } else {
    return " Please enter a number to convert feet to mile"
  }
}

console.log(feetToMile(10000));

//woodCalculator....Calculator to calculate total amount of wood in CFT.
let woodCalculator = function (chair, table, khat) {

  if (isNaN(chair) == false && isNaN(table) == false && isNaN(khat) == false) {
    let totalWood = chair * 1 + table * 3 + khat * 5;
    return "Total wood you need for " + chair + " chair, " + table + " table, and " + khat + " khat is " + totalWood + " Cubic Feet.";
  } else {
    return "Please enter successively only the number of chair, table, and khat you want to make."
  }
}

console.log(woodCalculator(1, 3, 4));


/*brickCalculator...calculator for calculating total brick number 
for a building */

let brickCalculator = function (floorOfBuilding) {

  if (isNaN(floorOfBuilding) == false && typeof floorOfBuilding != null) {

    let brickForFirstTen = 10 * 15 * 1000;
    let brickForSecondTen = 10 * 12 * 1000;
    let subtractedFloor;
    let totalBrick;

    if (floorOfBuilding >= 0 && floorOfBuilding <= 10) {
      totalBrick = floorOfBuilding * 15 * 1000;
      return "Number of total brick need for your " + floorOfBuilding + 
      " stories building is " + totalBrick ;
    } else if (floorOfBuilding > 10 && floorOfBuilding <= 20) {
      subtractedFloor = floorOfBuilding - 10;
      totalBrick = subtractedFloor * 12 * 1000 + brickForFirstTen;
      return "Number of total brick need for your " +
        floorOfBuilding + " stories building is " + totalBrick;
    } else if (floorOfBuilding > 20) {
      subtractedFloor = floorOfBuilding - 20;
      totalBrick = subtractedFloor * 10 * 1000 + brickForFirstTen + brickForSecondTen;
      return "Number of total brick need for your " +
        floorOfBuilding + " stories building is " + totalBrick;

    }

  } else {
    return "Please enter only the number of total floor of your building";
  }
}

console.log(brickCalculator(45));


//tinyFriend...find out the largest name from an array.
let tinyFriend = function (name) {
  let largestName;
  for (let i = 0; i < name.length; i++) {
    let currentName = name[i].length;
    for (let j = 0; j < name.length; j++) {
      if (name[j].length > currentName) {
        largestName = name[j];
      }
    }
  }
  return "The largest name is " + largestName;
}

console.log(tinyFriend(['abul', 'kaf', 'kahif']));