let heading = document.querySelector(".products");

let myntraData = [
  {
    id: 1,
    img: "https://ohtopten.com/wp-content/uploads/2015/08/Best-T-shirts-for-men-1.jpg",
    heading: "H&M",
    description: "Men Pack Of 3 T-shirts",
    ruppess: "839",
    return_date: "14 days",
    delivery_date: "10 oct 2023",
    discount: "42",
    original_price: "1045",
  },
  {
    id: 2,
    img: "https://cdnc.lystit.com/photos/f626-2016/01/13/adidas-white-originals-rose-gold-double-logo-tee-product-0-555809523-normal.jpeg",
    heading: "BULLMER",
    description: "Print Oversized Cotton T-shirt",
    ruppess: "332",
    return_date: "5 days",
    delivery_date: "15 oct 2023",
    discount: "42",
    original_price: "1045",
  },
  {
    id: 3,
    img: "https://images.bewakoof.com/t540/men-s-white-slim-fit-t-shirt-519591-1657878106-2.jpg",
    heading: "Puma",
    description: "Ess Polo T-shirt",
    ruppess: "203",
    return_date: "15 days",
    delivery_date: "1 oct 2023",
    discount: "42",
    original_price: "1045",
  },
  {
    id: 4,
    img: "https://images.bewakoof.com/original/men-s-white-oversized-t-shirt-546295-1664534941-1.jpg",
    heading: "Stormborn",
    description: "Men Loose Fit Printed T-shirt",
    ruppess: "418",
    return_date: "4 days",
    delivery_date: "9 oct 2023",
    discount: "42",
    original_price: "1045",
  },
  {
    id: 5,
    img: "https://images.bewakoof.com/t540/men-s-white-graphic-printed-t-shirt-541236-1662718510-2.jpg",
    heading: "Jack & Jones",
    description: "Pure Cotton Oversized T-shirt",
    ruppess: "1499",
    return_date: "14 days",
    delivery_date: "7 nov 2023",
    discount: "42",
    original_price: "1045",
  },
  {
    id: 6,
    img: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/4/3/fb493cd9-f9c4-4c05-a332-d64da90c17551554290502602-1.jpg",
    heading: "ARMISTO",
    description: "Polo Collar Cotton T-shirt",
    ruppess: "799",
    return_date: "10 days",
    delivery_date: "10 sept 2023",
    discount: "42",
    original_price: "1045",
  },
  {
    id: 7,
    img: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/17330680/2022/5/2/a2264c08-d06c-4542-8ca4-7f7d16e2c12a1651484209702-Roadster-Men-Tshirts-431651484209196-1.jpg",
    heading: "RARE RABBIT",
    description: "Textured Pure Cotton T-shirt",
    ruppess: "340",
    return_date: "2 days",
    delivery_date: "6 oct 2023",
    discount: "42",
    original_price: "1045",
  },
  {
    id: 8,
    img: "https://i.pinimg.com/originals/55/4c/67/554c67a4e50ab682c52b9bec0d23f11a.jpg  ",
    heading: "NOBERO",
    description: "Men Graphic Printed T-shirt",
    ruppess: "1199",
    return_date: "1 days",
    delivery_date: "11 oct 2023",
    discount: "42",
    original_price: "1045",
  },
  {
    id: 9,
    img: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/21800804/2023/2/1/5577e9fb-2cec-478a-b494-c7dcf757e29d1675264253742Tshirts3.jpg",
    heading: "DAMENSCH",
    description: "Colourblocked Pure Cotton",
    ruppess: "799",
    return_date: "4 days",
    delivery_date: "19 oct 2023",
    discount: "42",
    original_price: "1045",
  },
  {
    id: 10,
    img: "https://hawkzlifestyle.com/wp-content/uploads/2023/07/men-s-black-oversized-t-shirt-439421-1679048737-1-819x1024.webp",
    heading: "The Indian Garage Co",
    description: "Men Divide Regular Fit Polo",
    ruppess: "999",
    return_date: "14 days",
    delivery_date: "10 oct 2023",
    discount: "42",
    original_price: "1045",
  },
  {
    id: 11,
    img: "https://i.pinimg.com/originals/b2/2d/9e/b22d9e152e5b339bd55e0b028b376160.jpg",
    heading: "Allen Solly",
    description: "Polo Collar Slim Fit T-shirt",
    ruppess: "959",
    return_date: "14 days",
    delivery_date: "10 oct 2023",
    discount: "42",
    original_price: "1045",
  },
  {
    id: 12,
    img: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/18346794/2022/5/26/4f162882-99c0-46dd-8df7-9b63637a4c4d1653563566052-Roadster-Men-Tshirts-9171653563565605-1.jpg",
    heading: "HERE&NOW",
    description: "Men Polo Collar T-shirt",
    ruppess: "580",
    return_date: "14 days",
    delivery_date: "10 oct 2023",
    discount: "42",
    original_price: "1045",
  },

  {
    id: 13,
    img: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/19476550/2022/8/26/e0ac6de0-ad8a-4174-9405-511f06fdcf2f1661489940842-HERENOW-Men-Black--White-Printed-Pure-Cotton-T-shirt-1361661-1.jpg",
    heading: "Kook N Keech",
    description: "Printed Rounded Neck Pure Cooton",
    ruppess: "799",
    return_date: "14 days",
    delivery_date: "10 oct 2023",
    discount: "42",
    original_price: "1045",
  },

  {
    id: 14,
    img: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/19796320/2022/9/15/ac2f057c-6f63-433a-8596-b92cf685bb441663236795226-Roadster-Mens--Printed-Blue-V-Neck-Short-Sleeves-T-Shirts-24-1.jpg",
    heading: "Maniac",
    description: "Men Polo Collar T-shirt",
    ruppess: "368",
    return_date: "14 days",
    delivery_date: "10 oct 2023",
    discount: "42",
    original_price: "1045",
  },

  {
    id: 15,
    img: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/17285962/2022/5/18/c6337f8c-6de2-4f98-b1d8-d26fa1914f931652845006338-Roadster-Men-Tshirts-391652845005833-1.jpg",
    heading: "ADIDAS",
    description: "Cotton Regular Fit T-shirt",
    ruppess: "399",
    return_date: "14 days",
    delivery_date: "10 oct 2023",
    discount: "42",
    original_price: "1045",
  },
  {
    id: 16,
    img: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/9973835/2019/10/16/f87c5ad0-d7cb-4e6f-b641-b5aa489a44eb1571199053197-Roadster-Men-Tshirts-1501571199051530-1.jpg",
    heading: "U.S.Polo Assn.",
    description: "Striped Pure Cotton Relaxed T-shirt",
    ruppess: "516",
    return_date: "29 days",
    delivery_date: "7 oct 2023",
    discount: "42",
    original_price: "1045",
  },
];

