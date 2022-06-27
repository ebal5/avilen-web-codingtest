function main(input) {
  input.shift();
  for (let line of input) {
    const arr = line.split(" ").map(x => parseInt(x));
    if (arr.length != 3) break;
    console.log(test(arr[0], arr[1], arr[2]));
  }
}

function test(_a, _b, _c) {
  if (valid(_a, _b, _c)) return 0;
  const queue = [];
  const max = Math.max(_a, _b, _c);
  const _second = second(_a, _b, _c);
  if(max - _second > 2) {
    const level = max - (_second + 1);
    if (max === _a) {
      queue.push([_a - level, _b, _c, level]);
    } else if (max === _b) {
      if (_a == _c) {
        if (_a >= 2) return 1;
      } else {
        queue.push([_a, _b - level, _c, level]);
      }
    } else {
      queue.push([_a, _b, _c - level, level]);
    }
  } else {
    if (_a - 1 > 0) queue.push([_a - 1, _b, _c, 1]);
    if (_b - 1 > 0) queue.push([_a, _b - 1, _c, 1]);
    if (_c - 1 > 0) queue.push([_a, _b, _c - 1, 1]);
  }
  while (queue.length != 0) {
    const [a, b, c, level] = queue.shift();
    if (valid(a, b, c)) {
      return level;
    }
    if (a - 1 > 0) {
      queue.push([a - 1, b, c, level + 1]);
    }
    if (b - 1 > 0) {
      queue.push([a, b - 1, c, level + 1]);
    }
    if (c - 1 > 0) {
      queue.push([a, b, c - 1, level + 1]);
    }
  }
  return -1;
}

function valid(a, b, c) {
  if (a === b || a === c || b === c) return false;
  return [a, c].includes(second(a, b, c));
}

function second(...arr) {
  const sorted = arr.sort((x, y) => x - y).reverse();
  return sorted[1];
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