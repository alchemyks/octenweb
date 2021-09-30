
shopping_list = {}

menu = '1) Создать запись\n' \
       '2) Список все записей\n' \
       '3) Общая сумма всех покупок\n' \
       '4) Самая дорогая покупка\n' \
       '5) Поиск по названию покупки\n' \
       '9) Выход'

while True:
    print(menu)
    answer = input('Сделайте выбор: ')
    if answer == '1':
        buy_name = input('Название покупки: ')
        cost = input('Цена: ')
        shopping_list[buy_name] = cost
    if answer == '2':
        for K, V in shopping_list.items():
            print(K, V)
    if answer == '3':
        sum = 0
        for K, V in shopping_list.items():
            sum += float(V)
        print(round(sum, 2))
    if answer == '4':
        max = 0
        for K, V in shopping_list.items():
            if max < float(V):
                max = float(V)
        print(max)
    if answer == '5':
        while True:
            buy_name = input('Введите название покупки: ')
            if buy_name == 'exit':
                break
            if shopping_list.get(buy_name) is None:
                print('Покупка не найдена, уточните критерий поиска.\nДля выхода с поиска введите: exit')
            else:
                print(buy_name, shopping_list.get(buy_name))

    if answer == '9':
        print('Выход')
        break



