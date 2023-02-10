export type signupProps={
   name:string,
   email:string,
   password:string,
   role:string
}

export type ecommerceProps={
    signupArr:signupProps[],
    productArr:any
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