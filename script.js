const imageUrlInput = document.getElementById("imageUrl");
const addImageButton = document.getElementById("addImage");
const deleteImageButton = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let selectedImage = null;

addImageButton.addEventListener("click", () => {
  const url = imageUrlInput.value.trim();
  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Imagen de galería";

    img.addEventListener("click", () => {
      if (selectedImage) {
        selectedImage.classList.remove("selected");
      }
      img.classList.add("selected");
      selectedImage = img;
    });

    gallery.appendChild(img);
    imageUrlInput.value = "";
  } else {
    alert("Por favor, ingresa una URL válida.");
  }
});

deleteImageButton.addEventListener("click", () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  } else {
    alert("Selecciona una imagen para eliminar.");
  }
});

imageUrlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addImageButton.click();
  }
});
