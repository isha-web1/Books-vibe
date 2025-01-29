const getStoredReadList = () => {
// read list
const storedListStr = localStorage.getItem('read-List');
if(storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
}else{
    return [];
}

};


const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if(storedList.includes(id)) {
        // already exists, do not add it
        console.log(id, 'already exists');
    }else{
        storedList.push(id);
       const storedListStr = JSON.stringify(storedList);
         localStorage.setItem('read-List', storedListStr);
    }



};


export { getStoredReadList, addToStoredReadList };