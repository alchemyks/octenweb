/*
- Імітуємо наповнення інтернет магазину товарами :
Створити форму з наступними полями :
- назва товару
- кількість товару
- ціна товару
- картинка товару (посилання з інтернету)
Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
*/
const form = document.getElementById('bestForm');
form.addEventListener('submit',function (){
    const inputFields = document.getElementById('bestForm');
    let dataItem = {};
    for (const field of inputFields) {
        if (field.type !== 'submit'){
            dataItem[field.name] = field.value;
        }
    }
    let data = [];
    let storage = localStorage.getItem('data');
    if (storage !== null){
        data = JSON.parse(storage);
    }
    for (const item of data){
        if(item['name'] === dataItem['name']){
            alert(`Товар з іменем \"${dataItem['name']}\" уже є в списку`);
            return;
        }
    }
    data.push(dataItem);
    localStorage.setItem('data', JSON.stringify(data));
});