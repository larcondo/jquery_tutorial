const paginas = [
  {href: "index.html", texto: "Home"},
  {href: "jquery_syntax.html", texto: "jQuery Sintaxis"},
  {href: "jquery_selectors.html", texto: "jQuery Selectores"},
  {href: "jquery_events.html", texto: "jQuery Métodos de Eventos"},
  {href: "jquery_hide_show.html", texto: "jQuery Efectos - Hide y Show"},
  {href: "jquery_fade.html", texto: "jQuery Efectos - Fading "},
  {href: "jquery_slide.html", texto: "jQuery Efectos - Sliding "},
  {href: "jquery_animate.html", texto: "jQuery Efectos - Animation"},
  {href: "jquery_stop.html", texto: "jQuery Efectos - Stop Animations"},
  {href: "jquery_callback.html", texto: "jQuery Funciones Callback"},
  {href: "jquery_chaining.html", texto: "jQuery Encadenamiento"},
  {href: "jquery_dom_get.html", texto: "jQuery Get"},
  {href: "jquery_dom_set.html", texto: "jQuery Set"},
  {href: "jquery_dom_add.html", texto: "jQuery Add"},
  {href: "jquery_dom_remove.html", texto: "jQuery Remove"},
  {href: "jquery_css_classes.html", texto: "jQuery Css Classes"},
  {href: "jquery_css.html", texto: "jQuery Método css()"},
  {href: "jquery_dimensions.html", texto: "jQuery - Dimensions "},
  {href: "jquery_traversing.html", texto: "jQuery Traversing"},
  {href: "jquery_traversing_ancestors.html", texto: "jQuery Ancestors"},
  {href: "jquery_traversing_descendants.html", texto: "jQuery Descendants"},
  {href: "jquery_traversing_siblings.html", texto: "jQuery Siblings"},
  {href: "jquery_traversing_filtering.html", texto: "jQuery Filtering"},
  {href: "jquery_ajax_intro.html", texto: "jQuery - Introducción AJAX"},
  {href: "jquery_ajax_load.html", texto: "jQuery Método AJAX load()"},
  {href: "jquery_ajax_get_post.html", texto: "jQuery Métodos AJAX get() y post()"},
  {href: "jquery_noconflict.html", texto: "jQuery El método noConflict()"},
  {href: "jquery_filters.html", texto: "jQuery Filtros"}
];

const menuList = document.getElementById("menu");

paginas.forEach(element => {
  const node = document.createElement("a");
  node.href = "./" + element.href;
  const textnode = document.createTextNode(element.texto);
  node.appendChild(textnode);
  menuList.appendChild(node);
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


var button = document.getElementsByClassName("button-menu");

for(let j = 0; j < button.length; j++) {
  button[j].addEventListener("click", function() {
    var menu = this.nextElementSibling;
    if (menu.classList.value === "menu") {
      menu.classList.toggle("show");
      console.log('Mostrar');      
    } else {
      menu.classList.value = "menu";
      console.log('Ocultar');
    }
  });
}


window.onclick = function(e) {
  if (!e.target.matches('.button-menu')){
    // console.log('Se hizo click afuera');
    const menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  } else {
    // console.log('Se cliqueo el boton');
  };
}