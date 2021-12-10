var tabs = document.querySelectorAll(".tabs a");
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (e) {
    var li = this.parentNode;
    var div = this.parentNode.parentNode.parentNode;

    if (li.classList.contains("active")) {
      return false;
    }
    // On retire la class active sur l'onglet déjà actif
    div.querySelector(".tabs .active").classList.remove("active");
    // On ajoute la class active sur l'onglet cliqué
    li.classList.add("active");

    //  On retire la classlist sur le contenu actif
    div.querySelector(".tabs-content .active").classList.remove("active");
    //  On ajoute la classlist sur le contenu du lien cliqué
    div.querySelector(this.getAttribute("href")).classList.add("active");
  });
}
