const customers = ['Subhadeep', 'Baishali', 'Sayantika', 'Sanju'];

const activeCustomers = ['Subhadeep', 'Baishali'];

const inactiveCustomers = _.difference(customers, activeCustomers);

const inactiveCustomers2 = _.intersection([2, 3], [2, 1]);
console.log(inactiveCustomers); 
console.log(inactiveCustomers2); 