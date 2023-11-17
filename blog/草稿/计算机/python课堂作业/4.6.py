s= "学而时习之，不亦说乎？"
n=0
m=0

def is_Chinese(ch): 
	if '\u4e00' <= ch <= '\u9fff':
		return True 
	return False

for	ch in s:
	if(is_Chinese(ch)):
		n+=1
	else:
		m+=1


print("chinese:{},other:{}".format(n,m))
