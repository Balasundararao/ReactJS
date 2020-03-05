import {BUY_CAKE} from './cakeTypes.js'

export const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'Buy Cake action '
    }
}