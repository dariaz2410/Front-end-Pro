let company = {
  sales: [ { name: "John", salary: 1000 }, { name: "Alice", salary: 600 } ],
  development: {
    web: [ { name: "Peter", salary: 2000 }, { name: "Alex", salary: 1800 } ],
    internals: [ { name: "Jack", salary: 1300 } ]
  }
}

function getTotalSalary(obj) {
  if(Array.isArray(obj)) {
    return obj.reduce((sum, employee) => sum + employee.salary, 0);
  }

  let total = 0;
  for (let key in obj) {
    total += getTotalSalary(obj[key]);
  }

  return total;
}

console.log(getTotalSalary(company));

