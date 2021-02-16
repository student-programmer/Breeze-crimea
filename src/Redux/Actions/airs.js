import axios from 'axios'
    export const setLoaded = (val) =>({
        type:'SET_LOADED',
        payload:val,
    })

    
 const fetchAirs = (sortBy, category) => (dispatch) =>{
    dispatch(setLoaded(false));
    axios.get(`/conditioning?${category !== null ? `category=${category}` : ''}`).then(({data}) => {
        dispatch(setAirs(data));
})};


export const setAirs = (items) => ({
type:"SET_AIRS",
payload:items,
});

export default fetchAirs;