export interface transformAble {
	posX: number;
	posY: number;
	// 水平和垂直平移
	transform(stepX: number, stepY: number): void;
}
