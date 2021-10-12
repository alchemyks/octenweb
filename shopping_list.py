import json


class ShoppingList:
    __shoppings = {}
    __file_name = 'shopping_list.json'
    __data_in_file = True

    def print_menu(self):
        print('1) Создать запись\n' 
                '2) Список всех записей\n'
                '3) Общая сумма всех покупок\n'
                '4) Самая дорогая покупка\n'
                '5) Поиск по названию покупки \n'
                '9) Выход\n')

    def continue_(self):
        input("Для возвращения в меню намите 'Enter':")

    def read_data(self):
        with open(self.__file_name) as file:
            self.__shoppings = json.load(file)

    def append_data(self):
        with open(self.__file_name, mode='w') as file:
            file.write(json.dumps(self.__shoppings))

    def create_shopping(self):
        while True:
            shopping = input("Введите название покупки: ")
            if self.__shoppings.get(shopping) is not None:
                print('Такая покупка уже существует')
                continue
            break
        while True:
            price = input(f"Введите цену {shopping}: ")
            if not price.isnumeric():
                print("Введите числовое значение цены")
                continue
            break
        self.__shoppings[shopping] = price
        if self.__data_in_file:
            self.append_data()

    def get_all_data(self):
        print(*[f'{k}: {str(v)}' for k, v in self.__shoppings.items()], sep='\n')
        self.continue_()

    def get_sum(self):
        print(sum([int(v) for k, v in self.__shoppings.items()]))
        self.continue_()

    def get_max_price(self):
        print(max([int(v) for k, v in self.__shoppings.items()]))
        self.continue_()

    def search_item(self):
        while True:
            name = input('Введите название покупки: ')
            if self.__shoppings.get(name) is not None:
                print(name, ': ', self.__shoppings.get(name))
            else:
                print('Такой покупки не найдено.')
            answer = input("Продолжить поиск д/н: ")
            if answer == 'д':
                continue
            else:
                break

    def check_storage(self):
        try:
            file = open(self.__file_name)
            file.close()
            self.read_data()
        except IOError as e:
            answer = input('Файл с данными не найден, создать? (y - создать файл, n - работать в памяти, x - выйти')
            while True:
                if answer == 'y':
                    open(self.__file_name, mode='w').close()
                    break
                elif answer == 'n':
                    self.__data_in_file = False
                    break
                elif answer == 'x':
                    print('Выход...')
                    exit(1)
                else:
                    print('Введен не зарегистрированный символ')

    def start(self):
        self.check_storage()
        command = ''
        while command != '9':
            if command == '1':
                self.create_shopping()
            elif command == '2':
                self.get_all_data()
            elif command == '3':
                self.get_sum()
            elif command == '4':
                self.get_max_price()
            elif command == '5':
                self.search_item()
            self.print_menu()
            command = input('Пожалуйста сделайте выбор: ')
        print('Выход...')


shopping = ShoppingList()
shopping.start()

