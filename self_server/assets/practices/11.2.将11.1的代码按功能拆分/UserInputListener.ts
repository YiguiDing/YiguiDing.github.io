export enum PlayerCtrl {
	GoAhead = "GoAhead",
	Back = "Back",
	Up = "Up",
	Down = "Down",
	Space = "Space"
}
export enum GameCtrl {
	StartGame = "StartGame",
	StopGame = "StopGame"
}
export enum DisplayCtrl {
	FullScreem = "FullScreem"
}
export type InputKey = PlayerCtrl | GameCtrl | DisplayCtrl;
export type InputKeyMap = { [key: string]: InputKey };
export const UserInputMap: InputKeyMap = {
	// 方向键定义
	ArrowRight: PlayerCtrl.GoAhead,
	ArrowLeft: PlayerCtrl.Back,
	ArrowUp: PlayerCtrl.Up,
	ArrowDown: PlayerCtrl.Down,
	// 小写键盘方向键定义
	d: PlayerCtrl.GoAhead,
	a: PlayerCtrl.Back,
	w: PlayerCtrl.Up,
	s: PlayerCtrl.Down,
	// 大写键盘方向键定义
	D: PlayerCtrl.GoAhead,
	A: PlayerCtrl.Back,
	W: PlayerCtrl.Up,
	S: PlayerCtrl.Down,
	" ": PlayerCtrl.Space,
	// 功能键
	Enter: GameCtrl.StartGame,
	Escape: GameCtrl.StopGame,
	f: DisplayCtrl.FullScreem,
	F: DisplayCtrl.FullScreem
};
export class UserInputListener {
	inputs: Array<InputKey> = [];
	CanvasDOM: HTMLCanvasElement;
	constructor(CanvasDOM: HTMLCanvasElement) {
		this.CanvasDOM = CanvasDOM;
		this.listen();
	}
	listen() {
		// 按键按下监听
		window.addEventListener("keydown", event => {
			const inputKey = UserInputMap[event.key]; // 查找是否是要的键
			if (inputKey != undefined && !this.inputs.includes(inputKey)) {
				this.inputs.push(inputKey); // 如果是要监听的按键且数组中不包含该键 则保存该键
			}
		});
		// 按键按下的期间
		window.addEventListener("keypress", () => {
			if (this.inputs.includes(DisplayCtrl.FullScreem)) {
				this.CanvasDOM.requestFullscreen({ navigationUI: "hide" }).catch(err => console.log(err));
			}
		});
		// 按键弹出监听
		window.addEventListener("keyup", event => {
			const action = UserInputMap[event.key]; // 查找是否是要的键
			if (action != undefined && this.inputs.includes(action)) {
				const index = this.inputs.findIndex(item => item == action);
				this.inputs.splice(index, 1); // 如果是要监听的按键且数组已包含该键 则删除该键
			}
		});
		// changedTouches 存放的是触发相关事件的tarch对象集合
		let touchStart: Touch;
		let touchMove: Touch;
		let touchEnd: Touch;
		window.addEventListener("touchstart", event => {
			event.preventDefault();
			event.stopPropagation();
			// 记录点击屏幕的touch
			touchStart = event.changedTouches[0];
			// 单指触摸屏幕控制游戏开始
			if (event.touches.length == 1) {
				this.inputs.push(GameCtrl.StartGame);
			} else if (event.touches.length == 2) {
				this.CanvasDOM.requestFullscreen({ navigationUI: "hide" }).catch(err => alert(err));
			}
		});
		window.addEventListener("touchmove", event => {
			event.preventDefault();
			event.stopPropagation();
			// 记录移动的touch
			touchMove = event.changedTouches[0];
			// 计算移动距离
			const differY = touchMove.clientY - touchStart.clientY;
			const differX = touchMove.clientX - touchStart.clientX;
			// 右滑动屏幕
			if (differX > 50) {
				this.inputs.push(PlayerCtrl.GoAhead);
			}
			// 右滑动屏幕
			else if (differX < -50) {
				this.inputs.push(PlayerCtrl.Back);
			}
			// 上滑屏幕
			if (differY < -50) {
				this.inputs.push(PlayerCtrl.Up);
			}
			// 下滑屏幕
			else if (differY > 50) {
				this.inputs.push(PlayerCtrl.Down);
			}
		});
		// 手指离开则清空输入
		window.addEventListener("touchend", event => {
			event.preventDefault();
			event.stopPropagation();
			touchEnd = event.changedTouches[0];
			this.inputs = []; // 清空输入
		});
	}
}
