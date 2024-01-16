import { Button } from "./components/Button";
import "./styles/index.css"

const a: number = 1;
const b: string = "2";

console.log(a + b);

// 箭头函数
[1, 2, 3].map((n) => n + 1);
// 我们需要 babel 进行转换

// 类
class Person {
  name: string;

  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
// 我们也借助 babel 进行转化

console.log(new Person("烟火").sayHi());

console.log(Button.name);
