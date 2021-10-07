class Letter:
    __count = 0
    list = []

    def __init__(self):
        self.__text = ''
        Letter.__count += 1

    def get_text(self):
        return self.__text

    def set_text(self, text):
        self.__text = text

    @classmethod
    def count(cls):
        return cls.__count

    def append_text(self):
        self.list.append(self.__text)

    text = property(get_text, set_text)
