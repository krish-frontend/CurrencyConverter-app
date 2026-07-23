
const BASE_URL = "https://api.exchangerate.fun/latest?base=USD"

let dropDowns = document.querySelectorAll(".container select");


for(let selectItem of dropDowns){
    for(let key in countryList){
    // console.log(key, countryList[key]);
        let newOption = document.createElement("option")
        newOption.innerText =key;
        newOption.value = key;
        if(selectItem.name==="from" && key==="USD"){
            newOption.selected="selected";
        }else if (selectItem.name==="to" && key==="INR"){
            newOption.selected="selected"
        }
        selectItem.append(newOption)

        selectItem.addEventListener("change" , (ele)=>{
            updateFlag(ele.target)
        })
    };
};

const updateFlag = (ele2)=>{
    let currCode = ele2.value
    let 
}