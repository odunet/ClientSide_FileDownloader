import "./styles.css";

var a = document.getElementById("a");

function download(text, name, type) {
  var file = new Blob([text], { type: type });
  a.href = URL.createObjectURL(file);
  a.download = name;
}

a.addEventListener("click", () => {
  download('{"Name": "Ayokunle", "School":"LASU"}', "ayo.json", "json");
});
