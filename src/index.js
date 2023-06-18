module.exports = function check(str, bracketsConfig) {
// function check(str, bracketsConfig) {
  // console.log('str', str)
  // console.log('bracketsConfig', bracketsConfig)
  let openBrackets = []
  // if (bracketsConfig.length === 2) {
  // openBrackets = [bracketsConfig[0]]
  // } else {
  openBrackets = bracketsConfig.reduce((acc, rec) => [...acc, rec[0]], [])
  // }
  // console.log('openBrackets', openBrackets)

  const bracketsPair = bracketsConfig.reduce((acc, rec) => {
    // console.log('rec', rec)
    if (openBrackets.includes(rec[0])) {
      // console.log('rec[index + 1]', rec[1])
      return { ...acc, [rec[0]]: rec[1] }
    }
    return acc
  }, {})
  // console.log('bracketsPair', bracketsPair)

  let stack = []
  for (let i = 0; i < str.length; i++) {
    // console.log('str[i]', str[i])
    if (str[i] === bracketsPair[str[i]] && stack.at(-1) === str[i]) {
      // console.log('bracketsPair[str[i]]', bracketsPair[str[i]])
      stack.pop()
    } else if (openBrackets.includes(str[i])) {
      // console.log('push')
      stack.push(str[i])
    }
    else if (str[i] === bracketsPair[stack.at(-1)]) {
      // console.log('pop')
      stack.pop()
    }
    else {
      return false
    }
    // console.log('stack', stack)
  }
  return stack.length === 0
  // return stack
}

// console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]))
// console.log(')()')