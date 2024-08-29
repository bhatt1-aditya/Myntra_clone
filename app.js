// const CONVENIENCE_FEES = 99;
let bagItemObjects;

loadBagItemObjects();

function loadBagItemObjects() {
  // console.log(bagItems); //link with another script
  bagItemObjects = bagItems.map((itemId) => {
    for (let i = 0; i < myntraData.length; i++) {
      if (itemId == myntraData[i].id) {
        return myntraData[i];
      }
    }
  });
  localStorage.setItem("productsArray", JSON.stringify(bagItemObjects));
}

// function generateItemHTML(items) {
//   // console.log(items);
//   return `
//   <div class="add-items">
//           <div class="image">
//             <img
//               src=${items.img}
//             />
//             </div>
//           <div onclick="removeFromBag(${items.id})>x</div>

//           </div>

//         `;
// }

// function displayBagItems() {
//   let bagSummaryElement = document.querySelector(".add-items");
//   console.log(bagSummaryElement);
//   let innerHtml = "";
//   bagItemObjects.forEach((item) => {
//     innerHtml += generateItemHTML(item);
//     // console.log(item);
//     bagSummaryElement.innerHTML = innerHtml;
//   });
// console.log(bagSummaryElement);
// }

// function removeFromBag(itemId) {
//   bagItems = bagItems.filter((bagItemId) => bagItemId != itemId);
//   localStorage.setItem("bagItems", JSON.stringify(bagItems));
//   loadBagItemObjects();
//   displayBagItems();
//   displayBagSummary();
// }

// function displayBagSummary() {
//   let containerElement = document.querySelector(".section-body");
//   let totalItem = bagItemObjects.length;
//   bagItemObjects.forEach((bagItem) => {
//     let totalMRP = bagItem.ruppess;
//     console.log(bagItem);
//   });
//   console.log(totalItem);

//   containerElement.innerHTML = "helo";
// }
