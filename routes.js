module.exports = {
  getHome: (req, res) => {
    let query =
      "SELECT categories.id AS id, categories.name as category_name, GROUP_CONCAT(products.name) AS products FROM categories LEFT JOIN products ON categories.id = products.category_id GROUP BY categories.id";

    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.render("index.ejs", {
        title: "selamat datang",
        data: result
      });
    });
  },
  getTambahProduct: (req, res) => {
    let query = "SELECT * FROM categories";
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.render("tambahProduct.ejs", {
        title: "tambah product",
        categories: result
      });
    });
  },
  getTambahCategory: (req, res) => {
    res.render("tambahCategory.ejs", {
      title: "tambah category"
    });
  },
  tambahProduct: (req, res) => {
    let { product, categories } = req.body;

    if (categories.length === 1) {
      categories = [categories];
    }

    let ins = "";

    categories.forEach((element, index) => {
      ins += `("${product}",${element})`;
      if (index != categories.length - 1) {
        ins += ",";
      }
    });

    let query = `INSERT INTO products(name, category_id) VALUES${ins}`;

    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        throw new Error(err);
      }

      res.redirect("/");
    });
  },
  tambahCategory: (req, res) => {
    let { category } = req.body;
    let query = `INSERT INTO categories(name) VALUES("${category}")`;
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        throw new Error(err);
      }
      res.redirect("/");
    });
  }
};
