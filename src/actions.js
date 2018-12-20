function increament() { 
    // return dispatch => {   
            return { type: 'INCREAMENT'};    
        // }
}
const actions = {
    increament
};

console.log(actions.increament())

export default actions;