
function DrawPyramid(num:number):void{

    var a, b, c: number;
    var star, space: string;

    for (a = 0; a < num; a++) {
        star = "";
        space = "";

        for (b = 0; b < (num - a - 1); b++) {
            space += " ";
        }

        for (c = 0; c < (2 * a + 1); c++) {
            star += "*";
        }
        console.log(space + star);
    }   
}

var x:string = process.argv[2]
DrawPyramid(parseInt(x));