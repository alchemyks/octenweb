#2)вывести на экран пустой квадрат из "*" сторона которого указана в переменой:

size = 10

for y in range(size):
    point = ''
    for x in range(size):
        if x == 0 or x == size - 1 or y == 0 or y == size-1:
            point = '*'
        else:
            point = ' '
        print(point, end='')
    print('')
