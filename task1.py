# 1)Дан лист:
#   list = [22, 3,5,2,8,2,-23, 8,23,5]
#   - найти min число в листе
#   - удалить все дубликаты в листе
#   - заменить каждое четвертое значение на "Х"

task_list = [22, 3, 5, 2, 8, 2, -23, 8, 23, 5]
min = task_list[0]
for el in task_list:
    if min > el:
        min = el
print(min)

task_list2 = []
for elem in task_list:
    if elem not in task_list2:
        task_list2.append(elem)
print(task_list2)

for i in range(3, len(task_list), 4):
    task_list[i] = 'X'
print(task_list)
