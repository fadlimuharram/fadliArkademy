const isOdd = len => {
  return len % 2 != 0;
};

const drawImage = len => {
  if (!isOdd(len)) return false;

  for (x = 1; x <= len; x++) {
    var print = "";
    for (y = 1; y <= len; y++) {
      if (x == Math.round(len / 2)) {
        print += "* ";
      } else if (y == Math.round(len / 2)) {
        print += "* ";
      } else if ((y == 1 && x == 1) || (y == len && x == 1)) {
        print += "* ";
      } else if ((y == len && x == len) || (x == len && y == 1)) {
        print += "* ";
      } else {
        print += "= ";
      }
    }
    console.log(print);
  }

  return true;
};
console.log("-------------------------NO 3-------------------------");
console.log("---untuk 5 nilai---");
drawImage(5);
console.log("\n");
console.log("---untuk 7 nilai---");
drawImage(7);
