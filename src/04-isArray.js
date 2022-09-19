/**
 ** @author {Elisabetta}
 ** @function
 ** @return
 * @param collection
 **/



const isArray = (collection) => {
    const isRequired = () => {throw new Error('collection is required')};
    if(collection !== undefined)
    {
        if(Array.isArray(collection)){
            return true;
        }
        else
            return false;
    }

    else
        isRequired();
}

export default isArray;