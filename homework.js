// membuat nilai 100 nilai random dalam 1 array
let array = [];

for (let i = 0; i < 100; i++) {
    let nilaiRandom = Math.floor(Math.random() * 50);
    array.push(nilaiRandom);
}

console.log("array: ", array)

// memecah array menjadi 2 bagian dengan index genap dan ganjil
let arrGenap = [];
let arrGanjil = [];

for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        arrGenap.push(array[i]);
    } else {
        arrGanjil.push(array[i]);
    }
}

console.log("array index genap: ", arrGenap)
console.log("array index ganjil: ", arrGanjil)

// mencari min,max,total,rata-rata pada index genap
let minGenap = arrGenap[0];
let maxGenap = arrGenap[0];
let totalGenap = arrGenap[0]; 

for (let i = 0; i < arrGenap.length; i++) {
    if (arrGenap[i] < minGenap) {
        minGenap = arrGenap[i];
    }
    if (arrGenap[i] > maxGenap) {
        maxGenap = arrGenap[i];
    }
    totalGenap += arrGenap[i];
}

let rerataGenap = totalGenap / arrGenap.length;

console.log("min Genap: ", minGenap)
console.log("max Genap: ", maxGenap)
console.log("Total Genap: ", totalGenap)
console.log("rerata Genap: ", rerataGenap)

console.log("-----------------------------------")

// mencari min,max,total,rata-rata pada index ganjil
let minGanjil = arrGanjil[0];
let maxGanjil = arrGanjil[0];
let totalGanjil = arrGanjil[0];

for (let i = 0; i < arrGanjil.length; i++) {
    if (arrGanjil[i] < minGanjil) {
        minGanjil = arrGanjil[i];
    }
    if (arrGanjil > maxGanjil[i]) {
        maxGanjil = arrGanjil[i];
    }
    totalGanjil += arrGanjil[i];
}

let rerataGanjil = totalGanjil / arrGanjil.length;

console.log("min Ganjil: ", minGanjil)
console.log("max Ganjil: ", maxGanjil)
console.log("total Ganjil: ", totalGanjil)
console.log("rerata Ganjil: ", rerataGanjil)

console.log("------------------------------------------------------------------------------")

// membandingkan nilai min,max,total,rata-rata dari 2 array
let bandingMin = minGenap <= minGanjil;
let bandingMax = minGenap >= minGanjil;
let bandingTotal = minGenap <= minGanjil;
let bandingRerata = minGenap >= minGanjil;

console.log("apakah nilai minimum index genap lebih kecil sama dengan dari index ganjil? ", bandingMin)
console.log("apakah nilai maximum index genap lebih besar sama dengan dari index ganjil? ", bandingMax)
console.log("apakah nilai total index genap lebih kecil sama dengan dari index ganjil? ", bandingTotal)
console.log("apakah nilai rata - rata index genap lebih besar dari sama dengan dari index ganjil? ", bandingRerata)


