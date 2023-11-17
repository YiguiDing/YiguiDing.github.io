module.exports = {
	tabWidth: 2, // 使用 2 个缩进
	useTabs: true, // 使用Tab缩进符
	printWidth: 150, // 一行最多字符
	semi: true, // 行尾需要分号
	singleQuote: false, // 使用双引号
	quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
	trailingComma: 'none', // 末尾不需要逗号
	bracketSpacing: true, // 大括号内的首尾需要空格
	endOfLine: 'crlf', // 换行使用windows的换行符号
	arrowParens: 'avoid', // 箭头函数，只有一个参数的时候，不需要括号
	rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
	rangeEnd: Infinity, // 每个文件格式化的范围是文件的全部内容
	proseWrap: 'never', // 使用默认的折行标准
	// requirePragma: false, // 不需要写文件开头的 @prettier
	// insertPragma: false, // 不需要自动在文件开头插入 @prettier
	// jsxSingleQuote: false,// jsx 不使用单引号，而使用双引号
};

