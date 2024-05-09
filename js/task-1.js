const ulParentElem = document.querySelector("#categories");
const liMainCategories = ulParentElem.querySelectorAll(".item");
const liMainCategoriesLength = liMainCategories.length;

console.log(`Number of categories: ${liMainCategoriesLength}`);

liMainCategories.forEach((elem) => {
    console.log(`Category: ${elem.querySelector("h2").textContent}`);
    console.log(`Elements: ${elem.querySelectorAll("li").length}`);
});