const baseEmployee = {company: 'acme', active: true};

const newEmployee = {...baseEmployee,...{ department:'deliveries',name:'Andrew'}};

console.log(newEmployee);