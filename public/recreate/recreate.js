var form = document.forms.namedItem("recreate");
form.addEventListener(
  "submit",
  ev => {
    ev.preventDefault(); // stay on the same page

    var output = document.getElementById("output"),
      fd = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://blockchain-lab.inycom.es:4000/api/recreate", true);
    xhr.onload = () => {
      if (xhr.status == 200) {
        output.innerHTML = xhr.responseText;
      } else {
        output.innerHTML =
          "Error " + xhr.status + " occurred uploading your file.<br />";
      }
    };

    xhr.send(fd);
  },
  false
);
