def gcd(a,b):
    if b==0:
        return a
    else:
        return gcd(b,a%b)

def gcf(a,b):
    return a *b /gcd(a,b)


print(gcd(2,8))
print(gcf(2,8))