// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let person = {
    firstName:null,
    lastName:null,
    salary:null
  }
  let people = [];
  let answer = true;

  while(answer === true){
      person = {};
      person.firstName = prompt("First Name");
      person.lastName = prompt("Last Name");
      person.salary = Number(prompt("Salary"));
      people.push(person);
      answer = confirm("Continue?");
  }
  return people;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average 
  let averageSalary = 0;
  let addSalary = 0;
  for(let i = 0; i < employeesArray.length; i++){
      addSalary += employeesArray[i].salary;
  }
  averageSalary = (addSalary/(employeesArray.length)).toFixed(2);
  console.log('The average employee salary between our '+ employeesArray.length+ ' employee(s) is $'+averageSalary);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let min = 0;
  let max = employeesArray.length;
  let arrayRow = Math.ceil(Math.random()*(max))-1;
  console.log('Congradulations to ' + employeesArray[arrayRow].firstName +' '+employeesArray[arrayRow].lastName + ', our random drawing winner!');

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
