export interface IOrderDatail{
    ProductId: number
    ProductName: string
    Stock: number
    Price: number
}

export class OrderDetail implements IOrderDatail{

    ProductId!: number;
    ProductName!: string;
    Stock!: number;
    Price!: number;

    constructor(){}

}
