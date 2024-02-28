'use strict'
import { cardProduct } from "../components/cardProducts.js";
import { getData } from "../store/fetchApi.js";
import { cardUsers } from "../components/cardUser.js";
const  productDisplayArea = document.querySelector("#renderProducts");
const  userDisplayArea = document.querySelector("#renderUsers");
const productsData = await getData("products");
const product = productsData.products;
const users = await getData("users");
const user = users.users;
// maping products from products.json
product.map(pro=>{
    productDisplayArea.innerHTML+=cardProduct(pro);
})
user.map(user=>{
    userDisplayArea.innerHTML += cardUsers(user)
})