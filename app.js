function tipPaid(bill) {
    let percentage;
    if (bill < 50) {
    percentage = .2;
    } else if ( bill >= 50 && bill < 200) {
    percentage = .15;
    } else (tip >= 200); {
    percentage = .1;
    } return percentage * bill;
}
const bill = [140, 45, 270];
const tips = [tipPaid(bill[0])]


