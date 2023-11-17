export function RandomRange(from, to) {
    return Math.random() * (to - from) + from;
}
// 碰撞检测,判断一个坐标是否在一个矩形内
function collision_Rect_Point(rect, point) {
    return rect.posX < point.posX && point.posX < rect.posX + rect.width && rect.posY < point.posY && point.posY < rect.posY + rect.height;
}
// 碰撞检测，判断一个圆和一个矩形是否碰撞
export function collision_Rect_Circle(rect, circle) {
    // 只需要判断这个圆的中心坐标是否在一个大矩形之内，这个大矩形就是将原矩形上下左右的边长拓宽圆的一倍半径
    return collision_Rect_Point({
        posX: rect.posX - circle.radius,
        posY: rect.posY - circle.radius,
        width: rect.width + 2 * circle.radius,
        height: rect.height + 2 * circle.radius
    }, Object.assign({}, circle));
}
