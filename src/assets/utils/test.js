// 抽象工厂 父类
class Stationery {
    constructor() {
        if (new.target == Stationery) {
            throw new Error("不允许实例化一个抽象类");
        }
    }
    useFor() {
        return "好好学习，天天向上";
    }
}

class Pen extends Stationery {
    constructor() {
        super();
        this.type = "pen";
    }
    introduce() {
        console.log(this.type);
    }
}

class Earser extends Stationery {
    constructor() {
        super();
        this.type = "Earser";
    }
    introduce() {
        console.log(this.type);
    }
}
