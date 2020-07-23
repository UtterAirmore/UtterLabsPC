function getFirstElement(arr, db) {
    const result = db.find(info => info.id === arr[0]);
    return result.name;
}

function getPrice(id, db) {
    const result = db.find(info => info.id === id)
    return result.price
}

export {getFirstElement, getPrice}