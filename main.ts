let ledsToLight = 0
// This sets a variable with the name "neopixels" and tells the micro:bit there are neopixels at a specific pin (p0 in this case) and how many LEDs there are (8 in this case)
let strip = neopixel.create(DigitalPin.P0, 16, NeoPixelMode.RGB)
// Tells the micro:bit to actually turn the lights on how they have been programmed
strip.show()
let pixelsLit = 1
let pixelRotation = 0
strip.setPixelColor(0, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
basic.forever(function () {
    ledsToLight = 15 - Math.round(Math.map(Math.constrain(input.lightLevel(), 0, 50), 0, 50, 1, 15))
    strip.rotate(1)
    pixelRotation += 1
    strip.show()
    basic.pause(Math.map(Math.constrain(input.lightLevel(), 0, 50), 0, 50, 20, 100))
    if (pixelRotation > 15) {
        pixelRotation = 0
        if (ledsToLight > pixelsLit) {
            strip.setPixelColor(pixelsLit, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
            pixelsLit += 1
        }
        if (ledsToLight < pixelsLit) {
            strip.setPixelColor(pixelsLit, neopixel.rgb(0, 0, 0))
            pixelsLit += -1
        }
    }
})
