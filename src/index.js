import {choice, remove} from './helpers.js';
import fruits from './fruits.js'; 

const RANDOMFRUIT = choice(fruits);
console.log(`I'd like one ${RANDOMFRUIT}, please`);
console.log(`Here you go: ${RANDOMFRUIT}`);
console.log("Delicous! May I have another?");
remove(fruits, RANDOMFRUIT);
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`)
