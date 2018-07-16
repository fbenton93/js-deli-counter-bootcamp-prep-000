function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${line.shift()}.`
  }
  
  
}

function currentLine(line) {
  var output = [];
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < line.length; i++) {
      output += (i+1) + ". " + line[i] + ", "
    }
    return `The line is currently: ${output.slice(0,-2)}`
  }
}