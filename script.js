/**1. Задача: проектуємо бібліотеку. 

Написати клас для об’єкта Книга (Book) з такими властивостями:
унікальний ідентифікатор (id)
автор
назва
рік написання
кількість сторінок
Книга може розташовуватись на полиці або бути виданою на руки користувача. Відповідно, потрібно додати дві властивості - номер полиці та id юзера. Якщо книгу хтось читає - у властивості “номер полиці” має бути null, а id юзера має відповідати тому юзеру, який її читає. Якщо ж книга вакантна і її можна арендувати (взяти почитати), то вона має ціле число у властивості “номер полиці” і null в графі id юзера.

Передбачити два методи екземпляра книги: 
метод isVacant(), який повертає true, якщо книга стоїть на полиці і її можна взяти
метод getRent(id), який приймає id юзера і “видає” книгу на руки - встановлює номер полиці в null і id юзера рівним тому, що переданий в аргументи методу

Додатково написати клас для створення об’єктів юзера. Юзер має наступні властивості:
id
ім’я
прізвище
адреса проживання*/

// class Book {
//     constructor(id, autor, year, pages, booksshelf) {
//         this.id = id;
//         this.autor = autor;
//         this.year = year;
//         this.pages = pages;
//         this.booksshelf = booksshelf;
//         this.userId = null;
//     }
//     isVacant() {
//         console.log(this.booksshelf);
//         return this.booksshelf!==null
//     }
//     isRent(userId) {
//         if (this.isVacant()) {
//         return this.booksshelf = null, this.userId = userId;
//     } else {
//         return `This book is owned by user ${this.userId}`
//     }
        
// }
// }

// class Users {
//     constructor(userId, firstName, lastName, address) {
//         this.userId = userId;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.address = address;
//     }
// }

// const goldenBug = new Book(1, 'Po', 1900, 25, 75138);
// const user1 = new Users(200001, 'Kostia', 'Melnyk', '911 Jubelee');
// const user2 = new Users(200002, "Petro", "Petrenko", "1100 Portage");
// console.log(goldenBug);
// console.log(user1);
// console.log(goldenBug.isVacant());
// console.log(goldenBug.isRent(200001));
// console.log(goldenBug);
// console.log(goldenBug.isRent(200002));

/*2. Створити клас для опису абстрактної тварини і два класи для тварин Тигр та Вовк, які його розширюють. Батьківський клас має реалізувати методи hunting та growl (робота методів - вивести в консоль рядок типу “зараз дожену здобич” та “грррррр”), а тигр та вовк мають реалізувати однойменні методи по-своєму (наприклад, виводити “тигр з’їсть тебе”). Створити декілька екземплярів класу Тигр і Вовк і перевірити, чий метод викликається - класу-дитини або абстрактного батьківського класу
 * 
 */

class Animals {
    constructor(name) {
        this.name = name;
    }
    hunting() {
        console.log("зараз дожену здобич");
    }
    growl() {
        console.log("грррррр");
    }
}

class Tiger extends Animals{
    constructor(name) {
        super(name)
    }
    hunting() {
        console.log("тигр з’їсть тебе");
    }
}

class Volf extends Animals {
  constructor(name) {
    super(name);
  }
  hunting() {
    console.log("вовк з’їсть тебе");
  }
}

const tiger1 = new Tiger('tiger1');
const volf1 = new Volf('volf1')
console.log(volf1);
console.log(tiger1);
volf1.hunting()
tiger1.hunting()
tiger1.growl()