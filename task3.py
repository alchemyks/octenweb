#3) вывести табличку умножения с помощью цикла while

factor = 1
add = 1
while add < 10:
    print(factor, ' ' if factor // 10 == 0 else '', end='')
    factor += add
    if factor / 9 == add:
        print(factor, ' ', end='')
        add += 1
        factor = add
        print('')
