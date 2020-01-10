import React from 'react'

export default function Form(props){
        return(
            <div>
                <input name='title' placeholder='input' onChange={(e)=>props.handleChange(e)} value={props.title}/>
                <input name='img' placeholder='input' onChange={(e)=>props.handleChange(e)} value={props.img}/>
                <input name='content' placeholder='input' onChange={(e)=>props.handleChange(e)} value={props.content}/>
                <button onClick={()=>props.submitPost()}>Submit Post</button>
            </div>
        )
    
}