const biodata = (name, address, hobbies, is_married, school, skills) => {
  const data = {
    name,
    address,
    hobbies,
    is_married,
    school,
    skills
  };
  return JSON.stringify(data, null, " ");
};

let nama = "fadli muharram";
let address = "jakarta";
let hobbies = ["coding", "reading", "eating"];
let isMarried = false;
let school = {
  university: "universitas nasional",
  departement: "Informatics Engineering"
};
let skills = [
  { name: "php" },
  { name: "javascript" },
  { name: "codeigniter" },
  { name: "laravel" }
];

const bio = biodata(nama, address, hobbies, isMarried, school, skills);
console.log("-------------------------NO 1-------------------------");
console.log(bio);
