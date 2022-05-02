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
    { firstName: "Andreas", lastName: "Neesser" },
    { firstName: "Anna", lastName: "Ruchat" },
    { firstName: "Arno", lastName: "Camenish" },
    { firstName: "Barbara", lastName: "Schibli" },
    { firstName: "Demian", lastName: "Leinhard" },
    { firstName: "Flurina", lastName: "Bader" },
    { firstName: "Franco", lastName: "Supino" },
    { firstName: "Lukas", lastName: "Hartmann" },
    // { firstName: "Marius Daniel", lastName: "Popescu" },
    { firstName: "Marius", lastName: "Popescu" },
    { firstName: "Reto", lastName: "Heanny" },
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
        aTag.href = currentAuthor.link;
        imgTag.scr = currentAuthor.imgUrl;
        imgTag.alt = currentAuthor.altText;
        h2Tag.textContent =
            currentAuthor.firstName + " " + currentAuthor.lastName;

        liTag.appendChild(aTag);
        aTag.appendChild(imgTag);
        aTag.appendChild(h2Tag);

        titleList.push(liTag);
        // console.log(titleList);
    });
    return titleList;
}

console.log(createTiles(authors));

/** create function addTiles to add all tiles to the DOM randomly */

function addTiles(List) {
    const ulTag = document.querySelector("main ul");
    List.forEach((li) => ulTag.appendChild(li));
}
addTiles(createTiles(authors));

/** add a eventListener on the logo to rebuild the list on click */
