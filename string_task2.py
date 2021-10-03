
# 2)написати прогу яка вибирає зі введеної строки числа і виводить їх
# так як вони написані
# наприклад:
#   st = 'as 23 fdfdg544 34' #введена строка
#   23, 544, 34              #вивело в консолі


string = input('Введите строку для поиска чисел: ')
prev_number = False
numbers = []
for char in string:
    if not char.isnumeric():
        if prev_number:
            prev_number = False
        continue
    if not prev_number:
        prev_number = True
        numbers.append('')
    numbers[-1] += char
    prev_number = True
print(' '.join(numbers))