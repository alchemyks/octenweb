# - є функція:
# def pr():
#     return 'Hello_boss_!!!'
#  написати декоратор до цієї функції, який замінює нижні підчеркування на пробіли і повертає це значення

def replace_low_line(func):
    def wrapper():
        print(func().replace('_', ' '))
    return wrapper


@replace_low_line
def pr():
    return 'Hello_boss_!!!'

