const breeds = document.getElementById("breeds");
const header = document.getElementById("header");
const section = document.getElementById("section");
const footer = document.getElementById("footer");
const lorem = document.getElementById("lorem");

const main = () => {
  axios
    .get(`https://catfact.ninja/breeds`)
    .then((res) => {
      const result = res.data.data;
      console.log(result);
      breeds.innerHTML = "";
      result.splice(0, 9).map((item) => {
        breeds.innerHTML += `
          <div class="p-3   col-xl-4 col-lg-4">
           <div class="p-4 breeds_card">
           <h4 class="fw-bold">breed:ㅤ${item.breed}</h4>
           <h4 class="fw-bold">country:ㅤ${item.country}</h4>
           <h4 class="fw-bold">origin:ㅤ${item.origin}</h4>
           <div class="breeds_buttons d-flex gap-4 mt-4">
             <button class="br_button fw-bold">Ticked</button>
             <button class="br_button fw-bold">Short</button>
           </div>
           </div>
          </div>`;
      });
    })
    .catch((error) => {
      Toastify({
        text: "xatolik yuzaga keldi",
        duration: 2000,
        style: {
          background: "orange",
        },
      }).showToast();
      return;
    });
};

main();

const input = document.getElementById("input");

input.addEventListener("input", (e) => {
  const eventsearch = e.target.value;

  if (eventsearch.length < 1) {
    main();
  } else {
    axios
      .get(`https://catfact.ninja/breeds`)
      .then((self) => {
        const search = self.data.data;

        header.innerHTML = "";
        section.innerHTML = "";
        footer.innerHTML = "";

        search.splice(0, 9).map((item) => {
          const row = document.createElement("div");
          row.className = "row";
          row.innerHTML += `
        <div class="p-3 col-xl-4 col-lg-4">
           <div class="p-4 breeds_card">
           <h4 class="fw-bold">breed:ㅤ${item.breed}</h4>
           <h4 class="fw-bold">country:ㅤ${item.country}</h4>
           <h4 class="fw-bold">origin:ㅤ${item.origin}</h4>
           <div class="breeds_buttons d-flex gap-4 mt-4">
             <button class="br_button fw-bold">Ticked</button>
             <button class="br_button fw-bold">Short</button>
           </div>
           </div>
          </div>
        `;
          footer.appendChild(row);
        });
      })
      .catch((error) => {
        Toastify({
          text: "xatolik yuzaga keldi",
          duration: 2000,
          style: {
            background: "orange",
          },
        }).showToast();
        return;
      });
  }
});

const fact = () => {
  const a = axios
    .get("https://catfact.ninja/fact")
    .then((a) => {
      const s = a.data;
      console.log(s);
      lorem.innerHTML = "";
      lorem.innerHTML += `
      <p  class="text-center mt-3 fs-5 section_text">
    ${s.fact}
    </p>`;
    })
    .catch((error) => {
      console.log(error);
      lorem.innerHTML = "a";
    });
};
fact();
