import React from 'react';
import w from './Work.module.css'
import WorkItem from "./WorkItem/WorkItem"
import { useSelector } from 'react-redux';
import {AirsLoadingBlock} from "../index"
import fetchWorks from "../../Redux/Actions/works"
import { useDispatch } from 'react-redux';
const Work = () =>{
    const dispatch = useDispatch()
    const works = useSelector(({works}) => works.items);
    const isLoaded = useSelector(({works}) => works.isLoaded);
    const {sortBy, loades} = useSelector(({filters}) => filters);
    React.useEffect(() => {
        dispatch(fetchWorks(sortBy,loades))
      }, [sortBy,loades])
    return(
        <div className={w.wrapper}>
          <div className={w.diffrent}> 
             {isLoaded ? works.map((obj) => (
          <WorkItem id={obj.id} imageUrl={obj.imageUrl} />
        )) : Array(9).fill(0).map((_, index) => <AirsLoadingBlock key={index}/>)}
        </div>
      </div>
    )
}
export default Work;
// 8 ролик реакт пицци доделать этот компонент