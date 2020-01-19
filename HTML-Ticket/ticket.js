var data = 
'{ "discounts" : [' +
'{ "setting":"7v.tai alle" , "discount": "100" },' +
'{ "setting":"7-15v." , "discount":"50" },' +
'{ "setting":"16-64v." , "discount":"0" },' +
'{ "setting":"65v. tai yli" , "discount":"50" },' +
'{ "setting":"ei varusmies eikä opiskelija" , "discount":"0" },' +
'{ "setting":"varusmies" , "discount":"50" },' +
'{ "setting":"opiskelija" , "discount":"45" },' +
'{ "setting":"Mtk jäsen" , "discount":"15" },' +
'{ "setting":"hinta" , "price":"16"} ]}';

discountsGet = JSON.parse(data);

var price;
var occupationdiscount;
var agediscount;
var mtkdiscount;
var discount;

var age1 = document.getElementById("age_rd1");
var age2 = document.getElementById("age_rd2");
var age3 = document.getElementById("age_rd3");
var age4 = document.getElementById("age_rd4");

var occupation1 = document.getElementById("occupation_rd1");
var occupation2 = document.getElementById("occupation_rd2");
var occupation3 = document.getElementById("occupation_rd3");

var mtk = document.getElementById("mtk_cb");
var result;


function onLoad() {
    calculatePrice();
}

function submit(){
    window.alert("Lippu on lisätty ostoskoriin.")
}

function showInfo() {
    window.alert("Normaalihinta 16 e\n" +
        "Alle 7 v. Ilmainen\n" +
        "65 v. ja yli: -50 % \n" +
        "7-15 v. -50% \n" +
        "Mtk jäsen: -15 % \n" +
        "Varusmies: -50 % \n" +
        "Opiskelija: -45 % \n")
}

function calculatePrice(){

    if(age1.checked == true){
        agediscount = discountsGet.discounts[0].discount;
    } else if( age2.checked == true){
        agediscount = discountsGet.discounts[1].discount;
    } else if(age3.checked == true){
        agediscount = discountsGet.discounts[2].discount;
    } else if(age4.checked == true){
        agediscount = discountsGet.discounts[3].discount;
    }
    if(occupation1.checked == true){
        occupationdiscount = discountsGet.discounts[4].discount;
    } else if(occupation2.checked == true){
        occupationdiscount = discountsGet.discounts[5].discount;
    } else if(occupation3.checked == true){
        occupationdiscount = discountsGet.discounts[6].discount;
    }

    if(mtk.checked == true){
        mtkdiscount = discountsGet.discounts[7].discount;
    }else{
        mtkdiscount = 0;
    }

    occupationdiscount = parseInt(occupationdiscount,10);
    mtkdiscount = parseInt(mtkdiscount, 10);
    agediscount = parseInt(agediscount, 10);

    if(occupation3.checked == true && mtk.checked == true){
        discount = occupationdiscount + mtkdiscount;
    }else{
        discount = occupationdiscount + agediscount + mtkdiscount;
    }

    if (discount == 0){
        price = discountsGet.discounts[8].price;
    } else if(discount >= 100){
        price = 0;
    } else{
        price = discountsGet.discounts[8].price;
        price = price - (price / 100 * discount);
    }

    result = price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('ticketPriceDisplay').innerHTML = result;
}
