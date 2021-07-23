/*
-- отримує текст з параграфа з id "content"
*/
    let textIdContent = document.getElementById('content').textContent;
/*
    -- отримує текст з блоку з id "rules"
    */
    let textIdRules = document.getElementById('rules').textContent;
/*
    -- замініть текст параграфа з id 'content' на будь-який інший
    */
    document.getElementById('content').textContent = 'ewrewrwerwefgdgd gergerg fergreger reeg';
/*
    -- замініть текст параграфа з id 'rules' на будь-який інший
    */
    document.getElementById('rules').textContent = 'будь-який інший';
    /*
    -- змініть кожному елементу колір фону на червоний
    */
for (const bodyChildren of document.body.children) {
    bodyChildren.style.background = 'red';
}

    /*
    -- змініть кожному елементу колір тексту на синій
    */
for (const bodyChildren of document.body.children) {
    bodyChildren.style.color = 'blue';
}
/*
    -- отримати весь список класів елемента з id=rules і вивести їх в console.log
    */
    for (const classEl of document.getElementById('rules').classList){
        console.log(classEl);
    }
/*
    -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
    */
    let elemClassFc_rules = document.getElementsByClassName('fc_rules');
    for (const elemClassFcRule of elemClassFc_rules) {
        function click1(){
            console.log(elemClassFcRule.textContent)
        }
        function click2() {
            console.log('sdfsdfsgfdgdgfdgdg')
        }
        elemClassFcRule.addEventListener('click', click1);
        elemClassFcRule.addEventListener('click', click2);
}
/*
    -- поміняти колір тексту у всіх елементів fc_rules на червоний
*/

for (const elemClassFcRule of elemClassFc_rules) {
    elemClassFcRule.style.color = 'red';
}

