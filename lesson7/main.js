/*У вас має бути більше 10 асинхронних дій з рандомними затримками.
Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.

Напиклад.
Прикнутись - 0.3с
Поснідати - 1с
Піти в душ - 0.5с
Дочекатись автобус - 3с
Пообідати - 1с

І так далі

 */

function wakeUp(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Прокинувся!!')
        resolve();
    },1100)
    });
}
function breakfast(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Сніданок!!!')
        resolve();
    }, 600)

    });
}
function shower(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Душ!!!');
        resolve();
    }, 500)

    });
}
function takeCar(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Забрати з парковки авто!!!');
        resolve();
    },1000)});
}
function goToWork(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Їду на роботу!!!')
        resolve();
    },3000)});
}
function working(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Працюю!!!')
        resolve();
    },3000)});
}
function lunch(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Обід!!!');
        resolve();
    },500)});
}
function goToHome(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Їду дудому!!!')
        resolve();
    },1000)});
}
function parkCar(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Поставив авто на парковку');
        resolve();
    },300)});
}
function imHome(){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Вдома!!!')
        resolve();
    },200)});
}


    wakeUp().then(()=>{
       return breakfast();
    })
        .then(()=>{
            return shower()
        })
        .then(()=>{
           return  takeCar();
        })
        .then(()=>{
           return  goToWork();
        })
        .then(()=>{
           return  working();
        })
        .then(()=>{
            return lunch();
        })
        .then(()=>{
            return  working();
        })
        .then(()=>{
            return  goToHome();
        })
        .then(()=>{
            return  parkCar();
        })
        .then(()=>{
            return  imHome();
        });

