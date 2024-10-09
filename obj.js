// How to get all keys in a javascript object

const hasPaid = {
    'bob': true,
     'jane': false,
     'rick': true,
}

// Arrow function
const arrow = (name) => {
        console.log(name)
}

// Regular function
function myFunc(name) {
    console.log(name)
}



Object.values(hasPaid)
     .map((name) => {
        console.log(`Name in mapping: ${name}`)
     })
    //  console.log(objs);


    //  How to get a current array index in forEach() in javascript
    const names =[ 'Esther' , ' Ajayi' , 'Bidemi'];
    names.forEach((name , index)=> console.log(name + ""+ index));

// How to access array items by their index in javascript
    const colors =["green", "Red", "Yellow", "White"]
    console.log(colors.at(0));


    const numbers = [5, 9, 2,4,3];
    const containsFour = numbers.indexOf(4) <10;
    console.log(containsFour)

    // how to get an even number
    const number = [5, 9, 2, 4 ,3];
    const firstEvenNumber = number.findIndex(n=> n % 2 === 0);
    console.log(`firstEvenNumber: ${firstEvenNumber}`);


    // how to get the last number

    const numb = [5, 9, 2, 4 ,3];
    const lastEvenNumber = numb.findLast(n=> {
        return n % 2=== 0;
    });
    console.log(`lastEvenNumber: ${lastEvenNumber}`);

    console.log(`Last index of the array: ${numb.slice(-1)}`)





    // how to get a user array index object

    const users =[
        { 
            id : 2382,
            name : "Bidemi",
        },
        { 
            id: 3108,
            name : "David",

        },
        {
            id: 3290,
            name : "James"
        },
    ];
// Applying a destructive array
    const user = users.find(({id})=>id === 3108) 
    console.log(user);