res = 0
for i in range(1,997):
	if i%2==0:
		res-=i
	else:
		res+=i

print(res)