const foods = [
  { name: "Chizburger", price: 24000, photo: "hamburger-2" },
  { name: "Chizburger двайной", price: 32000, photo: "hamburger-3" },
  { name: "Xot-Dog фирменный", price: 28000, photo: "firmenniy" },
  { name: "Chaverma", price: 19000, photo: "lavash-2" },
  { name: "Chaverma двайной", price: 24000, photo: "lavash-4" },
  { name: "Xot-Dog фирменный mini", price: 17000, photo: "firmenniy" },
  { name: "Xot-Dog", price: 12000, photo: "xot-dog" },
  { name: "Xot-Dog обычный 2 sosiska", price: 14000, photo: "xot-dog2" },
  { name: "Xot-Dog двайной", price: 17000, photo: "xot-dog2" },
  { name: "FRI", price: 15000, photo: "fri" },
  { name: "KFC", price: 20000, photo: "kfc" },
  { name: "Shashlik", price: 9000, photo: "shashlik" },
];

foods.forEach((food) => {
  document.querySelector(".foods").innerHTML += `
        <div class="food">
            <div class="food__img" style="background-image: url('../images/${food.photo}.jpg')"></div>
            <h3 class="food__title">${food.name}</h3>
            <div class="food__description">
                <button class="food__count-minus">-</button>
                <div class="food__price">${food.price}</div>
                <button class="food__count-add">+</button>
            <div class="food__count">0</div>
            </div>
        </div>
    `;
});

const table = document.querySelector("table");
const counts = document.querySelectorAll(".food__count");
const foodTitles = document.querySelectorAll(".food__title");
const foodPrices = document.querySelectorAll(".food__price");
const countAddes = document.querySelectorAll(".food__count-add");
const countMinuses = document.querySelectorAll(".food__count-minus");

countMinuses.forEach((countMinus, index) => {
  countMinus.addEventListener("click", (e) => {
    let temp = counts[index].textContent;
    temp--;
    if (temp < 0) temp = 0;
    counts[index].textContent = temp;
  });
});

countAddes.forEach((countAdd, index) => {
  countAdd.addEventListener("click", (e) => {
    let temp = counts[index].textContent;
    temp++;
    counts[index].textContent = temp;
  });
});

function calculate() {
  let result = 0;
  let counter = 0;

  foodPrices.forEach((price, index) => {
    result += price.textContent * counts[index].textContent;
  });

  document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");

  table.innerHTML = `
    <tr>
        <th>N</th>
        <th>Taom nomi</th>
        <th>Soni</th>
        <th>Baxosi (1dona)</th>
        <th>Umumiy</th>
    </tr>
  `;

  counts.forEach((count, id) => {
    if (count.textContent > 0) {
      table.innerHTML += `
        <tr>
            <td>${++counter}</td>
            <td>${foodTitles[id].textContent}</td>
            <td>${count.textContent}</td>
            <td>${foodPrices[id].textContent}</td>
            <td>${count.textContent * foodPrices[id].textContent}</td>
        </tr>
      `;
    }
    if (counter == 5) document.querySelector(".modal").style.top = "20%";
    if (counter == 7) document.querySelector(".modal").style.top = "10%";
    if (counter > 9) document.querySelector(".modal").style.top = 0;
  });

  table.innerHTML += `
    <tr>
        <th colspan='5'>${result}</th>
    </tr>
  `;
}

function add() {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
}

function newClient() {
  add();
  counts.forEach((count) => {
    count.textContent = 0;
  });
}
