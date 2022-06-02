let Izq = 0
let Der = 0
basic.forever(function () {
    Izq = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    Der = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (!(Izq) && Der) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 10)
    }
    if (!(Der) && Izq) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
    }
    if (!(Der) && !(Izq)) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
    }
})
