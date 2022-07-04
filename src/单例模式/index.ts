
/**
 * 实现方法一：写在构造函数里
 */
class SingleDog1 {
  static instance: SingleDog1;
  
  static getInstance() {
    if (!SingleDog1.instance) {
      SingleDog1.instance = new SingleDog1();
    }
    return SingleDog1.instance;
  }
}

/**
 * 实现方法二：构造函数
 */
class SingleDog2 {
  static instance: SingleDog2;

  constructor() {
    if (!SingleDog2.instance) {
      SingleDog2.instance = this;
    }

    return SingleDog2.instance;
  }
}

/**
 * 实现方法三：闭包
 */
 class SingleDog3 {
  static getInstance: () => SingleDog3;
}

SingleDog3.getInstance = (() => {
  let instance: SingleDog3;

  return () => {
    if (!instance) {
      instance = new SingleDog3();
    }
  
    return instance;
  }
})()

// 验证单例
const obj1 = new SingleDog2();
const obj2 = new SingleDog2();
console.log(obj1 === obj2);