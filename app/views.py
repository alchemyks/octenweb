from django.shortcuts import render


# Create your views here.


def calc(request, first, operation, second):
    answer = None
    no_error = True
    try:
        a = int(first)
        b = int(second)
        if operation == '*':
            answer = a * b
        elif operation == '+':
            answer = a + b
        elif operation == '-':
            answer = a - b
        elif operation == 'div':
            answer = a / b
        else:
            print('RRRR')
            raise ArithmeticError
    except Exception as ex:
        no_error = False
        print(ex)
    finally:
        return render(request, 'calc.html', {'first': a, 'operation': operation,
                                         'second': second, 'answer': answer, 'no_error': no_error})
