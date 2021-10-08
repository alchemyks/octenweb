class ShoppingList:
    __shoppings = {}

    def print_menu(self):
        print('1) Создать запись\n' 
                '2) Список всех записей\n'
                '3) Общая сумма всех покупок\n'
                '4) Самая дорогая покупка\n'
                '5) Поиск по названию покупки \n'
                '9) Выход\n')

    def continue_(self):
        input("Для возвращения в меню намите 'Enter':")

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
        self.__shoppings[shopping] = int(price)

    def get_all_data(self):
        print(*[f'{k}: {str(v)}' for k, v in self.__shoppings.items()], sep='\n')
        self.continue_()

    def get_sum(self):
        print(sum([v for k, v in self.__shoppings.items()]))
        self.continue_()

    def get_max_price(self):
        print(max([v for k, v in self.__shoppings.items()]))
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

    def start(self):
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

