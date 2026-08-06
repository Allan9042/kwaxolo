/* Map to names

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(v => v.name )

console.log( names ); // John, Pete, Mary



// Map to objects

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(function(item) {
    return{
        fullName: item.name + '' + item.surname,
        id: item.id
    }
})
 /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith



// sort users by age

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortArray(arr){
    arr.sort((a,b) =>  a.age - b.age)
}

sortArray(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete


// Get average age

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [ john, pete, mary ];

function getAverageAge(array){
    return array.reduce((total, current) => total + current.age, 0) / array.length
}

console.log(getAverageAge(users) ); // (25 + 30 + 29) / 3 = 28

*/

// Create keyed object from array

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById (array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj
    }  ,{})

}

let usersById = groupById(users);

console.log(usersById)

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
