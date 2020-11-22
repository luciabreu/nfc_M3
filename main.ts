NFC.nfcEvent(function () {
    if (NFC.getUID() == Atlantic) {
        radio.sendNumber(1)
    } else if (NFC.getUID() == Indic) {
        radio.sendNumber(2)
    } else if (NFC.getUID() == Pacific) {
        radio.sendNumber(3)
    } else if (NFC.getUID() == Antartic) {
        radio.sendNumber(4)
    } else if (NFC.getUID() == Artic) {
        radio.sendNumber(5)
    } else if (NFC.getUID() == Intro_1) {
        radio.sendNumber(6)
    } else if (NFC.getUID() == Intro_2) {
        radio.sendNumber(7)
    } else if (NFC.getUID() == Intro_3) {
        radio.sendNumber(8)
    } else if (NFC.getUID() == turtle) {
        radio.sendNumber(9)
    }
})
let Intro_3 = ""
let Intro_2 = ""
let Intro_1 = ""
let Artic = ""
let turtle = ""
let Pacific = ""
let Antartic = ""
let Indic = ""
let Atlantic = ""
NFC.NFC_setSerial(SerialPin.P14, SerialPin.P13)
Atlantic = "76456E95"
Indic = "76C75095"
Antartic = "DDFAD604"
Pacific = "2D08D404"
turtle = "59F57EA2"
Artic = "6EE5FBA9"
Intro_1 = "8EE3DC79"
Intro_2 = "A4F6DC79"
Intro_3 = "B1DADC79"
radio.setGroup(31)
