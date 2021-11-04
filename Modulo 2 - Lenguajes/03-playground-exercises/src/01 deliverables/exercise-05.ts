console.log("************** SLOT MACHINE *********************");
class SlotMachine {
    count: number;

    constructor () {
        this.count = 0;
    }

    randomBool(): boolean {
        return Math.random() > 0.5;
    }

    play(): void {
        this.count++;

        let arrBool: boolean[] = [
            this.randomBool(),
            this.randomBool(),
            this.randomBool(),
        ]

        let winner: string = `Congratulations!!! You won ${this.count} coins!!`;
        let loser: string = `Good luck next time!!`;

        if (arrBool.some(element => element === false)) {
            console.log(loser);
        } else {
            console.log(winner);
            this.count = 0;
        }
    }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();