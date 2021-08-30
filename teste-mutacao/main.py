def valores(a, b, c):
    if (a + b < c) or (a + c < b) or (b + c < a):
        print('Nao é um triangulo')
        return "Não é um triangulo"
    elif (a == b) and (a == c):
        print('Equilatero')
        return "Equilatero"
    elif (a == b) or (a == c) or (b == c):
        print('Isósceles')
        return "Isóceles"
    else:
        print('Escaleno')
        return "Escaleno"