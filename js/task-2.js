const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

// ? Варіант 1 (document.createElement)
const ulElem = document.querySelector(".gallery");

images.map(image => {
  const liElem = document.createElement("li");
  const imageElem = document.createElement("img");

  imageElem.src = image.url;
  imageElem.alt = image.alt;
  liElem.append(imageElem);
  ulElem.append(liElem);
})


// ? Варіант 2 (elem.insertAdjacentHTML)
// const ulElem = document.querySelector(".gallery");
// const imagesArr = [];

// images.map(image => {
//   const elem = `<li><img src="${image.url}" alt="${image.alt}" /></li>`;

//   imagesArr.push(elem);
// })

// ulElem.insertAdjacentHTML("afterbegin", imagesArr.join(""));