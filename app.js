const input = document.getElementById("myInput");
const placeholders = [
  "Matnni bu yerga kiriting",
  "Yana boshqa matn kiriting",
  "Nimadir qiziq narsani yozing",
  "Uchinchi variant",
];
let index = 0;

function changePlaceholder() {
  input.classList.remove("fade"); // Eski animatsiyani olib tashlaymiz
  input.placeholder = placeholders[index]; // Yangi placeholder qo'shamiz
  index = (index + 1) % placeholders.length; // Indexni aylantiramiz
  input.classList.add("fade"); // Animatsiyani qayta qo'shamiz
}

setInterval(changePlaceholder, 3000); // Har 3 soniyada placeholder matni o'zgaradi
