const squarePromise = function(inptPromise){
    return new Promise((resolve,reject)=>{
        inptPromise.then((result)=>{
            const newNum = +result

            if(newNum){
                return resolve(newNum ** 2)
            }
            return reject(`Cannot convert ${result} into number`)
        }).catch((err)=>{
            reject(err)
        })
    })
}

const inp1 = Promise.resolve(6)
const inp2 = Promise.resolve("16")
const inp3 = Promise.resolve("asdf")
const inp4 = Promise.reject("There is some error")

squarePromise(inp2).then((res)=>{
    console.log("Resolved:", res)
}).catch((err)=>{
    console.log("Rejected:", err)
})