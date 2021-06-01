/* Desktop dropdown menu */

const expandExplore = document.querySelector(".expand-explore");
const expandExhibitions = document.querySelector(".expand-exhibitions");
const expandInformation = document.querySelector(".expand-information");
const exploreList = document.querySelector(".explore-list");
const exhibitionsList = document.querySelector(".exhibitions-list");
const informationList = document.querySelector(".information-list");
const expandSearch = document.querySelector(".search-bar");
const searchBar = document.querySelector(".search-bar-big");
const mediaQueryBig = window.matchMedia("(min-width: 931px)");

if (mediaQueryBig.matches) {
    expandSearchBar();
    expandExploreNav();
    expandExhibitionsNav();
    expandInformationNav();
}

function expandSearchBar() {
    if (searchBar.style.display === "none") {
        searchBar.style.display = "block";
        exploreList.style.display = "none";
        exhibitionsList.style.display = "none";
        informationList.style.display = "none";
    } else {
        searchBar.style.display = "none";
    }
}

expandSearch.addEventListener("click", expandSearchBar);


function expandExploreNav() {
    if (exploreList.style.display === "none") {
        exploreList.style.display = "block";
        exhibitionsList.style.display = "none";
        informationList.style.display = "none";
        searchBar.style.display = "none";
    } else {
        exploreList.style.display = "none";
    }
}

expandExplore.addEventListener("click", expandExploreNav);

function expandExhibitionsNav() {
    if (exhibitionsList.style.display === "none") {
        exhibitionsList.style.display = "block";
        exploreList.style.display = "none";
        informationList.style.display = "none";
        searchBar.style.display = "none";
    } else {
        exhibitionsList.style.display = "none";
    }
}

expandExhibitions.addEventListener("click", expandExhibitionsNav);

function expandInformationNav() {
    if (informationList.style.display === "none") {
        informationList.style.display = "block";
        exploreList.style.display = "none";
        exhibitionsList.style.display = "none";
        searchBar.style.display = "none";
    } else {
        informationList.style.display = "none";
    }
}

expandInformation.addEventListener("click", expandInformationNav);

window.onclick = function(event) {
    if (event.target === mainContent) {
        exploreList.style.display = "none";
        exhibitionsList.style.display = "none";
        informationList.style.display = "none";
        searchBar.style.display = "none";
    }
}

/* Hamburger menu */

const hamburger = document.querySelector(".hamburger-menu");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const mainContent = document.querySelector("main");
const footer = document.querySelector("footer");
const mediaQuerySmall = window.matchMedia("(max-width: 931px)");

if (mediaQuerySmall.matches) {
    activateHambuger();
    expandSearch.removeEventListener("click", expandSearchBar);
}

function activateHambuger() {
    if (nav.style.display === "none") {
        nav.style.display = "block";
        header.style.height = "100vh";
        mainContent.style.display = "none";
        footer.style.display = "none";
    } else {
        nav.style.display = "none";
        header.style.height = "auto";
        mainContent.style.display = "block";
        footer.style.display = "block";
    }
}

hamburger.addEventListener("click", activateHambuger);

/* Return button */

const returnButton = document.querySelector(".return-button");

function previousPage() {
    window.history.back();
}

returnButton.addEventListener("click", previousPage);
