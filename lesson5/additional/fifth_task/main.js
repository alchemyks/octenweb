/*
-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
*/
			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];
			/*
<div id="wrap">
    <div className="rules rule1">
        <h2>Первое правило Бойцовского клуба.</h2>
        <p>Никому не рассказывать о Бойцовском клубе.</p>
    </div>
</div>
 */
let wrap = document.createElement('div');
    wrap.setAttribute('id', 'wrap');
for (let i = 0 ; i < rules.length; i++) {
    let ruleDiv = document.createElement('div');
    ruleDiv.setAttribute('class', 'rules');
    ruleDiv.classList.add(`rule${i+1}`);
    let h2 = document.createElement('h2')
    h2.textContent = rules[i].title;
    ruleDiv.appendChild(h2);
    let peshka = document.createElement('p');
    peshka.textContent  = rules[i].body;
    ruleDiv.appendChild(peshka);
    wrap.appendChild(ruleDiv);
}
document.body.appendChild(wrap);
