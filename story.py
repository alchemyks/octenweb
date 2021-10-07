class Human:
    def __init__(self, name, age):
        self.name = name
        self.age = age


class Cinderella(Human):
    __count = 0

    def __init__(self, name, age, size_leg):
        super().__init__(name, age)
        self.size_leg = size_leg
        Cinderella.__count += 1

    @classmethod
    def count(cls):
        return cls.__count


class Prince(Human):
    def __init__(self, name, age, size):
        super().__init__(name, age)
        self.size = size

    def search_love(self, cinderellas):
        for cinderella in cinderellas:
            if cinderella.size_leg == self.size:
                return cinderella
        return None
