function Addition(a:string, b:string):string;

function Addition(a:number, b:number): number;

function Addition(a: any, b:any): any {
    return a + b;
}
Addition("Hello ","foo"); // outputs Hello foo
Addition(2,3); //outpus 5
