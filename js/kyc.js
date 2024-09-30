const selectedDocumentOption = document.getElementById("documentOption");
const uploadSection = document.getElementById("upload-section");
const optionDisplay = document.getElementById("option-display");
const uploadUi = document.getElementById("upload-ui");
const browseFilesLabel = document.getElementById("browse-files");
const fileName = document.getElementById("filename");
const documentInput = document.getElementById("document");

let userDocument = null;

const documentMap = {
  nin: "NIN",
  passport: "Passport",
  drivers_licence: "Driver's Licence",
};

selectedDocumentOption.addEventListener("change", function () {
  userDocument = this.value;
  optionDisplay.textContent = documentMap[userDocument];
  uploadSection.classList.remove("hidden");
  uploadSection.classList.add("flex");
});

documentInput.addEventListener("change", function () {
  const file = this.files[0];
  fileName.textContent = file.name;
  uploadUi.classList.add("hidden");
});
