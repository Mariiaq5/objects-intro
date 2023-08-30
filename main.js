const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architech: "Shreve, Lamb & Harmon"
}
console.log(`The dimensions of the Empire State Building are as follows:
number of stories is ${empireStateBuilding.stories},
height is ${empireStateBuilding.height},
number of square feet is ${empireStateBuilding.squareFeet},
length from East to West is ${empireStateBuilding.eastWestLength},
length from North to South is ${empireStateBuilding.northSouthLength}`);

console.log(empireStateBuilding["address", "constructionDate", "cos", "owner", "tarchitect"]);

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
console.log(`Instructors names are as follows:
 part time instructors names is ${nashvilleSoftwareSchool.instructors.partTime},
 full time instructors names is ${nashvilleSoftwareSchool.instructors.fullTime}`);
 console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0]);

