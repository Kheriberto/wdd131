const year = document.querySelector("#currentyear");
const today = new Date();
let lastModify = document.querySelector("#lastModified");

year.innerHTML = `${today.getFullYear()}`;

lastModify.innerHTML = `<span class="modification">Last Modification: ${document.lastModified}</span>`;