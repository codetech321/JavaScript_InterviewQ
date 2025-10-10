/*  SHALLOW COPY AND DEEP COPY ON ARRAY AND OBJECTS */
let arr = [10, 20, 30]
let copyArr = arr
copyArr[0] = 5
console.log(copyArr) //[ 5, 20, 30 ]
console.log(arr) // 5, 20, 30 ]

let arr1 = [10, 20, 30]
let copyArr1 = [...arr1] //spredd operator
copyArr1[0] = 5
console.log(copyArr1) //[ 5, 20, 30 ]
console.log(arr1) //[ 10, 20, 30 ]

/* Shallow Copy */
let arr2 = [10, 20, [30, 40], 50]
let copyArr2 = [...arr2] //spredd operator
copyArr2[2][0] = 5
console.log(copyArr2) //[ 10, 20, [ 30, 40 ], 50 ]
console.log(arr2) //[ 10, 20, [ 30, 40 ], 50 ]

/* DEEP COPY */
let arr3 = [10, 20, [30, 40], 50]
let copyArr3 = JSON.parse(JSON.stringify(arr3))
copyArr3[2][0] = 5
console.log(copyArr3) //[ 10, 20, [ 5, 40 ], 50 ]
console.log(arr3) //[ 10, 20, [ 30, 40 ], 50 ]

/* ----------------------------------------------------------- */
let obj = {
  name: 'Chandu',
  age: 20,
}
let copyObj = obj
copyObj.name = 'Rishi'
console.log(copyObj) //{ name: 'Rishi', age: 20 }
console.log(obj) //{ name: 'Rishi', age: 20 }

let obj1 = {
  name: 'Chandu',
  age: 20,
}
let copyObj1 = { ...obj1 }
copyObj1.name = 'Rishi'
console.log(copyObj1) //{ name: 'Rishi', age: 20 }
console.log(obj1) //{ name: 'Chandu', age: 20 }

/* Shallow Copy */
let obj2 = {
  name: 'Chandu',
  age: 20,
  address: {
    city: 'Bhairahawa',
  },
}
let copyObj2 = { ...obj2 }
copyObj2.address.city = 'Kathmandu'
console.log(copyObj2) //{ name: 'Chandu', age: 20, address: { city: 'Kathmandu' } }
console.log(obj2) //{ name: 'Chandu', age: 20, address: { city: 'Kathmandu' } }

/* DEEP COPY */
let obj3 = {
  name: 'Chandu',
  age: 20,
  address: {
    city: 'Bhairahawa',
  },
}
let copyObj3 = JSON.parse(JSON.stringify(obj3))
copyObj3.address.city = 'Kathmandu'
console.log(copyObj3) //{ name: 'Chandu', age: 20, address: { city: 'Kathmandu' } }
console.log(obj3) //{ name: 'Chandu', age: 20, address: { city: 'Bhairahawa' } }

/*-------------------------------------------------------------------------------------*/
