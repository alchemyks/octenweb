/*
- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
*/
let contentBlocs = document.getElementsByClassName('rules');
let ul = document.createElement('ul');
for (const contentBlock of contentBlocs) {
    let nameParagraph = contentBlock.getElementsByTagName("h2")[0];
    let li = document.createElement('li');
    li.textContent = nameParagraph.textContent;
    ul.appendChild(li);
}
let content = document.getElementById('content');
    content.appendChild(ul);
