const employeeData = (fullName) => {
  const email = ((fullName.split(' ')).join('')).toLowerCase();
  return {nomeCompleto: fullName, email: `${email}@trybe.com`};
};


const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    }
    return employees;
  };

console.log(newEmployees(employeeData));