// async await then 학습




async function a(){
    console.log("a function")
    await Promise.resolve();
    console.log("a function 2")
}
a();
console.log("11111")