let elCountrySelect = document.querySelector(".choose-select");
let elCountryList = document.querySelector(".country-list");
let elSearchInput = document.querySelector(".search-input");
document.documentElement.classList.toggle('dark');


function createOptionToSelect() {

  countries.forEach(item => {
    let elOption = document.createElement("option");
    elOption.textContent = item.name;
    elOption.value = item.name.toLowerCase();
    elCountrySelect.appendChild(elOption);
  });
}
createOptionToSelect();

function renderCountries(arr, list) {
  list.innerHTML = "";

  arr.forEach(item => {
    let elItem = document.createElement("li");
    elItem.className = "sm:w-[264px] sm:mx-0 mx-auto rounded-[5px]";

    elItem.innerHTML = `
      <img class="!h-[160px] !w-[267px] object-cover"
           src="${item.flag}" alt="Country flag" width="267" height="160" />
      <div class="darc">
        <div class="p-[24px]">
          <strong class="text-[18px] text-[#111517] font-extraBold mb-[16px] dark">${item.name}</strong>
          <p><span class="font-semibold">Population: </span>${item.population}</p>
          <p><span class="font-semibold">Region: </span>${item.region}</p>
          <p><span class="font-semibold">Capital: </span>${item.capital}</p>
        </div>
      <div class="px-[24px] pb-[20px] flex justify-between">
          <button
              class="flex items-center gap-[5px] p-1 cursor-pointer border-[2px] border-black rounded-md transform active:scale-90">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-suit-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                </svg>
              <span class="font-semibold text-[16px] text-[#111517]">Like</span>
          </button>
          <button
              class="flex items-center gap-[5px] p-1 cursor-pointer border-[2px] border-black rounded-md transform active:scale-90">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-bookmark" viewBox="0 0 16 16">
                        <path
                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>
              <span class="font-semibold text-[16px] text-[#111517]">Saved</span>
          </button>
          <button
              class="flex items-center gap-[5px] p-1 cursor-pointer border-[2px] border-black rounded-md transform active:scale-90">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
              </svg>
              <span class="font-semibold text-[16px] text-[#111517]">More</span>
            </button>
        </div>
      </div>
    `;

    list.appendChild(elItem);
  });
}
renderCountries(countries, elCountryList);

function filterCountries() {
  const searchValue = elSearchInput.value.trim().toLowerCase();
  const selectValue = elCountrySelect.value;

  let filtered = countries;

  if (selectValue !== "") {
    filtered = filtered.filter(item => item.name.toLowerCase() === selectValue);
  }

  if (searchValue !== "") {
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(searchValue) ||
      String(item.population).includes(searchValue) ||
      item.region.toLowerCase().includes(searchValue) ||
      item.capital.toLowerCase().includes(searchValue)
    );
  }

  renderCountries(filtered, elCountryList);
}

elCountrySelect.addEventListener("change", filterCountries);
elSearchInput.addEventListener("input", filterCountries);
