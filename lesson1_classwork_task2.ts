// 2)написать интерфейс Animal который описывает:
//     -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг
// -и функцию которая возвращает информацию о животном
//
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию

interface Animal{
    move:string;
    say:string;

    animal_info():string;
}

class Cat implements Animal{
    move: string;
    say: string;

    animal_info(): string {
        return `Cat move ${this.move} and say ${this.say}`
    }

}

class Bird implements Animal{
    move: string;
    say: string;

    animal_info(): string {
        return `Bird move ${this.move} and say ${this.say}`
    }

}

class Fish implements Animal{
    move: string;
    say: string;

    animal_info(): string {
        return `Fish move ${this.move} and say ${this.say}`
    }
}