// let myntraData = [
//   {
//     img: "https://tse2.mm.bing.net/th?id=OIP._iUUBjCdsAK50Nn4iFYFhQHaJ4&pid=Api&P=0&h=180",
//     heading: " H&M",
//     description: "Men Electro Regular Fit Polo",
//     discount: {
//       ruppess: "2519",
//       discount_ruppess: "2799",
//       offer: "10",
//     },
//   },
// ];

let bagItems;
Loading();
function Loading() {
  let getData = JSON.parse(localStorage.getItem("items"));
  if (getData) {
    bagItems = getData;
    // console.log(bagItems);
  } else {
    bagItems = [];
  }
  showItems();
}

function AddItem(ItemId) {
  bagItems.push(ItemId);
  localStorage.setItem("items", JSON.stringify(bagItems));
  showItems();
  window.location.reload();
}
function showItems() {
  let Items = document.querySelector(".bagItems");
  if (bagItems.length == 0) {
    Items.style.visibility = "hidden";
  } else {
    Items.style.visibility = "visible";
  }
  Items.innerHTML = bagItems.length;
}

let innerHtml = "";
myntraData.forEach((data) => {
  innerHtml += ` <div class=products-details>
  <img src=${data.img} style="height: 280px; width: 210px" />
            <h1>${data.heading}</h1>
            <p>${data.description}</p>
            <h2>Rs. <span>${data.ruppess}</span></h2>
            <button onclick="AddItem(${data.id})">Add to Cart</button>
            </div>
            `;
});

heading.innerHTML = innerHtml;
