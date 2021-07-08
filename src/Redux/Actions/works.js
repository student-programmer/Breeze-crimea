import axios from 'axios'
   export const setLoadedWorks = (val) =>({
        type:'SET_LOADED_WORKS',
        payload:val,
    })
    const fetchWorks = (noname, loades) => (dispatch) =>{
        dispatch(setLoadedWorks(false));
        axios.get(`http://breeze-crimea.ru:5000/job/work?${loades !== null ? `loades=${loades}` : ''}`).then(({data}) => {
            dispatch(setWorks(data));
    })};

export const setWorks = (items) => ({
type:"SET_WORKS",
payload:items,
});

export default fetchWorks;