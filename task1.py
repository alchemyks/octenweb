def expanded_form(num):
    str_num = list(reversed(str(num)))
    return ' + '.join(reversed([str_num[i]+'0' * i for i in range(len(str_num)) if str_num[i] != '0']))
