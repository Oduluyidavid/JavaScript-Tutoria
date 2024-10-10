// Object vs Map differences

const personObject={
    name: "Dave",
    age: 28,
    occupation: "software Developer",
};

const personMap = new Map();
personMap.set(()=>{console.log(10)}, 'Dave');
personMap.set('age' , 28);
personMap.set('occupation' , 'software Developer');

//  for obj function
// for( const key of Object.keys(personObject)){
    //  const value= personObject[key];
    // console.log(`${key} => ${value}`);
//  }
// for MAP function
// for( const[key, value] of personMap){
//   console.log(`${key} => ${value}`);
// }
// console.log(JSON.stringify(personObject));

// convert callback to promises
function wait(ms){
    return new Promise(( resolve, reject)=> {
        setTimeout(resolve, ms);
    });
}
async function main() {
    await wait(2000);
    console.log("2 second have passed");   
};
main();


// wait (2000).then (()=>{ 
    // console.log('2second have passed.')
// });
