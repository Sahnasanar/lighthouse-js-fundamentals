var calculateRectangleArea = function(length,width) {
  var num = length * width;
    if (num > -1){
      return num;
    }
    else {
      return undefined;
    }
  }
    console.log(calculateRectangleArea(10, 5)); 
    console.log(calculateRectangleArea(1.5, 2.5));
    console.log(calculateRectangleArea(10, -5));