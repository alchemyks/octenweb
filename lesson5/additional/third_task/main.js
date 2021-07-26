

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
/*
- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.



*/
let addresses = [];
for (const user of users) {
    addresses.push(user['address']);
}
/*
- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
    Всі данні в одному блоці.
*/
let parent1 = document.createElement('div');
for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `Name: ${user.name}<br>Age: ${user.age}<br>Status: ${user.status}<br>Sity: ${user.address.city}<br>
                            Country: ${user.address.country}<br>Street: ${user.address.street}<br>HousNumber: ${user.address.houseNumber}`;
    parent1.appendChild(userDiv);
    document.body.appendChild(parent1);
}
/*
- За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
    розділивши всі властивості по своїм блокам (div>div*4)
*/
let parent2 = document.createElement('div');
for (const user of users) {
    let userDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
        nameDiv.textContent = `Username: ${user.name}`;
        userDiv.appendChild(nameDiv);
    let ageDiv = document.createElement('div');
        ageDiv.textContent = `Age: ${user.age}`;
        userDiv.appendChild(ageDiv)
    let statusDiv = document.createElement('div');
        statusDiv.textContent = `Status: ${user.status}`;
        userDiv.appendChild(statusDiv);
    let cityDiv = document.createElement('div');
        cityDiv.textContent = `City: ${user.address.city}`;
        userDiv.appendChild(cityDiv);
    let countryDiv = document.createElement('div');
        countryDiv.textContent = `Country: ${user.address.country}`;
        userDiv.appendChild(countryDiv);
    let streetDiv = document.createElement('div');
        streetDiv.textContent = `Street: ${user.address.street}`;
        userDiv.appendChild(streetDiv);
    let houseDiv = document.createElement('div');
        houseDiv.textContent = `House number: ${user.address.houseNumber}`;
        userDiv.appendChild(houseDiv);
    parent2.appendChild(userDiv);
}
document.body.appendChild(parent2);

/*
 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
    розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
*/

let parent3 = document.createElement('div');
for (const user of users) {
    let userDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    nameDiv.textContent = `Username: ${user.name}`;
    userDiv.appendChild(nameDiv);
    let ageDiv = document.createElement('div');
    ageDiv.textContent = `Age: ${user.age}`;
    userDiv.appendChild(ageDiv)
    let statusDiv = document.createElement('div');
    statusDiv.textContent = `Status: ${user.status}`;
    userDiv.appendChild(statusDiv);
    let addressDiv = document.createElement('div');
    let cityDiv = document.createElement('div');
    cityDiv.textContent = `City: ${user.address.city}`;
    addressDiv.appendChild(cityDiv);
    let countryDiv = document.createElement('div');
    countryDiv.textContent = `Country: ${user.address.country}`;
    addressDiv.appendChild(countryDiv);
    let streetDiv = document.createElement('div');
    streetDiv.textContent = `Street: ${user.address.street}`;
    addressDiv.appendChild(streetDiv);
    let houseDiv = document.createElement('div');
    houseDiv.textContent = `House number: ${user.address.houseNumber}`;
    addressDiv.appendChild(houseDiv);
    userDiv.appendChild(addressDiv)
    parent3.appendChild(userDiv);
}
document.body.appendChild(parent3);
