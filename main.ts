NFC.nfcEvent(function () {
    if (NFC.getUID() == cardID1) {
        basic.showIcon(IconNames.Heart)
        radio.sendNumber(1)
    } else if (NFC.getUID() == cardID2) {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(2)
    } else if (NFC.getUID() == cardID3) {
        basic.showIcon(IconNames.House)
        radio.sendNumber(3)
    } else if (NFC.getUID() == cardID4) {
        radio.sendNumber(4)
    } else if (NFC.getUID() == cellID5) {
        radio.sendNumber(5)
    }
})
let cellID5 = ""
let cardID4 = ""
let cardID3 = ""
let cardID2 = ""
let cardID1 = ""
NFC.NFC_setSerial(SerialPin.P14, SerialPin.P13)
cardID1 = "76456E95"
cardID2 = "76C75095"
cardID3 = "DDFAD604"
cardID4 = "2D08D404"
cellID5 = "59F57EA2"
radio.setGroup(20)
