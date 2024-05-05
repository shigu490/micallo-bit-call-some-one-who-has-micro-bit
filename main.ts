enum RadioMessage {
    message1 = 49434,
    hello = 49337,
    help = 43444,
    angry = 26348,
    tired = 61742,
    bye = 27985,
    thanks = 16397
}
input.onPinPressed(TouchPin.P0, function () {
    radio.setGroup(group)
    group += -1
    basic.showNumber(group)
})
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.hello)
})
radio.onReceivedMessage(RadioMessage.hello, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.EightG, function () {
    radio.sendMessage(RadioMessage.help)
})
input.onPinPressed(TouchPin.P2, function () {
    radio.setGroup(group)
    group += 1
    basic.showNumber(group)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendMessage(RadioMessage.thanks)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.bye)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("your group is")
    basic.showNumber(group)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendMessage(RadioMessage.tired)
})
radio.onReceivedMessage(RadioMessage.thanks, function () {
    basic.showString("thanks!")
})
radio.onReceivedMessage(RadioMessage.bye, function () {
    basic.showString("bye!")
    basic.showIcon(IconNames.Happy)
})
radio.onReceivedMessage(RadioMessage.help, function () {
    basic.showString("Help!")
})
radio.onReceivedMessage(RadioMessage.tired, function () {
    basic.showString("im tired")
})
let group = 0
music.ringTone(932)
basic.pause(100)
music.stopAllSounds()
radio.setGroup(1)
group = 1
