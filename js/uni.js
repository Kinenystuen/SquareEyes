const menu_search_icon_button = document.getElementById("menu_search_icon");
const search_bar_area = document.getElementById("search_bar_area");
search_bar_area.style.display = "none"

menu_search_icon_button.addEventListener("click", function() {
  if (search_bar_area.style.display === "none") {
    search_bar_area.style.display = "block";
  } else {
    search_bar_area.style.display = "none";
  }
});