let tabSelector = document.querySelectorAll(".tab-selectors h3");
let tabDescription = document.querySelectorAll(".tab-description-content div");
let tabLabel = document.querySelectorAll(".tab-title-content div");
let tabMetadata = document.querySelectorAll(".tab-metadata-content div");

tabSelector.forEach((tab, index) => {
  tab.addEventListener("click", () => {

    tabDescription.forEach((content) => {
      content.classList.remove("active");
    });

    tabLabel.forEach((content) => {
      content.classList.remove("active");
    });

    tabMetadata.forEach((content) => {
      content.classList.remove("active");
    });

    tabSelector.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabSelector[index].classList.add("active");
    tabDescription[index].classList.add("active");
    tabLabel[index].classList.add("active");
    tabMetadata[index].classList.add("active");

    localStorage.setItem('ura_lang_index', JSON.stringify(index));

  });
});

var index_def_string = localStorage.getItem('ura_lang_index');
var index_def = 0;
if (index_def_string !== null) {
  index_def = JSON.parse(index_def_string); }

tabSelector[index_def].classList.add("active");
tabDescription[index_def].classList.add("active");
tabLabel[index_def].classList.add("active");
tabMetadata[index_def].classList.add("active");

