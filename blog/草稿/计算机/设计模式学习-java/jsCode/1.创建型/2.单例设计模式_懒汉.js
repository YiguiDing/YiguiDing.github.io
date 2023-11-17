class Demo {
	constructor() {
	}
}

class DemoInstance {
	static instance;
	static getInstance() {
		if(this.instance == undefined) this.instance = new Demo();
		return this.instance;
	}
}

function main() {
	let i1 = DemoInstance.getInstance();
	let i2 = DemoInstance.getInstance();
	i1["test"] = "hhhh"
	console.log(i2["test"]);// "hhhh"
	console.log(i1===i2);// true
}

main();