def charcounter(test_str: str):
    print(*['{} -> {}'.format(char, test_str.count(char)) for char in list(set(test_str))], sep='\n')
