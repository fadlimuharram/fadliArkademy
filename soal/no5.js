const count_handshake = jml => {
  let total = 0;
  for (x = jml; x >= 1; x--) {
    let jabatTangan = 0;
    for (y = x - 1; y >= 1; y--) {
      jabatTangan++;
    }
    total += jabatTangan;
  }
  console.log("Result ", total);
  return true;
};
console.log("-------------------------NO 5-------------------------");
console.log("6 : ");
count_handshake(6);
console.log("3 : ");
count_handshake(3);
