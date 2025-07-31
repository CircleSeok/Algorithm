    let fs = require("fs");
    let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
    class LCSequence {
        constructor(StringA, StringB) {
            this.LcsMap = new Array(StringA.length + 1);
            this.StringA = StringA;
            this.StringB = StringB;
            for (let i = 0; i < this.LcsMap.length; i++) {
                this.LcsMap[i] = new Array(StringB.length + 1).fill(0);
            }
            this.find();
        }

        find() {
            for (let i = 1; i < this.LcsMap.length; i++) {
                for (let j = 1; j < this.LcsMap[0].length; j++) {
                    if (this.StringA[i - 1] === this.StringB[j - 1]) {
                        this.LcsMap[i][j] = this.LcsMap[i - 1][j - 1] + 1;
                    } else {
                        this.LcsMap[i][j] = Math.max(this.LcsMap[i][j - 1], this.LcsMap[i - 1][j]);
                    }
                }
            }
        }

        GetMaxLength() {
            return this.LcsMap[this.StringA.length][this.StringB.length];
        }
    }

    const LCS = new LCSequence(input[0], input[1]);
    console.log(LCS.GetMaxLength());