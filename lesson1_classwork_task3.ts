// *** 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

abstract class Shape{
    abstract perimeter():number;
    abstract area():number;
}

class Triangle extends Shape{
    a:number;
    b:number;
    c:number;
    constructor(a:number, b:number, c:number) {
        super();
        this.a=a;
        this.b=b;
        this.c=c;
    }


    area(): number {
        return this.a * this.b*0.5;
    }

    perimeter(): number {
        return this.a+this.b+this.c;
    }

}
class Rectangle extends Shape{
    a:number;
    b:number;
    constructor(a:number, b:number) {
        super();
        this.a=a;
        this.b=b;
    }

    area(): number {
        return this.a * this.b;
    }

    perimeter(): number {
        return (this.a+this.b)*2;
    }

}


let fig_array:Shape[]= [new Triangle(1,2,3), new Rectangle(1,2), new Triangle(3,2,1), new Rectangle(2,1)]

for (const fig of fig_array){
    console.log(fig.area())
}

