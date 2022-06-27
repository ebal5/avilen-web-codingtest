function main(input) {
  input.shift();
  for (let line of input) {
    const arr = line.split(" ").map(x => parseInt(x));
    if (arr.length != 3) break;
    console.log(test(arr[0], arr[1], arr[2]));
  }
}

function test(_a, _b, _c) {
  const queue = [[_a, _b, _c, 0]];
  while (queue.length != 0) {
    const [a, b, c, level] = queue.shift();
    if (valid(a, b, c)) return level;
    if (a - 1 > 0) {
      queue.push([a-1, b, c, level + 1]);
    }
    if (b - 1 > 0) {
      queue.push([a, b-1, c, level + 1]);
    }
    if ( c - 1 > 0) {
      queue.push([a, b, c-1, level + 1]);
    }
  }
  return -1;
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