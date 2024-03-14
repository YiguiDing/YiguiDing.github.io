class PID {
    kp = 0.01 // 比例系数 决定了控制系统的响应速度 
    ki = 0.000001 // 积分系数
    kd = 0.005 // 微分系数 
    error_sum = 0
    update(target, current, dt) {

        let error_d = target - current // 误差: 目标值和实际值的差
        let error_s = (this.error_sum += error_d * dt) // 累积误差：误差很小时，P和D就更小了，需用误差的累积量来修复
        let error_v = error_d / dt // 速度：误差越大，速度就越大

        let P = this.kp * error_d // 比例（Proportional）
        let I = this.ki * error_s // 积分（Integral）
        let D = this.kd * error_v // 微分（Derivative）

        let output = P + I + D

        return output
    }
}

class FlyVehicle {
    tar_x = 51
    tar_y = 51
    pos_x = 50
    pos_y = 50
    speed_x = 0
    speed_y = 0
    pid_x = new PID()
    pid_y = new PID()
    rect_w = 100
    rect_h = 100
    constructor() {

    }
    update(dt) {
        this.speed_x = this.pid_x.update(this.tar_x, this.pos_x, dt)
        this.speed_y = this.pid_y.update(this.tar_y, this.pos_y, dt)

        this.pos_x += this.speed_x * dt
        this.pos_y += this.speed_y * dt
    }
    /**
     * @param {CanvasRenderingContext2D} ctx2d 
     */
    refresh(ctx2d) {
        ctx2d.save()
        ctx2d.fillStyle = 'red'
        ctx2d.fillRect(
            this.pos_x - this.rect_w / 2,
            this.pos_y - this.rect_h / 2,
            this.rect_w,
            this.rect_h
        )
        ctx2d.lineWidth = 2
        ctx2d.strokeStyle = 'pink'
        ctx2d.stroke()
        ctx2d.restore()
    }
}

class Game {
    vehicle = new FlyVehicle()
    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas) {
        this.canvas = canvas
        this.ctx2d = canvas.getContext('2d')
        this.WIDTH = canvas.width = 800
        this.HEIGHT = canvas.height = 600
        canvas.addEventListener('mousemove', (e) => {
            let tar_x = e.offsetX
            let tar_y = e.offsetY
            this.vehicle.tar_x = tar_x
            this.vehicle.tar_y = tar_y
        })
        this.animate()
    }
    update(dt) {
        this.ctx2d.clearRect(0, 0, this.WIDTH, this.HEIGHT)
        this.vehicle.update(dt)
        this.vehicle.refresh(this.ctx2d)
    }
    animate() {
        let previous = Date.now(),
            current = Date.now() + 1
        let refresh = () => {
            let dt = current - previous
            this.update(dt)
            previous = current
            current = Date.now()
            requestAnimationFrame(refresh)
        }
        requestAnimationFrame(refresh)
    }
}

function main() {
    let canvas = document.querySelector('#canvas')
    let game = new Game(canvas)

}

main()