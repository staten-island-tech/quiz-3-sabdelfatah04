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