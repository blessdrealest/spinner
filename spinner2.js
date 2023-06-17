process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerSigns = ['|', '/', '-', '\\', '|'];
const delayTimes = [100, 300, 500, 700, 1000];

for (let i = 0; i < spinnerSigns.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerSigns[i]} `);

    if (i === spinnerSigns.length - 1) {
      console.log('\n');
    }
  }, delayTimes[i]);
  }
