// script.js
document.addEventListener("DOMContentLoaded", function () {
  var uploadZones = document.querySelectorAll(".upload-zone");
  var fileInputs = document.querySelectorAll(".file-input");

  uploadZones.forEach(function (zone, index) {
    zone.addEventListener("click", function () {
      fileInputs[index].click();
    });

    zone.addEventListener("dragover", function (e) {
      e.preventDefault();
      zone.style.borderColor = "green";
    });

    zone.addEventListener("dragleave", function (e) {
      zone.style.borderColor = "#ccc";
    });

    zone.addEventListener("drop", function (e) {
      e.preventDefault();
      zone.style.borderColor = "#ccc";
      fileInputs[index].files = e.dataTransfer.files;
      handleFiles(fileInputs[index].files);
    });
  });

  fileInputs.forEach(function (input) {
    input.addEventListener("change", function () {
      if (this.files.length > 0) {
        handleFiles(this.files);
      }
    });
  });

  function handleFiles(files) {
    console.log(files[0].name);
  }

  const divs = document.querySelectorAll(".selectable-bedrooms");

  divs.forEach((div) => {
    div.addEventListener("click", function () {
      // Reset all divs to default styles and set images to black
      divs.forEach((d) => {
        d.classList.remove("bg-[#0A2F55]", "text-white");
        d.classList.add("text-black", "border-black", "border-[1px]");
        const img = d.querySelector(".icon");
        // Ensure all non-selected items have the black image
        img.src = "../../assets/bed single-black.svg";
      });

      // Apply selected styles to the clicked div and change its image to white
      this.classList.add("bg-[#0A2F55]", "text-white");
      this.classList.remove("text-black", "border-black", "border-[1px]");
      const img = this.querySelector(".icon");
      // Change the image for the selected item to white
      img.src = "../../assets/bed-single.svg";
    });
  });

  const bathrooms = document.querySelectorAll(".selectable-bathrooms");

  bathrooms.forEach((bath) => {
    bath.addEventListener("click", function () {
      bathrooms.forEach((b) => {
        b.classList.remove("bg-[#0A2F55]", "text-white");
        b.classList.add("text-black", "border-black", "border-[1px]");
      });

      this.classList.add("bg-[#0A2F55]", "text-white");
      this.classList.remove("text-black", "border-black", "border-[1px]");
    });
  });

  const kitchens = document.querySelectorAll(".selectable-kitchens");

  kitchens.forEach((kitchen) => {
    kitchen.addEventListener("click", function () {
      kitchens.forEach((k) => {
        k.classList.remove("bg-[#0A2F55]", "text-white");
        k.classList.add("text-black", "border-black", "border-[1px]");
      });

      this.classList.add("bg-[#0A2F55]", "text-white");
      this.classList.remove("text-black", "border-black", "border-[1px]");
    });
  });

  document.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      if (tile.classList.contains("done")) {
        // Change from done to not-done
        tile.classList.remove("done");
        tile.classList.add("not-done");
        tile.innerHTML = `${tile.getAttribute(
          "data-feature"
        )} <button class="border border-black rounded cursor-pointer px-[0.4rem]">+</button>`;
      } else {
        // Change from not-done to done
        tile.classList.remove("not-done");
        tile.classList.add("done");
        tile.innerHTML = `${tile.getAttribute(
          "data-feature"
        )} <span><img src="../../assets/done.svg" alt="Done" /></span>`;
      }
    });
  });

  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentNode.remove(); // Remove the image container
    });
  });
});
