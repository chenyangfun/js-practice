// 发布者抽象类
abstract class Subject {
    observers: Observer[];
    constructor() {
        this.observers = [];
    }
    // 添加订阅者
    attach(observer: Observer) {
        this.observers.push(observer);
    }
    // 移除订阅者
    dettach(observer: Observer) {
        for (let i in this.observers) {
            if (this.observers[i] === observer) {
                this.observers.splice(parseInt(i), 1);
            }
        }
    }
    // 发送消息给所有订阅者
    notify() {
        for (let i in this.observers) {
            this.observers[i].update(this);
        }
    }

    // 获取到新的消息
    abstract getState(): string | null;
    // 设置发布者消息
    abstract setState(state: any): void;
}
// 发布者具体实现
class ConcreteSubject extends Subject {
    subjectState: null | string;
    constructor() {
        super();
        this.subjectState = null;
    }

    getState() {
        return this.subjectState;
    }

    setState(state: string) {
        this.subjectState = state;
        this.notify();
    }
}
// 订阅者抽象类
abstract class Observer {
    constructor() {}

    abstract update(Subject: Subject): void;
}

// 订阅者具体实现
class ConcreteObserver extends Observer {
    observerState: string | null;
    constructor() {
        super();
        this.observerState = '';
    }

    // 订阅者获取最新消息
    update(Subject: Subject) {
        this.observerState = Subject.getState();
        console.log('获取到新的消息: ' + this.observerState);
    }
}
var observer1 = new ConcreteObserver(); // 订阅者1
var observer2 = new ConcreteObserver(); // 订阅者2
var subject = new ConcreteSubject(); // 发布者
subject.attach(observer1); // 添加订阅者1
subject.attach(observer2); // 添加订阅者2
subject.setState('hello');

interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };
