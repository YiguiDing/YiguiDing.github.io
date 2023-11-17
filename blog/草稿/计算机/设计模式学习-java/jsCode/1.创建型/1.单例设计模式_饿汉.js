class Demo {
	constructor() {
	}
}

class DemoInstance {
	static instance = new Demo();
	static getInstance() {
		return this.instance;
	}
}

function main() {
	let i1 = DemoInstance.getInstance();
	let i2 = DemoInstance.getInstance();
	console.log(i1 === i2);// true
}

main();