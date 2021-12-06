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

  describeItem(myCollection.name, myCollection.count, myCollection.whatILike)