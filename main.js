/*****************************************************************************************
* Part 2
****************************************************************************************/
var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        {first: "Andrew", last: "Raaber", group: "Development", nameOrder: "reverse"}
        /*...don't foget to account for other entries of the same form, but with different group names.....*/
];

// Part 2 Answer Here
var groupedObject = EmployeeGrouping();

function EmployeeGrouping() {
    var empObject = {};
    for (var i = 0; i < employees.length; i++) {
        var groupName = employees[i].group;
        if (!empObject[groupName]) {
            empObject[groupName] = [];
        }
        if (employees[i].nameOrder == "reverse") {
            empObject[groupName].push(employees[i].last + " " + employees[i].first);
        } else {
            empObject[groupName].push(employees[i].first + " " + employees[i].last);
        }
    }

    return empObject;
}

/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here
