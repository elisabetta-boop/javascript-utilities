/**
 ** @author {Elisabetta}
 ** @function
 ** @return
 * @param collection
 * @param n
 **/

const isRequired = () => {throw new Error('Collection is required')};

function first(collection, n) {
  if (collection) {
    if (!n) return collection[0];
    else return collection.slice(0,n);
  }
    
  else 
    isRequired();
}
export default first;
