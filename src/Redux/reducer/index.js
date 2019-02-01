let defaultState = {currentIndex:0,lastIndex:0,addClass:false}
let reducer = function(state=defaultState,action){
    switch(action.type){
        case 'CHANGE_CURRENTINDEX':
            return {
                ...state,
                currentIndex:action.payload.currentIndex,
                lastIndex:action.payload.lastIndex
            }
        case 'CHANG_NAVBAR_STATE' :
            return {
                ...state,
                addClass:action.payload.addClass
            }
        default :
         return state;
    }
}
export default reducer;