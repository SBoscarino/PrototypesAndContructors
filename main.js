//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, color, hungry) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
const sadie = new Dog('Sadie', 'normal', 'black', false);


const moonshine = new Dog('Moonshine', 'normal', 'whatever', true);

const atticus = new Dog('Atticus','normal', 'whatever', false);

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name;
  this.cool = cool;
}

//pet function
Human.prototype.feed = function(dog) {
  if(dog.hungry === true ) {
    dog.hungry = false;
  } else if (dog.hungry === false) {
    dog.hungry = true;
  }
}

Human.prototype.pet = function(dog) {
  dog.status = 'happy';
}

const julia = new Human ('Julia', true);
const mason = new Human('Mason', false);

// Instances of Human
// Needed: mason, julia
