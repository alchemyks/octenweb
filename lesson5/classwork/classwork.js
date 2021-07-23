/*
a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
*/
    document.getElementById('main_header').textContent = 'june-2021-tuesday';
/*
b) робить шириниу елементу ul 400px
*/
    document.getElementsByTagName('ul')[0].style.width = '480px';
/*
c) робить шириниу всіх елементів з класом linkList шириною 50%
*/
    for (const element of document.getElementsByClassName('linkList')) {
        element.style.width = '50%';
}
/*
d) отримує текст який зберігається в елементі з класом listElement2
*/
    let text = document.getElementsByClassName('listElement2')[0].textContent;
/*
e) отримує всі елементи li та змінює ім колір фону на сірий
*/
    for (const lishka of document.getElementsByTagName('li')){
        lishka.style.backgroundColor = 'grey';
    }
/*
f) отримує всі елементи 'a' та додає їм клас anchor
*/
    for (const ashka of document.getElementsByTagName('a')){
        ashka.classList.add('anchor')
    }
/*
g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
*/
    for (const ashka of document.getElementsByTagName('a')){
        if (ashka.textContent === 'link3'){
            ashka.style.fontSize = '40px'
        }
    }
/*
h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
*/
for (const ashka of document.getElementsByTagName('a')){
    ashka.classList.add(`element${ashka.textContent}`);
    }

/*
i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
*/
    let color1 = prompt('Set color for subheader!');
    for (const elem of document.getElementsByClassName('sub-header')){
        elem.style.backgroundColor = color1;
    }
/*
j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
*/
    let color2 = prompt('Set color text for subheader!');
    for (const elem of document.getElementsByClassName('sub-header')){
        if (elem.textContent === 'content 2 segment'){
            elem.style.backgroundColor = color2;
        }
}
/*
k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
*/
    document.getElementsByClassName('content_1')[0].textContent = prompt('Text');
/*
l) отримати елементи p та змінити їм padding на 20px
*/
    for (const elem of document.getElementsByTagName('p')){
       elem.style.padding = '20px';
}
/*
m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
*/
    for (const elem of document.getElementsByClassName('text2')){
        elem.textContent = 'june-2021-tuesday';
    }
