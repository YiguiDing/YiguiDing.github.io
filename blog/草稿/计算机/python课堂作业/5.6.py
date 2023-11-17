def isSu(num):
	for n in range(2,num):
		if(num%n==0):
			return False
	return True

for i in range(2,101):
    if(isSu(i)):
        print(i)