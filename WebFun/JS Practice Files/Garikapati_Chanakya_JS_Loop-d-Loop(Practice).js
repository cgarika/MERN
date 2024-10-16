let distanceCovered = 0; //declared and initialized a variable
//initially the distance will be zero and the loop run until it becomes false (8) and the loop will be incremented every time by +1
for (distanceCovered; distanceCovered <= 7; distanceCovered++) { 
// in this condition the candy will be dispensed when the number is either 2,4 or 6
  if (distanceCovered == 2 || distanceCovered == 4 || distanceCovered == 6) { 
    console.log(distanceCovered);
    console.log("Candy dispensed");
// in this condition the candy will be not dispensed when the number is either 0,1,3 or 5
  } else if (distanceCovered == 0 || distanceCovered == 1 || distanceCovered == 3 || distanceCovered == 5) {
    console.log(distanceCovered);
    console.log("Please run further more for the candy to be dispensed");
    // in this condition the candy will be not be dispensed anymore after 6
  } else {
    console.log(distanceCovered);
    console.log("Candy will not be dispensed any more");
  }
}



let runnerSpeed = 4.5;
for (distanceCovered; distanceCovered <= 7; distanceCovered++) { 
    // in this condition the candy will be dispensed when the number is either 2,4 or 6
      if (distanceCovered == 2 || distanceCovered == 4 || distanceCovered == 6) { 
        if(runnerSpeed == 5.5)
            {
        console.log(distanceCovered);
        console.log("Candy dispensed");
            }
    // in this condition the candy will be not dispensed when the number is either 0,1,3 or 5
      } else if (distanceCovered == 0 || distanceCovered == 1 || distanceCovered == 3 || distanceCovered == 5) {
        console.log(distanceCovered);
        console.log("Please run further more for the candy to be dispensed");
        // in this condition the candy will be not be dispensed anymore after 6
      } else {
        console.log(distanceCovered);
        console.log("Candy will not be dispensed any more");
      }
    }