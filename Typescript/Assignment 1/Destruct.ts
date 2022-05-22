//Destructing
var names = ["alpha", "beta", "gamma", "delta"];
var [firstelement,secondelement,thirdelement,fourthelement]= names;
console.log(thirdelement);


//Ans b.

var organization ={
    name:"Priyank",
    address:{
        city:"Delhi",
        state:"Delhi",
        pincode:110007
    }
}

const {address:{city:city1,state:state1,pincode:pincode1}}=organization;

console.log(pincode1);