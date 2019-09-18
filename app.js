function tipPaid(bill) {
    let percentage;
    if (bill < 50){
    percentage = .2;
    } else if ( bill >= 50 && bill < 200){
    percentage = .15;
    } else {
    percentage = .1;
    } return percentage * bill;
}
const bill = [140, 45, 270];
const tips = [tipPaid(bill[0]), tipPaid(bill[1]) , tipPaid(bill[2]) ]
console.log(tips);

let final = [bill[0] + tips [0] , bill[1] + tips [1] , bill[2] + tips [2]];
console.log([final]);

const copy = final.filter(final => final > 100);
console.log(copy);

const robInfo = {
    fullName: 'Rob Grande',
    mass: 78,
    height: 1.69,
    getBMI: function (){
        BMI = (this.mass / ((this.height) * (this.height)))
        return BMI;
    }
};
const dejonInfo = {
    fullName: 'Dejon Kurti',
    mass: 110,
    height: 1.95,
    getBMI: function (){
        BMI = (this.mass / ((this.height) * (this.height)))
        return BMI;
    }
};
console.log(dejonInfo.getBMI());
console.log(robInfo.getBMI());

if (dejonInfo.getBMI() > robInfo.getBMI()){
    console.log(dejonInfo.fullName + ' has a higher BMI of ' + dejonInfo.getBMI());
} else if (robInfo > dejonInfo) {
    console.log(robInfo.fullName + ' has a higher BMI of ' + robInfo.getBMI());
}else {
    console.log('They have the same BMI')
}