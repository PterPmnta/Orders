import { BaseModel } from "./Base.Model";
import { OrderDetail } from "./IOrderDetail";
import { Products } from "./IProducts";
import { IOrders } from "./Order.Interface";

export class Orders extends BaseModel implements IOrders{
    
    ClientId!: number;
    ClientName!: string;
    Id!: number;
    DateOrder!: Date
    Detail!: Array<OrderDetail>;

    constructor(){  
        super(); 
        this.Detail = new Array<OrderDetail>();
    }

    addProductOrder(product: Products){

        let orderDetail: OrderDetail = new OrderDetail()        

        orderDetail.Stock = 1
        orderDetail.ProductName = `${product.Name} ${product.Brand}`
        orderDetail.Price = product.Price
        orderDetail.ProductId = product.Id

        let exists: number = this.Detail.filter(prod => prod.ProductId === product.Id).length

        if(exists > 0){
            let index: number = this.Detail.findIndex(prod => prod.ProductId === product.Id)
            this.Detail[index].Stock++
        }else{
            this.Detail.push(orderDetail);
        }   
    
    }
}
