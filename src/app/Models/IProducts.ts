export interface IProducts{
    Id: number;
    Type: string
    Brand: string
    Name: string
    Stock: number
    Price: number
}

export class Products implements IProducts{
     
     Id!: number;
     Type!: string;
     Brand!: string;
     Name!: string;
     Stock!: number;
     Price!: number;

    constructor(){}

}