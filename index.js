let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

  function describeItem(name, count, whatILike) {
    console.log(`I have ${count}. ${name}. Here's what I like about them: ${whatILike}`)
  }

  describeItem(myCollection[0].name, myCollection[0].count, myCollection[0].whatILike)


  function describeCollection(name) {
    let copyItems = []
    name.forEach(describeItem(name)); {
     copyItems.push(item)
    console.log(copyItems)
  }
}

//   const items = ['item1', 'item2', 'item3']
// const copyItems = []

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i])
// }

// // after

// })
  // 2d. Now make a function called describeCollection that takes in an array as a parameter. The function should loop through the array, 
  // and for each item, it should call the describeItem function so it displays a message according to how many you have in your collection.

  // Call your function below where you've defined it, handing in the myCollection array.
  
  // Run the file again to see the output and check that it outputs the correct message 
  // for each item in your collection (i.e. each object in your myCollection array).