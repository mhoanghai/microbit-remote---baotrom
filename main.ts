bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
    ketnoi = 1
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    ketnoi = 0
})
let y = 0
let x = 0
let ketnoi = 0
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
ketnoi = 0
basic.forever(function () {
    if (ketnoi == 1) {
        x = input.compassHeading()
        basic.pause(500)
        y = input.compassHeading()
        if (Math.abs(x - y) > 10) {
            bluetooth.uartWriteString("1")
        } else {
            bluetooth.uartWriteString("0")
        }
    }
})
