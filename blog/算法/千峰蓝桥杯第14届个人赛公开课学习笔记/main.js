function process() {
	let count = 0;
	for (var i = 1; i <= 2019; i++) {
	  let set = new Set(new String(i).split(""));
	  if (set.has("0") || set.has("1") || set.has("2") || set.has("9"))
		count += i;
	}
	console.log(count);
  }
  function main() {
	let last = 0;
	let now = 0;
  
	last = Date.now();
	process();
	now = Date.now();
  
	console.log("耗时：", now - last, "ms");
	// 1905111
	// 耗时： 7 ms
  }
  main();