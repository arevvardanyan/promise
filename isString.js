const isString = function(arg){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if(typeof arg === "string"){
                return resolve(arg.toUpperCase());
            }
                return reject(arg)
        }, 500)
    }
)}


const str = 'Hello, World!';
const num = 42;

isString(str).then((result)=>{
    console.log("Resolved:",result)
}).catch((result)=>{
    console.log("rejected:", result)
})