let arr=[1,2,3,4,5]
let it=arr[Symbol.iterator]()
console.log(it.next());
console.log("can interrupt the iterator")
it.next();
it.next();
console.log(it.next());
console.log(it.next());
console.log(it.next());



/*
async function sample()
{
    console.log("from sample fun");
    return "CVRCOE" //returns a promise
}
console.log(sample())
console.log("after fun call")

*/

async function sample()
{
    console.log("sample fun");
    await console.log("sample fun of await");
    console.log("sample fun");
    console.log("sample fun");
    console.log("sample fun");
    console.log("sample fun");
    console.log("sample fun");
    console.log("sample fun");
    console.log("sample fun");
}
sample()
console.log("after fun");
