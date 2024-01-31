
// get all orders movie from LS
const getAllMovieLists = () => {
    const getData = localStorage.getItem('orders');
    let orders = []
    if(getData){
        orders = JSON.parse(getData);
    }
    return orders;
}


// set order in local storage
const setOrderInLocalStorage = (value) => {
    const gettingAllorders = getAllMovieLists();
    const newOrders = [...gettingAllorders, value]
    localStorage.setItem('orders', JSON.stringify(newOrders))
    return true
}


export {
    getAllMovieLists,
    setOrderInLocalStorage
}



