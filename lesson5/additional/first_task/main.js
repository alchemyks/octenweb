
/*- Створити форму з інпутом для введення ім'я, та action="index2.html".
При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
На index2.html виводити записане в localstorage ім'я в div
*/
const form = document.createElement('form');
form.action = 'index2.html';
const input = document.createElement('input');
input.type = 'text';
input.defaultValue = 'Open your mind!!!';
form.appendChild(input);
const submit = document.createElement('input');
submit.type = 'submit'
submit.value = 'Send';
submit.style.marginLeft = '20px'
submit.addEventListener('submit',function (ev ){
    localStorage.setItem('inputValue', input.value);
});
form.appendChild(submit);
document.body.appendChild(form);
