

def notebook() -> ():
    todo_list = [str]

    def add_todo(todo: str) -> None:
        todo_list.append(todo)

    def get_all() -> None:
        print('\n'.join(todo_list))

    notebook.add_todo = add_todo
    notebook.get_all = get_all
    return notebook


todo = notebook()
todo.add_todo('Выучить python')
todo.add_todo('Выучить английский язык')
todo.add_todo('Найти работу по душе')
todo.add_todo('Учить новые технологии')
todo.add_todo('Дорасти до уровня senior')
todo.get_all()
