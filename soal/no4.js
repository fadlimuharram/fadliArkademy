const stokUang = [500, 1000, 2000, 5000, 10000, 20000, 50000];

const hitungKembalian = (totalBelanja, totalUang) => {
  let kembali = totalUang - totalBelanja;

  console.log("kembali : ", kembali);

  for (x = stokUang.length; x >= 0; x--) {
    if (kembali - stokUang[x] >= 0) {
      var sisa = kembali % stokUang[x];
      var jml = (kembali - sisa) / stokUang[x];
      console.log(`${jml} x ${stokUang[x]}`);
      kembali = sisa;
    }
  }
};

console.log("-------------------------NO 4-------------------------");
hitungKembalian(15500, 50000);
