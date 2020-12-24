import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import "./AddMemeForm.css"
const INITIAL_STATE = {
    url: "",
    topText: "",
    bottomText: "",
    id:""
};
const AddMemeForm =({addMeme}) => {
    const [formData, setFormData]= useState(INITIAL_STATE);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        })
        )
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        addMeme({...formData, id:uuid()})
        setFormData(INITIAL_STATE);
    }

    return (
        <>
        <div > <h1>Meme Generator</h1></div>
        <div style={{align:'center'}}>
            <form onSubmit={handleSubmit} className="AddMemeForm">
                <label htmlFor="url">URL</label>
                <input type="text" name="url" id="url" placeholder="Enter URL Here" value={formData.url} onChange={handleChange} />
                <label htmlFor="topText">Top Text</label>
                <input type="text" name="topText" id="topText" placeholder="Top Text" value={formData.topText} onChange={handleChange} />
                <label htmlFor="bottomText">Bottom Text</label>
                <input type="text" name="bottomText" id="bottomText" placeholder="Bottom Text" value={formData.bottomText} onChange={handleChange} />
            <button>Add Meme</button>
            </form>
        </div>
</>
    )
}
export default AddMemeForm;