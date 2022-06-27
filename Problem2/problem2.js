function main(input) {
  input.shift();
  for (let line of input) {
    const arr = line.split(" ").map(x => parseInt(x));
    if (arr.length != 3) break;
    console.log(test(arr[0], arr[1], arr[2]));
  }
}

function test(a, b, c) {
  const result = recur(a, b, c, 0);
  if (isFinite(result)) {
    return result;
  } else {
    return -1;
  }
}

function recur(a, b, c, level) {
  if (Math.min(a, b, c) == 0) return Infinity;
  if (valid(a, b, c)) return level;
  return Math.min(
    recur(a-1, b, c, level + 1),
    recur(a, b - 1, c, level + 1),
    recur(a, b, c - 1, level + 1),
  );
}

function valid(a, b, c) {
  if (a === b || a === c || b === c) return false;
  return [a, c].includes(second(a, b, c));
}

function second(...arr) {
  arr.sort();
  return arr[1];
}

var input = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  input = input.split('\n');
  main(input);
});