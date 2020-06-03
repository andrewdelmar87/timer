const alarms = process.argv.slice(2); //arr of nums

const timer = function(array) {
  for(const time of array){
    if (time >= 0) {
    const delay = time * 1000; //convert seconds to ms
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
   } 
  }
};

timer(alarms);