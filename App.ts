let WeightinKg:number = 70
let HeightinMeter:number = 1.58496
let BodyMassindex=WeightinKg/(HeightinMeter*HeightinMeter)
if(BodyMassindex<18.5){
    console.log(`you are underweight your BMI is ${BodyMassindex}`)
}else if(BodyMassindex>=18.5 && BodyMassindex<=24.9){
    console.log(`you are  Normai Weight and your BMI is ${BodyMassindex}`)
}else if(BodyMassindex>=25 && BodyMassindex<=29.9){
    console.log(`you are Over Weigth and your BMI is ${BodyMassindex}`)
}else {
    console.log(`obesity and your BMI is ${BodyMassindex}`)
}