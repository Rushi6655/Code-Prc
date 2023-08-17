
// class Demo{
//     #global="";
//     #local="";
//     constructor(global,local){
//         this.#global=global;
//         this.#local=local;
//     }
// // getters similarly we can create setters as well
//     getGlobal(){
//         return this.#global;
//     }
//     getLocal(){
//         return this.#local;
//     }
// }

document.getElementById('btn').addEventListener('click',function(){
    // let demo=new Demo('Shelke','Rushi');
    // console.log(demo.getGlobal());
    // console.log(demo.getLocal());


    // fetch call to consume the apis

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

    waitFunction();
    console.log("end");


})


async function waitFunction(){
    console.log("waiting...");
    await setTimeout(30000);
}