let CheckObject = function() {
    CheckObject.prototype.checkName = () => {
        console.log("checkName");
        return this;
    };
    CheckObject.prototype.checkPassword = () => {
        console.log("checkPassword");
        return this;
    };
    CheckObject.prototype.addMethod = (name, fn) => {
        console.log(this);
        console.log(this.prototype);

        this[name] = fn;
        return this;
    };

    CheckObject.prototype.addMethods = (name, fn) => {
        this[name] = fn;
        return this;
    };
};

let a = new CheckObject();

a.addMethods("checkEmail", () => {
    console.log("checkEmail");
    return this;
});

a.checkEmail();
