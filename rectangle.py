class Rectangle:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def __add__(self, other):
        return self.a * self.b + other.a * other.b

    def __sub__(self, other):
        return self.a * self.b - other.a * other.b

    def __eq__(self, other):
        return self.a * self.b == other.a * other.b

    def __ne__(self, other):
        return self.a * self.b != other.a * other.b

    def __gt__(self, other):
        return self.a * self.b > other.a * other.b

    def __lt__(self, other):
        return self.a * self.b < other.a * other.b

    def __len__(self):
        return 2 * self.a + 2 * self.b


# rctgl1 = Rectangle(1, 1)
# rctgl2 = Rectangle(2, 2)
# print(rctgl1+rctgl2)
# print(rctgl2-rctgl1)
# print(rctgl1 == rctgl2)
# print(rctgl1 != rctgl2)
# print(rctgl1 > rctgl2)
# print(rctgl1 < rctgl2)
# print(len(rctgl1))


