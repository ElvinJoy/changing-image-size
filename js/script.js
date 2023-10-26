function resizeImage() {
  const heightPercentage = document.getElementById("height").value;
  const widthPercentage = document.getElementById("width").value;
  const heightPixels = document.getElementById("height_px").value;
  const widthPixels = document.getElementById("width_px").value;
  const img = document.getElementById("img");

  if (heightPercentage !== "") {
    img.style.height = heightPercentage + "vh";
  } else if (widthPercentage !== "") {
    img.style.width = widthPercentage + "%";
  } else if (heightPixels !== "") {
    img.style.height = heightPixels + "px";
  } else if (widthPixels !== "") {
    img.style.width = widthPixels + "px";
  } else {
    img.style.height = "280px";
    img.style.width = "450px";
  }
}

openLink = () => {
  const linkTextarea = document.getElementById("linkTextarea").value;
  const newTabCheckbox = document.querySelector('input[type="checkbox"]');

  if (newTabCheckbox.checked) {
    window.open(linkTextarea, "_blank");
  } else {
    window.location.href = linkTextarea;
  }
};
