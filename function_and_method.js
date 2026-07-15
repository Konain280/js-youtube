const student = {
    name: "",
    marks: 0,

    setData: function (name, marks) {
        this.name = name;
        this.marks = marks;
    },

    showData: function () {
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    },

    checkResult: function () {
        if (this.marks >= 50) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }
    }
};

let name = "konain";
let marks = 394;

student.setData(name, marks);
student.showData();
student.checkResult();