function outer(){
    let count = 0
    return function inner(){
        count++
        console.log(count)
    }
}

let o = outer()
o() // 1
o() //2