let elCountrySelect = document.querySelector(".choose-select");
let elCountryList = document.querySelector(".country-list");
let elSearchInput = document.querySelector(".search-input");
document.documentElement.classList.toggle('dark');

let elLikeCount = document.querySelector(".like-count")
let elSavedCount = document.querySelector(".saved-count")


let likeList = []
let SavedList = []


// select part start
function createOptionToSelect() {
  let defaultOption = document.createElement("option");
  defaultOption.textContent = "All option";
  defaultOption.value = "";
  elCountrySelect.appendChild(defaultOption);

  countries.forEach(item => {
    let elOption = document.createElement("option");
    elOption.textContent = item.name;
    elOption.value = item.name.toLowerCase();
    elCountrySelect.appendChild(elOption);
  });
}
createOptionToSelect();
// select part and


// render countries start
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
          <button onclick="handleLikeClick(${item.id})" class="  ${item.isLiked ? "bg-red-600 text-white border-red-600" : "border-black"} font-semibold text-[16px] text-[#111517] p-1 cursor-pointer border-[2px] rounded-md transform active:scale-90">Like</button>
          <button onclick="handleSavedClick(${item.id})" class=" ${item.isSaved ? "bg-green-600 text-white border-green-600" : "border-black"} font-semibold text-[16px] text-[#111517] gap-[5px] p-1 cursor-pointer border-[2px] rounded-md transform active:scale-90">Saved</button>
          <button onclick="handleMoreCLick(${item.id})" class="font-semibold text-[16px] text-[#111517] p-1 cursor-pointer border-[2px] border-black rounded-md transform active:scale-90">More</button>
        </div>
      </div>
    `;

    list.appendChild(elItem);
  });
}
renderCountries(countries, elCountryList);
// render countries and


// input part start
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
// input part and


// Action start
function handleLikeClick(id){
  let findeObj = countries.find(item => item.id === id)
  findeObj.isLiked = !findeObj.isLiked
  renderCountries(countries,elCountryList)
  elLikeCount.textContent = countries.filter(item => item.isLiked).length
}

function handleLikeBtnClick(){
  let likeList = countries.filter(item => item.isLiked)
  renderCountries(likeList, elCountryList)
}
 // action and

// Action Saved start 
function handleSavedClick(id){
  let findeObj = countries.find(item => item.id === id)
  findeObj.isSaved = !findeObj.isSaved
  renderCountries(countries, elCountryList)
  elSavedCount.textContent = countries.filter(item => item.isSaved).length
}

function handleSavedBtnClick(){
  let SavedList = countries.filter(item => item.isSaved)
  renderCountries(SavedList, elCountryList)
}
// action saved and 


// action more start 

// action more and 
