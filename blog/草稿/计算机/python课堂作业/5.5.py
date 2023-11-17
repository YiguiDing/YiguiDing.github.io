N = eval(input())

def isSu(num):
	for n in range(2,N):
		if(num%n==0):
			return False
	return True

print(isSu(N))