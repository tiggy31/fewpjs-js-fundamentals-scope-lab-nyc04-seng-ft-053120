let animal = "dog"

function myAnimal() {
  return animal
}

function yourAnimal() {
  let animal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  let  two = 2
  return n + two

  // Feel free to move things around!

}