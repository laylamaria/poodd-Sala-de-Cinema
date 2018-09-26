declare function require(msg:string):any;
var readline=require("readline-sync");

import {Cliente} from "./cliente";
import {Cinema} from "./cinema"

let cinema: Cinema = new Cinema(0);

while (true){
    console.log("-----------------------------------------------");
    let possiveisComandos : string = "\n" + 
    "show - mostra as cadeiras do cinema \n" +
    "reservar - reserva a cadeira\n" + 
    "cancelar - cancela reserva\n" + 
    "init - pede a quantidade de cadeiras no cinema \n" +
    "end - para o programa. \n";
    console.log(possiveisComandos);
    let comando : string = readline.question("Digite um comando: ");
    if(comando == "end"){
    console.log("Até a próxima!");
    break;    
    }else{
    switch(comando){
 
        case "init":
            let ace:number=readline.question("Digite a quantidade de cadeiras: ");
            cinema=new Cinema(ace);
            break;

        case "show":
            console.log(cinema.mostrar());
            break;

        case "reservar":
            let id:string=(readline.question("Digite o nome do cliente: "));
            let fone:string=(readline.question("Digite o fone do cliente: "));
            let indice:number=(readline.question("Digite o indice do cliente: "));
            cinema.reservar(id,fone,indice);
            break;
        
        case "cancelar":
            let ide:string=(readline.question("Digite o nome do cliente: "));
            
            if(cinema.cancelar(ide) == true){
                console.log("Reserva cancelada com sucesso!");
            }else{
                console.log("Este cliente nao esta no cinema.");
            }
            break;

        case "buscar":
            let idd:string=readline.question("Digite o nome do cliente: ");
            console.log(cinema.buscarCliente(idd));
        default:
            console.log("Opcao Invalida!");
        
    }
}

}


