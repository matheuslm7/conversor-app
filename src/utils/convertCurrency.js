export function convertCurrency(amount, rate){
    try{
        return parseFloat((amount * rate).toFixed(2));
    }catch(error){
        console.log(error)
        throw error;
    }
}