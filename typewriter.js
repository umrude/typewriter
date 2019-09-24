const sentence = "hello there from lighthouse labs";

let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, i);
  i += 75;
}

const print = function() {
  console.log(" ");
};

let totalTime = 75 * sentence.length;
setTimeout(print, totalTime);