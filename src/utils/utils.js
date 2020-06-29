export default class utils {
  // Add two numbers with javascript
  static add(input1, input2) {
    // A1: any JavaScript value
    // A2: any JavaScript value
    // R: a single JavaScript value
    return input1 + input2;
  }
  // subtract two numbers with javascript
  static subtract(input1, input2) {
    // A1: any JavaScript value
    // A2: any JavaScript value
    // R: a single JavaScript value
    return input1 - input2;
  }
  // multiply two numbers with javascript
  static multiply(input1, input2) {
    // A1: any JavaScript value
    // A2: any JavaScript value
    // R: a single JavaScript value
    return input1 * input2;
  }
  // divide two numbers with javascript
  static divide(input1, input2) {
    // A1: any JavaScript value
    // A2: any JavaScript value
    // R: a single JavaScript value
    return input1 / input2;
  }
  // increment a number with javascript
  static increment(input1) {
    // increments input by 1
    input1++;
    return input1;
  }
  // decrement a number with javascript
  static decrement(input1) {
    // decrements input by 1
    input1--;
    return input1;
  }
  // concatenating strings with plus operator
  static concatenate(input1, input2) {
    //concatenates input1 and input2
    input1 = String(input1);
    input1 += input2;
    // return input1 + input2;
    return input1;
  }
  // concatenating strings with plus equals operator
  static concatenatePlusEquals(input1, input2) {
    // concatenates input1 and input2
    input1 = String(input1);
    input1 += input2;
    // return input1 + input2;
    return input1;
  }
  // concatenatig strings with variables ** not sure about this one
  static concatenateVariables(input1, input2, input3) {
    // concatenates input1 and input2
    return input1 + "" + input2 + input3;
  }
  // Find the length of a string
  static findLength(input) {
    // finds the length of a string
    return input.length;
  }
  // Use Bracket Notation to Find the First Character in a String
  static findFirstLetterOfString(input) {
    return input[0];
  }
  // Use Bracket Notation to find the nth Character in a String (remeber computers start count at 0)
  static findNthLetterOfString(input1, input2) {
    // A1: a string
    // A2: a number
    // R: the nth letter from the beginning of a string
    var nthLetter = input2;
    nthLetter--;
    var string = input1;
    const returnLetter = string[nthLetter];
    return returnLetter;
  }
  // Use Bracket Notation to Find the Last Character in a String
  static getLastLetterOfString(string) {
    return string[string.length - 1];
  }
  // Use Bracket Notation to Find the Nth-to-Last Character in a String
  static getNthToLastLetterOfString(string, n) {
    return string[string.length - n];
  }
  // Manipulate Arrays With push()
  static push(array, newItem) {
    array.push(newItem);
    console.log(array);
    return array;
  }
  // fcc example
  // var arr1 = [1,2,3];
  // arr1.push(4);
  // arr1 is now [1,2,3,4]

  // var arr2 = ["Stimpson", "J", "cat"];
  // arr2.push(["happy", "joy"]);
  // arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

  // Manipulate Arrays with Pop ()
  static pop(array) {
    // removes(pops) the last element of an array and returns what's left
    array.pop();
    return array;
  }
  // fcc example
  // var threeArr = [1, 4, 6];
  // var oneDown = threeArr.pop();
  // console.log(oneDown); // Returns 6
  // console.log(threeArr); // Returns [1, 4]

  // Manipulate Arrays with shift()
  static shift(array) {
    // removes(shifts) the first element of an array and returns what is left
    array.shift();
    return array;
  }
  //fcc example
  // var ourArray = ["Stimpson", "J", ["cat"]];
  // var removedFromOurArray = ourArray.shift();
  // // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

  // Manipulate Arrays with unshift ()
  static unshift(array, newItem) {
    array.unshift(newItem);
    return array;
  }

  // Your functions go here!
  // Counting cards
  // var count = 0; //card count set to zero(new game)
  static countingCards(card) {
    var count = 0;
    if (card <= 6) {
      //cards 2,3,4,5,6 are asigned +1 (++)
      count++;
    } else if (card <= 9) {
      //cards 7,8,9 are asigned +0 (+= 0)
      count += 0;
    } else {
      // anything above 9 will are asigned -1 (--)
      count--;
    }
    if (count <= 0) {
      return count + " Hold"; /* Return here */
    } else {
      return count + " Bet"; /* and here */
    }
  }
  // Profile Lookup with example contacts
  // var contacts = [
  //    {
  //       firstName: "Akira",
  //       lastName: "Laine",
  //       number: "0543236543",
  //       likes: ["Pizza", "Coding", "Brownie Points"],
  //    },
  //    {
  //       firstName: "Harry",
  //       lastName: "Potter",
  //       number: "0994372684",
  //       likes: ["Hogwarts", "Magic", "Hagrid"],
  //    },
  //    {
  //       firstName: "Sherlock",
  //       lastName: "Holmes",
  //       number: "0487345643",
  //       likes: ["Intriguing Cases", "Violin"],
  //    },
  //    {
  //       firstName: "Kristian",
  //       lastName: "Vos",
  //       number: "unknown",
  //       likes: ["JavaScript", "Gaming", "Foxes"],
  //    },
  // ];

  static lookUpProfile(name, prop) {
    const contacts = [];
    for (var x = 0; x < contacts.length; x++) {
      let contacts = [
        {
          firstName: "Akira",
          lastName: "Laine",
          number: "0543236543",
          likes: ["Pizza", "Coding", "Brownie Points"],
        },
        {
          firstName: "Harry",
          lastName: "Potter",
          number: "0994372684",
          likes: ["Hogwarts", "Magic", "Hagrid"],
        },
        {
          firstName: "Sherlock",
          lastName: "Holmes",
          number: "0487345643",
          likes: ["Intriguing Cases", "Violin"],
        },
        {
          firstName: "Kristian",
          lastName: "Vos",
          number: "unknown",
          likes: ["JavaScript", "Gaming", "Foxes"],
        },
      ];
      //The for loop runs, starting at the first object in the contacts list.
      if (contacts[x].firstName === name) {
        //If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes.
        if (contacts[x].hasOwnProperty(prop)) {
          //Then, we use .hasOwnProperty() method (checks if there’s a given property and returns a boolean) with prop as an argument. If it’s true, the value of prop is returned.
          return contacts[x][prop];
        } else {
          return "No such property"; //If the second if statement fails, No such property is returned
        }
      }
    }
    return "No such contact"; //If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned.
  }

  // Generate a random whole number with Javascript
  static randomWholeNum() {
    return Math.floor(Math.random() * 10);
  }

  //console.log would show 0
  // Math.floor is used to round the number down to its nearest whole number
  // Math.random gives you a random decimal between 0-1

  // Generate Random Whole Numbers within a range
  static randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
  /* Code Explanation
Math.random() generates our random number between 0 and ≈ 0.9.
Before multiplying it, it resolves the part between parenthesis (myMax - myMin + 1) because of the grouping operator ( ).
The result of that multiplication is followed by adding myMin and then “rounded” to the largest integer less than or equal to it (eg: 9.9 would result in 9)
If the values were myMin = 1, myMax= 10, one result could be the following:

Math.random() = 0.8244326990411024
(myMax - myMin + 1) = 10 - 1 + 1 -> 10
a * b = 8.244326990411024
c + myMin = 9.244326990411024
Math.floor(9.244326990411024) = 9 */

  //Remove items using splice()
  // any number of consecutive elements can be removed
  static removeSplice(anArray) {
    anArray.splice(0, 1);
    anArray.splice(-1, 1);
    return anArray;
  }
  // Add items using splice()
  // add new elements
  static addItemSplice(array, start, end, addOn) {
    //  elements in start to end range will be removed and replaced with addOn
    array.splice(start, end, addOn);
    console.log(array);
    return array;
  }

  //Check For The Presence of an Element With indexOf()
  static checking(theArray, searchArray) {
    if (theArray.indexOf(searchArray) !== -1) {
      return "It's in there";
    } else return "Not in here";
  }

  //Use typeof to Check the Type of a Variable
  static findTheType(someVar) {
    return typeof someVar;
  }

  static popularRapMusic(userInput) {
    // Map function
    /* The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order. Note: map() does not execute the function for array elements without values. */
    let musicArtists = [
      {
        artist: "Juice WRLD",
        album: "Death Race for Love",
        genre: "Hip-Hop",
      },
      {
        artist: "Drake",
        album: "Nothing Was The Same",
        genre: "Hip-hop",
      },
      {
        artist: "The Weeknd",
        album: "After Hours",
        genre: "R&B/Soul",
      },
    ];
    // if (userInput === "artist") {
    //    const music = albumMasterPiece.map((musicObj) => musicObj.artist);
    //    return music;
    // } else if (userInput === "genre") {
    //    const music = albumMasterPiece.map((musicObj) => musicObj.genre);
    //    return music;
    // } else if (userInput === "album") {
    //    const music = albumMasterPiece.map((musicObj) => musicObj.album);
    //    return music;
    // }
    const music = musicArtists.map((musicObj) => musicObj[userInput]);
    return music;
  }

  // Filter function

  /* The filter() method returns an array containing elements of the parent array that match the set test. A function containing a test is passed as an argument to the filter method. To keep an element the test function should return true and false to discard an element. */
  static filterMethod() {
    const words = [
      "spray",
      "limit",
      "elite",
      "exuberant",
      "destruction",
      "present",
    ];

    return words.filter((word) => word.length > 6);
  }

  // Concat Method

  static concatArr(input1) {
    // input1 = array of input1 will be added to original array numberArray
    /* The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array(nonMutated) to where push() adds an item to the end of the same array it is called on, which mutates that array. */

    let numberArray = [1, 2, 3, 4];

    let newNumberArray = numberArray.concat([input1]);
    return newNumberArray;
  }

  // Split method

  static splitArr(input1) {
    // input1 = any value
    // Split a string into an array of substrings
    // this function is set up to split at the character space(" ")
    /* If an empty string ("") is used as the separator, the string is 
    split between each character */
    let str = [input1.split(" ")];
    // will split at each space (" ")
    return str;
  }

  // Join method

  static joinSSN(input1) {
    // A1: takes in what the user is inputing
    // R: 9 numbers for a social security. it includes a -
    console.log(input1);
    let ssn1 = String(input1); //turns numbers into string so we can modify it
    let ssn = ssn1.split(""); //turns string into set of sub strings
    ssn.splice(3, 0, "-"); // puts '-' at the 3rd index
    ssn.splice(
      6,
      0,
      "-"
    ); /* puts '-' at the 6th index, keep in mind first '-' is now being accounted for */
    let final = ssn.join(""); // joins an empty string
    return final;
  }

  // every method
  /*The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.*/

  static everyPositive(input1) {
    /*user creates an array of neg and positive number */
    return input1.every((val) => val > 0);
  }

  // some method
  /*The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.*/

  static someMethod(input1) {
    return input1.some((val) => val < 10);
  }

  // includes method
  /* The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.*/

  static includesMethod(input1) {
    const pizzaToppings = [
      "Pepperoni",
      "Pineapple",
      "Sausage",
      "Spinach",
      "Olive",
      "Bacon",
      "Mushrooms",
    ];
    return pizzaToppings.includes(input1);
  }
}
