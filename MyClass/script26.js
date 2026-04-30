const book = {
  name: "vefxistyaosani",
  price: "50",
  quantity: "10",
  language: ["Georgian", "English"],
};

const new_price = ({ name, price }) => {
  console.log(`This is ${name} and its $${price}`);
};

const updatedBook = {
  ...book,
  price: "15",
};

new_price(updatedBook);
