const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// function totalBatteries(batteryBatches, init) {
//     let totalBatteries = batteryBatches.reduce( batteryCount => batteryCount + init )
//     console.log(totalBatteries, 0)
// }

// const totalBatteries = (batteries, init) => batteries + init
// console.log(batteryBatches.reduce(totalBatteries, 0))

// function batteryTotal(batteries, init) {
//     let totalBatteries = batteryBatches.reduce( battery => battery + init )
//     return totalBatteries
// }

const totalBatteries = batteryBatches.reduce((battery, init) => {return battery + init }, 0 )
