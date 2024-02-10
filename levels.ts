//% color=#20bf6b weight=100 icon="\uf0ae"
namespace levels {

    let currentLevel: number = 1;
    const levels: Array<() => void> = [];

    /**
    Change the current level that is playing
    **/
    //% block
    //% l.defl=1
    export function startLevel(l: number = 1) {
        currentLevel = l;
        const handler = levels[l];
        if (handler) {
            handler();
        } else {
            console.error("ERROR: No 'on start level' block found for level " + l);
        }
    }

    /**
    Restart the current level
    **/
    //% block
    export function restartLevel() {
        startLevel(currentLevel);
    }

    /**
    Start the next level (increment level by one)
    **/
    //% block
    export function startNextLevel() {
        startLevel(currentLevel + 1);
    }

    /**
    Set the code to run on the start of each level
    @param l the level number
    **/
    //% block="on start level $l"
    //% l.defl=1
    export function onStartLevel(l: number = 1, handler: () => void): void {
        levels[l] = handler;
    }
}