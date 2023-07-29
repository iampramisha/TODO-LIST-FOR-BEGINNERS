import React from 'react'
import { useState } from 'react';
function TodoList(){
    const [activity,setActivity]=useState("");
    const[listData,setlistData]=useState([]);
    function addActivity(){
        setlistData((listData)=>{
        const updatedList=[...listData,activity]
        console.log(updatedList);
        setActivity('');
        return updatedList;
        }
    )}
    function removeActivity(i){
        const updatedListData=listData.filter((elem,id)=>{
            return i!==id;
        }
        )
        setlistData(updatedListData);
    }
    function removeAll(){
        setlistData([])
    }
    return(
    <>
    <div className='container'>
        <div className='header'>To-DO list</div>
        <input type='text' placeholder='add activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>
        <p className='list-heading'>Here is your list :{")"}</p>
        {listData!==[] && listData.map((data,i)=>{
            return(
                <>
                <p key={i}>
                    <div className='listData'>{data}</div>
                    <div className='btn-position'>
                    <button onClick={()=>removeActivity(i)}>Remove</button>
                    </div>
                </p>
                </>
            )
        }

        )}
        {listData.length>=1 &&
        <button onClick={removeAll}>Remove all</button>}
    </div>
    </>
    )
}
export default TodoList;