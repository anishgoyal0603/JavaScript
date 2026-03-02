const coding = ["js", "ruby", "java","python","cpp"];
coding.forEach( function (item) {
    console.log(item);                    // callback function doesn't have a name
} )

coding.forEach((item) => {
      console.log(item);
      
})
