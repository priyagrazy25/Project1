export class Payment{
    Id:string;
    Testid:string;
    Username:string;
    Testmodel:string;
    Teststatus:string;
    Testdate:string;
    Result:string;
    constructor(id?,Testid?,username?,testmodel?,teststatus?,testdate?,result?){
        this.Id=id;
        this.Testid=Testid;
        this.Username=username;
        this.Testmodel=testmodel;
        this.Teststatus=teststatus;
        this.Testdate=testdate;
        this.Result=result;
    }
}