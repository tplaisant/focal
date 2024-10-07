const names = ["Alice", "Bob", "Waldo", "Winston"];

const findWaldo = function(names, cb) {
  names.forEach((element, index) => {  
    if (element === "Waldo") {
      cb(index); // execute callback
    }
  });
};

findWaldo(names, function (index) { // Calling anonismously instead of creating another function named 'actionWhenFound'
  console.log(`Found Waldo at index ${index}`)
});