//https://rickandmortyapi.com/api/character
//https://api.thedogapi.com/v1/breeds
//https://api.thedogapi.com/v1/breeds/search?q={name}
async function getDogs() {
  const response = await fetch("https://api.thedogapi.com/v1/breeds");
  const data = await response.json();
  return data;
}

async function showDogOptions() {
  const dogs = await getDogs();
  const select = document.getElementById("sel");
  select.addEventListener("change", (val) => {
    let selectDog = dogs.filter((e) => e.id == +val.target.value);
    document.querySelector(".dogName").innerHTML = selectDog[0].name;
    document.querySelector(".temperament").innerHTML =
      "Temperament - " + selectDog[0].temperament;
    document.querySelector(".life_span").innerHTML =
      "Life_span -" + selectDog[0].life_span;
    console.log(selectDog[0]);
    document.querySelector(
      ".dogImg"
    ).src = `https://cdn2.thedogapi.com/images/${selectDog[0].reference_image_id}.jpg`;
  });
  dogs.forEach((dog) => {
    const option = document.createElement("option");
    option.value = dog.id;
    option.textContent = dog.name;
    select.appendChild(option);
  });
}

showDogOptions();
