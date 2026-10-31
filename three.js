// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item 
// })

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// yai case ma scope vitra used garee par return value used garna parxa..

// const newNums = myNums.filter( (num) => {
//   return num>4
// })

// const newNums = []

// // myNums.forEach( (num) => {
// //        if (num > 4) {
// //         newNums.push(num)
// //        }
// // })   yo auta ho mathi filter raa yo..

// console.log(newNums);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1982,
//     edition: 2005},
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1989,
//     edition: 2006},
//     { title: 'Book Three', genre: 'History', publish: 1988,
//     edition: 2008},
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1987,
//     edition: 2009},
//     { title: 'Book Five', genre: 'Fiction', publish: 2081,
//     edition: 2011},
//     { title: 'Book Six', genre: 'Science', publish: 1999,
//     edition: 2013},
//     { title: 'Book Seven', genre: 'Fiction', publish: 1997,
//     edition: 2018},
//     { title: 'Book Eight', genre: 'Non-Fiction', publish: 1995,
//     edition: 2019},
// ];

// // const userbooks = books.filter( (bk) => bk.genre === "Fiction")
// const userbooks = books.filter( (bk) => { 
//     return bk.publish >= 1990 && bk.genre === "Fiction"
// })

// console.log(userbooks);



// const myNumers = [1, 2, 4, 5, 6, 7, 8]

// const newNums = myNumers.map( (num) => num + 10)

// console.log(newNums);


// yai lai for each bataa gare ko

//  const newNums = []
//   myNumers.forEach( (num) =>  newNums.push (num + 20))
//  console.log(newNums);

// const myNumers = [1, 2, 4, 5, 6, 7, 8]

// const newNums = myNumers
//                 .map( (num) => num * 10)
//                 .map( (num) => num + 1)
//                 .filter( (num) => num>= 40)

// console.log(newNums);




// const Mynums = [1, 2, 3]

// // const myTotal = Mynums.reduce( function (acc, curval) {
// //     console.log(`acc: ${acc} and curval: ${curva}`);
// //     return acc + curval 
// // }, 0)


// const myTotal = Mynums.reduce( (acc, curr) => acc + curr, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "Data Science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);





