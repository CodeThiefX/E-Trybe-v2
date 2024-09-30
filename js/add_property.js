const duration = document.getElementById("duration");
const dealType = document.getElementById("deal-type");
const description = document.getElementById("description");
const descriptionCount = document.getElementById("description-count");
const countries = document.getElementById("countries");
const countryOptions = document.querySelectorAll("#country-option");
const states = document.getElementById("states");
const cities = document.getElementById("cities");
const featuredImage = document.getElementById("featured-image");
const propertyVideo = document.getElementById("property-video");
const propertyDocument = document.getElementById("property-document");
const galleryFiles = document.getElementById("gallery-files");
const radioInputs = document.querySelectorAll("#radio-input");
const checkboxInputs = document.querySelectorAll("#checkbox-input");
const facilitiesList = document.getElementById("facilites-list");
const showAddFacility = document.getElementById("add-facility");
const addFacility = document.getElementById("add-facility-btn");
const newFacilityForm = document.getElementById("new-facility-form");
const uploadFiles = document.querySelectorAll('[data-upload-file="true"]');

let galleryFileList = [];

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "Select an option";
defaultOption.selected = true;

dealType.addEventListener("change", function () {
  if (this.value === "rent") {
    duration.classList.remove("hidden");
    duration.classList.add("flex");
    return;
  }
  duration.classList.remove("flex");
  duration.classList.add("hidden");
});

description.addEventListener("input", function () {
  descriptionCount.textContent = this.value.length;
});

countries.addEventListener("change", async function () {
  const cca2 = this.value;
  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries/${cca2}/states`,
    {
      headers: {
        "X-CSCAPI-KEY":
          "QjFNTWk3bDFLWURjSFBxdmdQUzVVa1cwVjYxQWRYTFRUMEExMTJIRw==",
      },
    }
  );
  const data = await response.json();

  states.innerHTML = "";
  states.appendChild(defaultOption);

  data.forEach((state) => {
    const option = document.createElement("option");
    option.value = state.name;
    option.setAttribute("data-iso2", state.iso2);
    option.id = "state-option";
    option.textContent = state.name;
    states.appendChild(option);
  });
});

states.addEventListener("change", async function () {
  const iso2 = this.options[this.selectedIndex].getAttribute("data-iso2");
  const selectedCountry = countries.value;

  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${iso2}/cities`,
    {
      headers: {
        "X-CSCAPI-KEY":
          "QjFNTWk3bDFLWURjSFBxdmdQUzVVa1cwVjYxQWRYTFRUMEExMTJIRw==",
      },
    }
  );
  const data = await response.json();

  cities.innerHTML = "";
  cities.appendChild(defaultOption);

  data.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    cities.appendChild(option);
  });
});

async function fetchCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca2",
    {
      headers: {
        "X-CSCAPI-KEY":
          "QjFNTWk3bDFLWURjSFBxdmdQUzVVa1cwVjYxQWRYTFRUMEExMTJIRw==",
      },
    }
  );
  const data = await response.json();

  countries.innerHTML = "";

  countries.appendChild(defaultOption);

  data.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.cca2;
    option.id = "country-option";
    option.textContent = country.name.common;
    countries.appendChild(option);
  });
}

fetchCountries();

featuredImage.addEventListener("change", function () {
  const file = this.files[0];
  const fileNameText = document.querySelector(
    '[data-file-id="featured-image"]'
  );
  fileNameText.textContent = file.name;
});

propertyVideo.addEventListener("change", function () {
  const file = this.files[0];
  const fileNameText = document.querySelector(
    '[data-file-id="property-video"]'
  );
  fileNameText.textContent = file.name;
});

propertyDocument.addEventListener("change", function () {
  const file = this.files[0];
  const fileNameText = document.querySelector(
    '[data-file-id="property-document"]'
  );
  fileNameText.textContent = file.name;
});

galleryFiles.addEventListener("change", function () {
  const files = [...this.files];

  files.forEach((file) => {
    if (galleryFileList.length === 10) {
      alert("You can only upload 10 images");
      return;
    }

    galleryFileList.push(file);
  });

  updateGalleryView();
});

function deleteGalleryItem(index) {
  galleryFileList = galleryFileList.filter((file, i) => i !== index);

  updateGalleryView();
}

function updateGalleryView() {
  const galleryView = document.getElementById("gallery-view");
  galleryView.innerHTML = "";

  galleryFileList.forEach((file, index) => {
    const viewDiv = document.createElement("div");
    const fileUrl = URL.createObjectURL(file);
    const html = `
    <div class="relative">
    <img
      src="${fileUrl}"
      alt=""
      style="width:100%; height: 14rem"
      class="object-cover rounded-md"
    />
    <button
    onclick="deleteGalleryItem(${index})"
      class="delete-btn absolute bg-white w-9 h-9 rounded-md top-4 right-4 text-center"
    >
      <img
        src="../../assets/Delete.svg"
        alt=""
        class="flex items-center justify-center mx-auto py-2"
      />
    </button>
  </div>
    `;

    viewDiv.innerHTML = html;

    galleryView.appendChild(viewDiv);
  });
}

radioInputs.forEach((input, index) => {
  input.addEventListener("input", function () {
    console.log(this.checked, index);

    const parentLabel = this.parentElement;

    if (this.checked) {
      parentLabel.classList.add("check-label-selected");
      parentLabel.classList.remove("check-label");
    }

    // remove class from all other labels
    radioInputs.forEach((input, i) => {
      if (i !== index && input.name === this.name) {
        const parentLabel = input.parentElement;
        parentLabel.classList.add("check-label");
        parentLabel.classList.remove("check-label-selected");
      }
    });
  });
});

checkboxInputs.forEach((input, index) => {
  input.addEventListener("input", function () {
    console.log(this.checked, index);

    const parentLabel = this.parentElement;

    if (this.checked) {
      parentLabel.classList.add("check-label-selected");
      parentLabel.classList.remove("check-label");
      return;
    }
    parentLabel.classList.add("check-label");
    parentLabel.classList.remove("check-label-selected");

    // remove class from all other labels
    // radioInputs.forEach((input, i) => {
    //   if (i !== index) {
    //     const parentLabel = input.parentElement;
    //     parentLabel.classList.add("check-label");
    //     parentLabel.classList.remove("check-label-selected");
    //   }
    // });
  });
});

showAddFacility.addEventListener("click", function () {
  newFacilityForm.classList.toggle("hidden");

  if (newFacilityForm.classList.contains("hidden")) {
    showAddFacility.innerHTML = `
    <i
    class="border border-black py-1 px-2 text-xs rounded cursor-pointer fas fa-plus"
  >
  </i>
  <span id="add_text"> Add additonal facilities </span>
    `;
    return;
  }

  showAddFacility.textContent = "Close";
});

addFacility.addEventListener("click", function () {
  const input = document.getElementById("facility-input");

  if (input.value.trim() === "") {
    return;
  }

  const facility = input.value;
  const facilityElem = `
  <div class="flex gap-4 items-center">
  <input type="checkbox" checked="true" name="additional_information[]" id="" />
  <span>${facility}</span>
</div>
  `;
  input.value = "";

  facilitiesList.innerHTML += facilityElem;
});

uploadFiles.forEach((input) => {
  input.addEventListener("change", function () {
    const fileName = this.files[0].name;
    const textElem = document.querySelector(`[data-file-tag="${this.id}"]`);

    textElem.textContent = fileName;
  });
});
