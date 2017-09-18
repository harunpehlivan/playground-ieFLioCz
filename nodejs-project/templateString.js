
const company = { companyId: 1, employeeId: 2 };

let url = `/api/company/${company.companyId}/employee/${company.employeeId}`;

console.log(url);
