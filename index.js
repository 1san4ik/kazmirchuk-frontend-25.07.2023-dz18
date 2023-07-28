{
  const arr = ['1', 34, { name: 'Alex' }, 56, true, 'array', '25', 76, null, [1, '2'], 34,]
  function arithmeticMean(arr) {
    let sum = 0
    let numberOfNumbers = 0
    arr.forEach((array, index) => {
      if (typeof arr[index] === 'number') {
        sum += array
        numberOfNumbers++
      }
    })
    if (sum === 0) {
      return 0
    } else {
      return sum / numberOfNumbers
    }
  }
  const arithMean = arithmeticMean(arr)
  console.log(
    `Середнє арифметичне лише числових елементів даного масиву: ${arithMean}`
  )
}
// ===========================================================================================
{
  const x = Number(prompt('Введіть перше число: '))
  const znak = prompt('Введіть арифметичну дію (+, -, *, /, %, ^): ')
  const y = Number(prompt('Введіть друге число: '))
  function doMath(x, znak, y) {
    if (znak === '+') {
      return x + y
    } else if (znak === '-') {
      return x - y
    } else if (znak === '*') {
      return x * y
    } else if (znak === '/') {
      if (y === 0) {
        return 'На нуль ділити не можна'
      } else {
        return x / y
      }
    } else if (znak === '%') {
      if (y === 0) {
        return 'На нуль ділити не можна'
      } else {
        return x % y
      }
    } else if (znak === '^') {
      return x ** y
    }
  }
  const rezult = doMath(x, znak, y)
  console.log(`Результат операції: ${rezult}`)
}
// ===========================================================================================
{
  function arrayOfArrays(lengthFirstArray, lengthInternalArray) {
    const mas1 = []
    for (let i = 1; i <= lengthFirstArray; i++) {
      const mas2 = []
      for (let j = 1; j <= lengthInternalArray; j++) {
        const value = prompt(`Введіть ${j}-й елемент ${i}-го масиву:`)
        mas2.push(value)
      }
      mas1.push(mas2)
    }
    return mas1
  }
  const lengthFirstArray = Number(prompt('Введіть довжину масиву: '))
  const lengthInternalArray = Number(
    prompt('Введіть кількість масивів в основному масиві: ')
  )
  const resultArray = arrayOfArrays(lengthFirstArray, lengthInternalArray)
  console.log(resultArray)
}
// ===========================================================================================
{
  function userDelete(stringUser, simbolDeleteUser) {
    const strUser = stringUser.split('')
    const mass1 = strUser.filter((xxx) => !simbolDeleteUser.includes(xxx))
    return mass1.join('')
  }

  const stringUser1 = 'werghrjyujtyjr'
  let simbolDeleteUser = ['j', 'w', 'r']

  const result = userDelete(stringUser1, simbolDeleteUser)
  console.log(result)
}
