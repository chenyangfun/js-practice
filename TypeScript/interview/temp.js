// "use strict";
// // 发布者抽象类
// class Subject {
//     constructor() {
//         this.observers = [];
//     }
//     // 添加订阅者
//     attach(observer) {
//         this.observers.push(observer);
//     }
//     // 移除订阅者
//     dettach(observer) {
//         for (let i in this.observers) {
//             if (this.observers[i] === observer) {
//                 this.observers.splice(parseInt(i), 1);
//             }
//         }
//     }
//     // 发送消息给所有订阅者
//     notify() {
//         for (let i in this.observers) {
//             this.observers[i].update(this);
//         }
//     }
// }
// // 发布者具体实现
// class ConcreteSubject extends Subject {
//     constructor() {
//         super();
//         this.subjectState = null;
//     }
//     getState() {
//         return this.subjectState;
//     }
//     setState(state) {
//         this.subjectState = state;
//         this.notify();
//     }
// }
// // 订阅者抽象类
// class Observer {
//     constructor() { }
// }
// // 订阅者具体实现
// class ConcreteObserver extends Observer {
//     constructor() {
//         super();
//         this.observerState = '';
//     }
//     // 订阅者获取最新消息
//     update(Subject) {
//         this.observerState = Subject.getState();
//         console.log('获取到新的消息: ' + this.observerState);
//     }
// }
// var observer1 = new ConcreteObserver(); // 订阅者1
// var observer2 = new ConcreteObserver(); // 订阅者2
// var subject = new ConcreteSubject(); // 发布者
// subject.attach(observer1); // 添加订阅者1
// subject.attach(observer2); // 添加订阅者2
// subject.setState('hello');
selfName = 'upper';
let ob1j = {
    selfName: 'lower',
    say: () => {
        console.log('selfName: ' + this.selfName);
    }
};

ob1j.say();