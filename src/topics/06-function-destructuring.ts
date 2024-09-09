
export interface Product{
    description:string,
    price:number,
}

const phone:Product = {
    description:'Nokia A1',
    price:150.0,
}

const tablet:Product ={
    description:"Ipad Air",
    price:250.0,
}

interface TaxCalculationsOptions{
    tax:number,
    products:Product[];
}

export function taxCalculation(options:TaxCalculationsOptions):[number,number]{
    const {products,tax} = options;
    let total=0;
    products.forEach(({price}) => {
        total+=price;
    });

    return[total,total*tax];
}

const shoppingCart = [phone,tablet];
const tax=0.15;

const [total,taxResult] = taxCalculation({
    products:shoppingCart,
    tax:tax,
})

console.log('Total',total);
console.log('Tax',taxResult);


