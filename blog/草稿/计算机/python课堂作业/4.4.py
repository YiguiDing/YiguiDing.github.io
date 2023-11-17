h = eval(input("hour="))
sum = 0

if h>120:
	sum+= 120*80 + (h-120)*80*0.15
elif h<60:
	sum-=700
else:
	sum+=h*80

print(sum)