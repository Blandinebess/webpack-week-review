import "../styles/main.css";
import { add } from "./utils/math.js";
import { fancyHello } from "./utils/modern.js";

console.log("2 + 3 =", add(2, 3));
console.log(fancyHello({ name: "Lewis!" }));
