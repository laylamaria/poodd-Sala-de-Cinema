import { Cliente } from "./Cliente";

export class Cinema{
    private cadeiras:Array<Cliente>;
    private lotacao: number;

    constructor(lotacao:number){
        this.lotacao=lotacao;
        this.cadeiras=[];
    }
    public mostrar():string{
        let res:string="[";
        for (let  i:number= 0; i< this.lotacao; i++){
             if(this.cadeiras[i]==undefined){
                res+=" - ";
            }else{
                 res+=this.cadeiras[i].toString() + " ";
            }
        }
        res+= "]\n";
        return res;
    }

    public cancelar(id:string): boolean{//cancelar
        if(this.buscarCliente(id)==undefined){
            return false;
        }else{
            this.cadeiras[this.buscarCliente(id)]=undefined;
            return true;
        }
    }
    public buscarCliente(id:string):number{
        let ind:number=0;
        for (let i of this.cadeiras){
            if(i!=undefined && i.getId()==id){
                return ind;
            }
            ind++;
        }
        return -1;
    }

    public reservar(id:string, fone:string, indice:number): boolean{
        if (this.cadeiras[indice]!=undefined){
            console.log("Cadeira ocupada!");
            return false;  
        }
        for (let i:number=0; i<this.lotacao; i++){ 
            if(this.cadeiras[i]!=undefined && this.cadeiras[i].getId()==id){
                console.log("Cliente ja esta no cinema!");
                return false;
            }
        }
        let novocliente:Cliente=new Cliente(id,fone);
        this.cadeiras[indice]=novocliente;
        return true;
    } 

}