function getFirstElement(arr, db) {
    const result = db.find(info => info.id === arr[0]);
    return result.name;
}

export {getFirstElement}