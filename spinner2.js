let timer = 100;
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
for (const line of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${line}   `);
  }, timer)
  timer += 200;
}