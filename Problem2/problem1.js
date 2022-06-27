function main(input) {
  const tmp = input.shift().split(" ");
  const n = parseInt(tmp.shift());
  const N = parseInt(tmp.shift());
  const aquas = input.shift().split(" ").map(x => parseInt(x));
  if (Math.max(...aquas) >= N) {
    console.log("Yes");
  } else{
    console.log("No");
  }
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