
const BASE_URL = "https://api.exchangerate.fun/latest?base=USD";

const dropDowns = document.querySelectorAll(".container select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");  
const toCurr = document.querySelector(".to select");  


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
    let currCode = ele2.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = ele2.parentElement.querySelector("img");
    img.src =newSrc;
}

btn.addEventListener("click",async (event)=>{
    event.preventDefault();
    let amount = document.querySelector("input");
    let amountVal = amount.value;
    if(amountVal==="" || amountVal<1){
        amount.value=1;
        amountVal=1;        
    };
    
    // console.log(fromCurr.value, toCurr.value, amountVal);

    const url = `https://api.exchangerate.fun/latest?base=${fromCurr.value}&symbols=${toCurr.value}`;

    let response = await fetch(url);
    let data = await response.json();
    let exchangeRate = data[toCurr.value];
    
    console.log(exchangeRate);
})

 