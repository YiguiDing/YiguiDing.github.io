export function RandomRange(from: number, to: number) {
	return Math.random() * (to - from) + from;
}
export type ValueOf<T> = T[keyof T];
