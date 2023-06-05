let quota = document.getElementById('quota');
let price = document.getElementById("price")
let priceBss = document.getElementById("priceBss")
let output = document.querySelector(".output")
let quota1 = document.getElementById('quota1');
let net = document.getElementById("net")
let vat = document.getElementById("vat")



function ss() {
    switch (price.value) {
    case "120":
            quota1.innerHTML = (136.80).toFixed(2) + " جنية"
        break;
      case "170":
            quota1.innerHTML = (193.80).toFixed(2) + " جنية"
        break;
      case "210":
            quota1.innerHTML = (239.4).toFixed(2) + " جنية"
        break;
      case "340":
            quota1.innerHTML = (387.6).toFixed(2) + " جنية"
        break;
      case "500":
            quota1.innerHTML = (570.0).toFixed(2) + " جنية"
        break;

    default:
        console.log("Error");
        break;
}
}

price.addEventListener("change", function () {
    output.style.display = "block"
    quota.innerHTML = Number(price.value).toFixed(2) + " جنية";

    calcNet()

    ss()
})


priceBss.addEventListener("input", calcNet)



function calcNet() {
    if (Number(priceBss.value) != "" && Number(price.value) != "") {

        if (Number(price.value) - Number(priceBss.value) < 0) {
         net.innerHTML = `<span>ايوة فين المشكلة؟</span> <img class="" src="imgs/cursing.png" alt="" width="35px" height="35px" class="text-center h-100">`
         vat.innerHTML = `<span>ايوة فين المشكلة؟</span> <img class="" src="imgs/cursing.png" alt="" width="35px" height="35px" class="text-center h-100">`
        } else {
            net.innerHTML = Number(price.value) - Number(priceBss.value) + " جنية"; 
            vat.innerHTML = calcVAT() + " جنية"
        }

    } else {
        net.innerHTML = `<img class="" src="imgs/computer.png" alt="" width="35px" height="35px" class="text-center h-100">`
        vat.innerHTML = `<img class="" src="imgs/computer.png" alt="" width="35px" height="35px" class="text-center h-100">`
    }
}






function calcVAT() {
    if (parseFloat(net.innerHTML)){
        return (parseFloat(net.innerHTML) * ((100 + 14) / 100)).toFixed(2);
   }
}


document.getElementById("idea").addEventListener("click", () => {
    Swal.fire('الفكرة في حالة سؤال العميل اشحن بكام علشان الباقة تجدد');
    console.log("Hi");
})