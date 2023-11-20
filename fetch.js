let arr = [];

let fetchData = fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json()
).then((result)=>{
    result.map((val)=>{
        arr.push(val)
    })
    console.log(arr)
})

const randomTimeOut = function(){
    return new Promise((resolve)=>{
        const random = Math.floor(Math.random() * (1000 - 500 + 1) + 500)
        setTimeout(()=>{
            resolve(fetchData())
        },random)
    })
}

console.log("loading")

randomTimeOut().then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log("Error",error.message)
})