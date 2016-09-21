function Myfunction(num:number):void{

    var a, b, c: number;
    var star, space, final: string;

    for (a = 0; a < num; a++) {
        star = "";
        space = "";
        final = ""

        for (b = 0; b < (num - a - 1); b++) {
            space += " ";
        }

        for (c = 0; c < (2 * a + 1); c++) {
            star += "*";
        }

    final = space + star;
    console.log(space + star);
    }   
}

    var x:string = process.argv[2]
    Myfunction(parseInt(x));