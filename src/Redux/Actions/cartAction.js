import * as Types from './actionTypes'


export function addToCartSuccess(cart){
    return {type:Types.ADD_TO_CART,cart};
}