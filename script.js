const news = document.getElementById("news");
const template = "<div><h3>Hello, World!</h3><p>This is a test.</p></div>";

function addToNews() {
	news.innerHTML += template;
}
