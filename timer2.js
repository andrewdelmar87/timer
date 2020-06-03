const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === "b") {
    process.stdout.write('\x07');
  } else if (key >= 1 || key <= 9) {
    console.log(`Setting timer for ${key} seconds...`)
    const delay = key * 1000
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay)
  }
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit(); 
  }
});