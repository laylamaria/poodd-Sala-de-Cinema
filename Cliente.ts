export class Cliente{
    private id: string;
    private fone: string;

    public constructor (id:string, fone:string){
        this.id=id;
        this.fone=fone;
    }

    public getId():string{
        return this.id;
    }

    public toString():string{
        return this.id + ":" + this.fone;
    }
}