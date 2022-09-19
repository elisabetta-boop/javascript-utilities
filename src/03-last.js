/**
 ** @author {Elisabetta}
 ** @function
 ** @return
 * @param collection
 * @param n
 **/

const isRequired = () => {throw new Error('Collection is required')};

const last = (collection, n) => {
  if (collection !== undefined) {
    if(n !== undefined) {
      if(n < 1)
      {
        const myOnlyLast = collection.pop();
        return myOnlyLast;
      }
      else if(n === 1)
      {
        const myOnlyLast = collection.splice(collection.length-1);
        return myOnlyLast;
      }
      else {
        const myLast = collection.splice(collection.length-n,n);
        return myLast;
      }
    }
    else {
      const myOnlyLast = collection.pop();
      return myOnlyLast;
    }
    
  }
  else
    isRequired();

}
export default last;
