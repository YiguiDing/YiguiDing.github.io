let height = 1080;
let width = 1920;
let display = new Float32Array(width * height);

function rotation(alpha, beta, gamma) {
  // 右手笛卡尔坐标 M(a,b,y) = M_z(y) M_y(b) M_x(a)
  let rotationX = math.matrix([
    [1, 0, 0],
    [0, math.cos(alpha), math.sin(alpha)],
    [0, -math.sin(alpha), math.cos(alpha)],
  ]);
  let rotationY = math.matrix([
    [math.cos(beta), 0, math.sin(beta)],
    [0, 1, 0],
    [-math.sin(beta), 0, math.cos(beta)],
  ]);
  let rotationZ = math.matrix([
    [math.cos(gamma), math.sin(gamma), 0],
    [-math.sin(gamma), math.cos(gamma), 0],
    [0, 0, 1],
  ]);
  return math.multiply(rotationZ, rotationY, rotationX);
}

function update() {}
function renderer() {}
