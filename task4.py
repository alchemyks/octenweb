#4) переделать первое задание под меню с помощью цикла

menu = '1 - найти min число в листе\n2 - удалить все дубликаты в листе\n' \
       '3 - заменить каждое четвертое значение на "Х" \n' \
       '4 - вывести элемент листа, значение которого ближе всего к среднему' \
       ' арифметическому всех элементов этого же листа' \
       '5 - выход'
task_list = [22, 3, 5, 2, 8, 2, -23, 8, 23, 5]
while True:
    print(menu)
    answer = input('Сделайте свой выбор: ')
    if answer == '1':
        min = task_list[0]
        for el in task_list:
            if min > el:
                min = el
        print(task_list)
        print(min)
    if answer == '2':
        task_list2 = []
        for elem in task_list:
            if elem not in task_list2:
                task_list2.append(elem)
        print(task_list)
        print(task_list2)
    if answer == '3':
        task_list3 = task_list[:]
        for i in range(3, len(task_list3), 4):
            task_list3[i] = 'X'
        print(task_list)
        print(task_list3)
    if answer == '4':
        avr = sum(task_list) / len(task_list)
        round_el = task_list[0]
        distance = ((task_list[0] - avr) ** 2) ** 0.5
        for el in task_list:
            if distance > ((el - avr) ** 2) ** 0.5:
                distance = ((el - avr) ** 2) ** 0.5
                round_el = el
        print(task_list)
        print(round_el)

    if answer == '5':
        break
