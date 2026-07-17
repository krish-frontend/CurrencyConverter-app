
const BASE_URL = "https://api.exchangerate.fun/latest?base=USD"

let dropDowns = document.querySelectorAll(".container-select");


for(let selectItem of dropDowns){
    for (let key in countryList) {
    // console.log(key, countryList[key]);
        let newOption = document.createElement("option")
        newOption.innerText =key;
        newOption.value = key;
        selectItem.append(newOption)
}
}