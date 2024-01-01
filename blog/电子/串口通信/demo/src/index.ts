import { SerialPort, SerialPortMock } from "serialport";

// let serialPort = new SerialPort({ baudRate: 9600, autoOpen: false, path: "" });

async function main() {
  SerialPortMock.binding.createPort("COM3_Mock", { echo: true });
  let ports = await SerialPortMock.list();
  console.log(ports);
  // Create a port
  let path = ports[0].path;
  let port = new SerialPortMock({
    path: "COM3_Mock",
    baudRate: 19200,
    autoOpen: false,
  });
  console.log("connecting...");
  port.open((err) => {
    if (err) throw err;
    console.log("opened!");
    port.on("data", (chuck) => {
      console.log("chuck:");
      console.log(chuck);
    });
    setInterval(() => {
      console.log("write");
      port.write("111");
    }, 1000);
  });
}
main();
