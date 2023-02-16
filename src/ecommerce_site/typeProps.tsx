export type signupProps={
   name:string,
   email:string,
   password:string,
   role:string
   cartArr:any;
}

export type ecommerceProps={
    signupArr:signupProps[],
    loginObj:any
    productArr:any
    CartArr:any
    productQuantity:number
    calPrice:number
    searchArr:any
    searchMsg:string
}
export type state={
    EcommerceReducer:ecommerceProps
}

export type ObjProps={
    id:number,
    title:string,
    description:string,
    price:number,
    discountPercentage:number,
    rating:number,
    stock:number,
    brand:string,
    category:string,
    thumbnail:string,
    images:string[],
}

export type FetchProps={
    data:ObjProps[]
}