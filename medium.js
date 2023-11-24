import { primeTime } from "./medium/primeTime.js";
//console.log(primeTime(65521));
for (let i = 2; i <= Math.pow(2, 16); i++) {
    if (primeTime(i)) {
        console.log(i);
    }
}
