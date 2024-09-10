
export interface Passenger{
    name:string;
    children?:string[];
}

const passenger1: Passenger = {
    name:'Isaac',
}

const passenger2: Passenger = {
    name:'Juan',
    children:['Paco','Lucas'],
}

const printChildren = (passenger:Passenger):number=>{
    const howManyChildren = passenger.children?.length || 0;
    console.log(howManyChildren);

    return howManyChildren;
};

printChildren(passenger2);