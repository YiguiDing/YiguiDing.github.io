import { Animal } from "./Animal.js";
import { State } from "./State.js";
import { InputListener } from "./InputListener.js";
import { RandomRange, ValueOf } from "./utils.js";

export class ShadowDog extends Animal {
	// 静态属性 状态枚举
	static StateNamesEnum = {
		Idle: "Idle",
		RunningRight: "RunningRight",
		MoveBack: "MoveBack",
		JumpUp: "JumpUp",
		JumpFall: "JumpFall",
		Sit: "Sit"
	} as const;
	// 状态map
	StateMap: { [value in ValueOf<typeof ShadowDog.StateNamesEnum>]: State };
	// 当前状态
	currentState!: State;
	// 输入监听器内部类
	inputListener: InputListener;
	jumpWeight: number; // 重量
	maxJumpSpeed: number;
	maxMoveSpeedX: number;
	maxMoveSpeedY: number;
	groundPosY: number;
	constructor(Context2D: CanvasRenderingContext2D, CANVAS_WIDTH: number, CANVAS_HEIGHT: number) {
		super(
			Context2D,
			CANVAS_WIDTH,
			CANVAS_HEIGHT,
			"./imgs/shadow_dog.png",
			575,
			523,
			0.4,
			[7, 7, 7, 9, 11, 5, 7, 7, 12, 4],
			["idle", "jump", "fall", "run", "dizzy", "sit", "roll", "bite", "ko", "gethit"]
		);
		this.inputListener = new InputListener();
		this.StateMap = {} as typeof this.StateMap;
		this.StateMap[ShadowDog.StateNamesEnum.Idle] = new ShadowDog.InnerClass_IdleState(this);
		this.StateMap[ShadowDog.StateNamesEnum.RunningRight] = new ShadowDog.InnerClass_RunningRightState(this);
		this.StateMap[ShadowDog.StateNamesEnum.JumpUp] = new ShadowDog.InnerClass_JumpUpState(this);
		this.StateMap[ShadowDog.StateNamesEnum.JumpFall] = new ShadowDog.InnerClass_JumpFallState(this);
		this.StateMap[ShadowDog.StateNamesEnum.MoveBack] = new ShadowDog.InnerClass_MoveBackState(this);
		this.StateMap[ShadowDog.StateNamesEnum.Sit] = new ShadowDog.InnerClass_SetState(this);
		this.setState(ShadowDog.StateNamesEnum.RunningRight);

		this.moveSpeedY = 0;
		this.moveSpeedX = 0;
		this.maxMoveSpeedX = RandomRange(0.3, 0.3);
		this.maxMoveSpeedY = RandomRange(0.3, 0.3);
		this.setFps(30);
		this.groundPosY = this.CANVAS_HEIGHT - this.drawHeight - this.drawHeight / 4;
		this.posX = RandomRange(0, this.drawWidth);
		this.posY = this.groundPosY;
		this.jumpWeight = 0.08;
		this.maxJumpSpeed = RandomRange(1.5, 1.5);
	}
	action_default() {
		this.moveSpeedX = this.maxMoveSpeedX * 0;
		this.changeAnimateByName("run");
	}
	action_ahead() {
		this.moveSpeedX = this.maxMoveSpeedX * 2.0;
		this.changeAnimateByName("run");
	}
	action_back() {
		this.moveSpeedX = -this.maxMoveSpeedX * 2.0;
		this.changeAnimateByName("run");
	}
	action_idle() {
		this.moveSpeedX = 0;
		this.moveSpeedY = 0;
		this.moveSpeedY = 0; // 重置上升速度
		this.posY = this.groundPosY; // 重置水平位置
		this.changeAnimateByName("idle");
	}
	action_sit() {
		this.moveSpeedX = 0;
		this.moveSpeedY = 0;
		this.changeAnimateByName("sit");
	}
	action_roll() {
		this.moveSpeedX = -this.maxMoveSpeedX * 1;
		this.changeAnimateByName("roll");
	}
	action_dizzy() {
		this.moveSpeedX = 0;
		this.moveSpeedY = 0;
		this.changeAnimateByName("dizzy");
	}
	action_bite() {
		this.moveSpeedX = 0;
		this.moveSpeedY = 0;
		this.changeAnimateByName("bite");
	}
	action_ko() {
		this.moveSpeedX = 0;
		this.moveSpeedY = 0;
		this.aliveFlag = false; // 标记为死亡
		this.changeAnimateByName("ko"); // 死亡动画效果
		this.requestStopAnimateFrameAtLastFrame(); // 请求在渲染最后一帧的时候停止渲染
	}
	action_gethit() {
		this.moveSpeedX = 0;
		this.moveSpeedY = 0;
		this.changeAnimateByName("gethit");
	}
	action_jump_up() {
		this.moveSpeedX = this.maxMoveSpeedX;
		this.moveSpeedY = -this.maxJumpSpeed; // 高度变化
		this.changeAnimateByName("jump");
	}
	action_jump_fall() {
		this.moveSpeedX = this.maxMoveSpeedX;
		this.changeAnimateByName("fall");
	}
	// 重力影响
	gravityAffect() {
		this.moveSpeedY += this.jumpWeight;
	}
	isOnGround() {
		return this.posY >= this.groundPosY;
	}
	isfalling() {
		return this.moveSpeedY > 0;
	}
	// 拉回屏幕 防止越界
	dragBack() {
		// 水平拉回屏幕 防止越界
		if (this.posX < 0) this.posX = 0;
		else if (this.posX + this.drawWidth > this.CANVAS_WIDTH) this.posX = this.CANVAS_WIDTH - this.drawWidth;
		// 垂直拉回屏幕 防止越界
		if (this.posY < 0) this.posY = 0;
		else if (this.posY + this.drawHeight > this.CANVAS_HEIGHT) this.posY = this.CANVAS_HEIGHT - this.drawHeight;
	}
	// 移动
	move(timeInterval: number): void {
		this.posX += this.moveSpeedX * timeInterval;
		this.posY += this.moveSpeedY * timeInterval;
	}
	setState(stateName: ValueOf<typeof ShadowDog.StateNamesEnum>) {
		this.currentState = this.StateMap[stateName];
		this.currentState.enter();
	}
	update(timeInterval: number): void {
		this.currentState.update();
		this.currentState.inputsHandler(this.inputListener.inputs);
		this.move(timeInterval);
		this.dragBack();
		super.update(timeInterval);
	}
	isAlive(): boolean {
		return this.aliveFlag;
	}
	// 发呆状态
	static InnerClass_IdleState = class InnerClass_IdleState extends State {
		shadowDog: ShadowDog;
		constructor(shadowDog: ShadowDog) {
			super(ShadowDog.StateNamesEnum.Idle);
			this.shadowDog = shadowDog;
		}
		enter(): void {
			this.shadowDog.action_idle();
		}
		update(): void {
			return;
		}
		inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>): void {
			if (inputs.includes(InputListener.KeyMaps.PressRight)) this.shadowDog.setState(ShadowDog.StateNamesEnum.RunningRight);
			if (inputs.includes(InputListener.KeyMaps.PressUp)) this.shadowDog.setState(ShadowDog.StateNamesEnum.JumpUp);
			if (inputs.includes(InputListener.KeyMaps.PressLeft)) this.shadowDog.setState(ShadowDog.StateNamesEnum.MoveBack);
			if (inputs.includes(InputListener.KeyMaps.PressDown)) this.shadowDog.setState(ShadowDog.StateNamesEnum.Sit);
		}
	};
	static InnerClass_RunningRightState = class InnerClass_RunningRightState extends State {
		shadowDog: ShadowDog;
		constructor(shadowDog: ShadowDog) {
			super(ShadowDog.StateNamesEnum.RunningRight);
			this.shadowDog = shadowDog;
		}
		enter(): void {
			this.shadowDog.action_ahead();
		}
		update(): void {
			return;
		}
		inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>): void {
			if (inputs.length == 0) this.shadowDog.setState(ShadowDog.StateNamesEnum.Idle);
		}
	};
	static InnerClass_MoveBackState = class InnerClass_MoveBackState extends State {
		shadowDog: ShadowDog;
		constructor(shadowDog: ShadowDog) {
			super(ShadowDog.StateNamesEnum.RunningRight);
			this.shadowDog = shadowDog;
		}
		enter(): void {
			this.shadowDog.action_back();
		}
		update(): void {
			return;
		}
		inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>): void {
			if (inputs.length == 0) this.shadowDog.setState(ShadowDog.StateNamesEnum.Idle);
		}
	};
	static InnerClass_JumpUpState = class InnerClass_JumpUpState extends State {
		shadowDog: ShadowDog;
		constructor(shadowDog: ShadowDog) {
			super(ShadowDog.StateNamesEnum.RunningRight);
			this.shadowDog = shadowDog;
		}
		enter(): void {
			this.shadowDog.action_jump_up();
		}
		update() {
			this.shadowDog.gravityAffect(); // 重力影响
		}
		inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>): void {
			if (this.shadowDog.isfalling()) this.shadowDog.setState(ShadowDog.StateNamesEnum.JumpFall);
		}
	};
	static InnerClass_JumpFallState = class InnerClass_JumpFallState extends State {
		shadowDog: ShadowDog;
		constructor(shadowDog: ShadowDog) {
			super(ShadowDog.StateNamesEnum.RunningRight);
			this.shadowDog = shadowDog;
		}
		enter(): void {
			this.shadowDog.action_jump_fall();
		}
		update() {
			this.shadowDog.gravityAffect(); // 重力影响
		}
		inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>): void {
			if (this.shadowDog.isOnGround()) this.shadowDog.setState(ShadowDog.StateNamesEnum.Idle);
		}
	};
	static InnerClass_SetState = class InnerClass_SetState extends State {
		shadowDog: ShadowDog;
		constructor(shadowDog: ShadowDog) {
			super(ShadowDog.StateNamesEnum.RunningRight);
			this.shadowDog = shadowDog;
		}
		enter(): void {
			this.shadowDog.action_sit();
		}
		update() {
			return;
		}
		inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>): void {
			if (inputs.length == 0) this.shadowDog.setState(ShadowDog.StateNamesEnum.Idle);
		}
	};
}
