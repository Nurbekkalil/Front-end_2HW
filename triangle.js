// 1.2) Задача "Треугольник в цикле": Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
// *
// **
// ***
// **** и так далее


let stars = ' '
const Triangle = () => {
    for(let i = 0; i < 7; i++){
        stars += '*'
        console.log(stars)
    }
}
Triangle()




// let stars = ' '
// const triangle = () => {
//     for(let i = 0; i < 7; i++){
//         stars += '*'
//         console.log(stars)
//     }
// }
// triangle()







// 1) Задача "Треугольник в цикле": Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
// *
// **
// ***
// **** и так далее


// let triangle = ''
// for (let i = 0; i < 7; i++) {
//   triangle += '*'
//   console.log(triangle)
// }