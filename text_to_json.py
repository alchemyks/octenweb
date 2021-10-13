import json


def converter(file_name_in, file_name_out):
    with open(file_name_in) as txt_file, open(file_name_out, mode='w') as json_file:
        json_file.write(json.dumps([{'name': line.split('|')[0], 'age': line.split("|")[1],
                                     'gender': line.split('|')[2].strip()} for line in txt_file]))


if __name__ == '__main__':
    converter('users.txt', 'users.json')
