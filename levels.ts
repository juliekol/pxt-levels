//% color=#20bf6b weight=100 icon="\uf0ae"
namespace levels {

    /**
    Change the current level that is playing
    **/
    //% block
    //% l.defl=1
    export function startLevel(l: number = 1) {
    }

    /**
    Restart the current level
    **/
    //% block
    export function restartLevel() {
    }

    /**
    Start the next level (increment level by one)
    **/
    //% block
    export function startNextLevel() {
    }

    /**
    Set the code to run on the start of each level
    @param l the level number
    **/
    //% block="on start level $l"
    //% l.defl=1
    export function onStartLevel(l: number = 1, handler: () => void): void {
    }
}