/*
      - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
{
id: 1,
name: 'Leanne Graham',
username: 'Bret',
email: 'Sincere@april.biz',
address: {
  street: 'Kulas Light',
  suite: 'Apt. 556',
  city: 'Gwenborough',
  zipcode: '92998-3874',
  geo: {
      lat: '-37.3159',
      lng: '81.1496'
  }
},
phone: '1-770-736-8031 x56442',
website: 'hildegard.org',
company: {
  name: 'Romaguera-Crona',
  catchPhrase: 'Multi-layered client-server neural-net',
  bs: 'harness real-time e-markets'
}
}
*/
class User {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, company_name, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        }
        this.phone = phone;
        this.website = website;
        this.company = {
            name: company_name,
            catchPhrase: catchPhrase,
            bs: bs
        }
    }
}

/*
-  Створити функцію конструктор / клас  який описує об'єкт тегу
Поля :
-назва тегу ()
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результуючого об'єкту
{
    titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
        attrs: [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        {some props and values},
*/
class Tag {
    constructor(titleOfTag, action, titleOfAttr, actionOfAttr) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [];
        if (arguments.length > 2) {
            for (let i = 2; i < arguments.length; i += 2) {
                this.attrs.push({titleOfAttr: arguments[i], actionOfAttr: arguments[i + 1]})
            }
        }
    }
}

let tagA = new Tag('a', 'Предназначен для создания ссылок.', 'accesskey', 'Активация ссылки с помощью комбинации клавиш', 'coords', 'Устанавливает координаты активной области.');
let tagDiv = new Tag('div', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого.','align','Задает выравнивание содержимого тега','title','Добавляет всплывающую подсказку к содержимому');
let tagH1 = new Tag('h1','Показывают относительную важность секции','align','Определяет выравнивание заголовка');
let tagSpan = new Tag('span', 'Предназначен для определения строчных элементов документа','accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш','class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением');
let tagInput = new Tag('input', 'Предназначен для создания текстовых полей', 'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов','alt','Альтернативный текст для кнопки с изображением');
let tagForm = new Tag('form', 'Устанавливает форму на веб-странице', 'target', 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат', 'novalidate','Отменяет встроенную проверку данных формы на корректность ввода');
let tagOption = new Tag('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', 'disabled', 'Заблокировать для доступа элемент списка', 'selected', 'Заранее устанавливает определенный пункт списка выделенным');
let tagSelect = new Tag('select', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка', 'accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш', 'autofocus', 'Устанавливает, что список получает фокус после загрузки страницы');
