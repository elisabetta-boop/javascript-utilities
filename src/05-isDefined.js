/**
 ** @author {Elisabetta}
 ** @function
 ** @return
 * @param args
 **/

const isDefined = (args) => {
    if(typeof args !== 'undefined')
        return true;
    else
        return false;
}

export default isDefined;