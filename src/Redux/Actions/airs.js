import axios from 'axios'
    export const setLoaded = (val) =>({
        type:'SET_LOADED',
        payload:val,
    })

    
 const fetchAirs = (sortBy, category) => (dispatch) =>{
    dispatch(setLoaded(false));
    axios.get(`http://localhost:5000/air/gets ${category && `/${category}` || '' }`).then(({data}) => {
        dispatch(setAirs(data));
})
// const sqlSelect = "SELECT * FROM breeze.air";
// axios({
//     method:'GET',
//     url:'air/get',
//     baseURL:'http:localhost:5000/',}).then(data => {
//         dispatch(setAirs(data));
//     }).catch(error => {
//     console.log(error);
//     });
};

// fetch('http://localhost:5000/air/get', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(),
//     })
//       .then((response) => response.json())
//       .then((result) => alert(result.response.msg))
//   };



export const setAirs = (items) => ({
type:"SET_AIRS",
payload:items,
});

export default fetchAirs;