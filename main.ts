if (gatortemp.temp(AnalogPin.P0, GatorTempType.F) >= 72) {
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P3, 0)
} else {
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
basic.forever(function () {
    basic.showString("" + (gatortemp.temp(AnalogPin.P0, GatorTempType.F)))
})
