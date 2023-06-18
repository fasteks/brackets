module.exports = function check(str, bracketsConfig) {
  let openBrackets = bracketsConfig.reduce((acc, rec) => [...acc, rec[0]], [])

  const bracketsPair = bracketsConfig.reduce((acc, rec) => {
    if (openBrackets.includes(rec[0])) {
      return { ...acc, [rec[0]]: rec[1] }
    }
    return acc
  }, {})

  let stack = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === bracketsPair[str[i]] && stack.at(-1) === str[i]) {
      stack.pop()
    } else if (openBrackets.includes(str[i])) {
      stack.push(str[i])
    }
    else if (str[i] === bracketsPair[stack.at(-1)]) {
      stack.pop()
    }
    else {
      return false
    }
  }
  return stack.length === 0
}