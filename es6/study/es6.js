// const sum = (...nums) =>{
//                 console.log()
//                 return nums.reduce((acc,currV,currI,arr) => {
//                     console.log("acc: ",acc,"currV: ",currV,"currI: ",currI,"arr: ",arr);
//                 });
//             }
//             console.log(sum(1,2,3,4,5));

const result = () =>[0,1,2,3,4].reduce(
    function (acc,currV,currI,arr) {
        console.log(currV%2 === 0 ? true : false)
        return currV%2 === 0 ? true : false;
    }
)
console.log(result())

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(`${this.name} is my name`)
    }
}
new Person("John",20).say()


class Database {
    constructor(){
        this.data = ["A","B","C"];
    }
    find(index){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(this.data[index]){
                    resolve(this.data[index]);
                }else{
                    reject(new Error("Index not found"));
                }
            },500);
        })
    }
}
const db = new Database();
db.find(0).then(data => console.log("DataBase",data));
db.find(1).then(data => console.log("DataBase",data));
db.find(2).then(data => console.log("DataBase",data));

console.log("11111111")
console.log("22222222")
console.log("33333333")

