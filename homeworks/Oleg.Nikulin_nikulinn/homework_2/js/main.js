(function () {
  // 1-st create empty array

    var newArray = [],
        newData = [2, 12, 22, 6, 32],
        oldData = [12, 5, 7, 17, 22, 32];
        arrayToFind = [3, 6, 0, -6, 12];

    console.log("Create empty array :");
    console.log(newArray);

  // 2-d add 100 intager to array with mathod random

    function createArray() {
        newArray = new Array(100);
        for (i=0; i<100; ++i) {
            newArray[i] = Math.round(Math.random()*100);
        }
        return newArray;
    };

    createArray();
    console.log("Array with intager :");
    console.log(newArray);

  // 3-d search min and max value in array

    function findMinMax(arr, str) {
        var order = arr.sort(function(a, b){
            return a - b;
        });
        if (str == 'min') {
            return order[0];
        }
        else if (str == 'max') {
            return order[order.length - 1];
        }
    }

    var resultMax = findMinMax(arrayToFind, 'max');
    var resultMin = findMinMax(arrayToFind, 'min');

    console.log("Max value from array : " + resultMax);
    console.log("Min value from array : " + resultMin);

  // 4-th convert array to object

    function arrayToObject(newArray) {
        var obj = {};
        for (var i = 0; i < newArray.length; i++) {
            if (i <= 25) {
                obj[String.fromCharCode(i + 97)] = newArray[i];
            } else {
                var numb = i - 25;
                obj[numb] = newArray[i];
            }
        }
        return obj;
    };

    console.log("Converted object from array :");
    console.log(arrayToObject(newArray));

  // 5-th make filter

    function filterNew(arr1,arr2) {
        for (var i = 0; i < oldData.length; i++) {
            for (var j = newData.length - 1; j !== 0 ; j--) {
                if (newData[j] == oldData[i]) {
                    newData.splice(j,1);
                }
            }
        }
    };

   filterNew(newData, oldData);

   console.log("New filtered array : " + newData);

})();
