export interface IClients{
    id: number;
    name: string;
    lastname: string;
    address: string;
} 

export class Clients implements IClients{

    id!: number;
    name!: string;
    lastname!: string;
    address!: string;

    constructor(){}
    
}