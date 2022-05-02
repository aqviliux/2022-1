/** declare list of authors based on img names */

//  <li>
//  <a href="authors/andreas-neeser.html"></a>
//     <img
//         src="img/tile_andreas_neeser.jpg"
//         alt="Portrait of Andreas Neeser"
//     />
//     <h2>Andreas Neeser</h2>
//  </li>
//to do check of special characters in names...with several first/last names

let authors = [
    { firstName: "Andreas", lastName: "Neeser" },
    { firstName: "Anna", lastName: "Ruchat" },
    { firstName: "Arno", lastName: "Camenisch" },
    { firstName: "Barbara", lastName: "Schibli" },
    { firstName: "Demian", lastName: "Leinhard" },
    { firstName: "Flurina", lastName: "Bader" },
    { firstName: "Franco", lastName: "Supino" },
    { firstName: "Lukas", lastName: "Hartmann" },
    // { firstName: "Marius Daniel", lastName: "Popescu" },
    { firstName: "Marius", lastName: "Popescu" },
    { firstName: "Reto", lastName: "Haenny" },
    { firstName: "Sandra", lastName: "Kuenzi" },
    { firstName: "Simon", lastName: "Libsig" },
];
/** create object per author */
let Author = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.imgUrl = `img/tile_${firstName.toLowerCase()}_${lastName.toLowerCase()}.jpg`;
    this.altText = `Portrait of ${firstName} ${lastName}`;
    this.link = `authors/${firstName.toLowerCase()}_${lastName.toLowerCase()}.html`;
};

/** create function createTiles to create masonry(list items) tiles */

function createTiles(authors) {
    let titleList = [];
    authors.forEach((author) => {
        const currentAuthor = new Author(author.firstName, author.lastName);
        const liTag = document.createElement("li");
        const imgTag = document.createElement("img");
        const aTag = document.createElement("a");
        const h2Tag = document.createElement("h2");
        const spanTag = document.createElement("span");
        aTag.href = currentAuthor.link;
        imgTag.src = currentAuthor.imgUrl;
        imgTag.alt = currentAuthor.altText;
        spanTag.textContent =
            currentAuthor.firstName + " " + currentAuthor.lastName;

        liTag.appendChild(aTag);
        aTag.appendChild(imgTag);
        aTag.appendChild(h2Tag);
        h2Tag.appendChild(spanTag);

        titleList.push(liTag);
        // console.log(titleList);
    });
    return titleList;
}

/** create function addTiles to add all tiles to the DOM randomly */

function addTiles(list) {
    const ulTag = document.querySelector("main ul");
    //randomise list firstly
    //let tempList = random(list);
    random(list).forEach((li) => ulTag.appendChild(li));
}

function random(list) {
    let randomNumber;
    let tempList = [];

    list.forEach((item) => {
        do {
            randomNumber = Math.floor(Math.random() * list.length);
        } while (tempList[randomNumber] !== undefined);

        tempList[randomNumber] = item;
    });
    return tempList;
}

addTiles(createTiles(authors));

/** add a eventListener on the logo to rebuild the list on click */

function refreshPage() {
    document.querySelector("main ul").innerHTML = "";
    addTiles(createTiles(authors));
    // console.log("refreshing...");
    // location.reload();
}

let clickImg = document.querySelector("header > a > img");
clickImg.addEventListener("click", refreshPage);
