

while True:
	english = 0
	number = 0
	space = 0
	other = 0
	for ch in input():
		if ch.isdigit():
			number+=1
		elif ch.isalpha():
			english+=1
		elif ch.isspace():
			space+=1
		else:
			other+=1
	print("english:{},number:{},space:{},other:{}".format(english,number,space,other))
