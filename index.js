const employee = {
    name: "Ethan",
    streetAddress: "Bailey",
}
function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    let copyOfEmployeeObject = {...employeeObject}
     copyOfEmployeeObject[key] = value
     return copyOfEmployeeObject
}
function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value
    return employeeObject
}
function deleteFromEmployeeByKey(employeeObject, key) {
    let copyOfEmployeeObject = {...employeeObject}
    delete copyOfEmployeeObject[key]
    return copyOfEmployeeObject
}
function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key]
    return employeeObject
}
