import { useRef } from "react";
export default function UserFile(params) {

    const fileInputRef = useRef();
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (fileInputRef.current.files.length) 
            console.log("submitting file with name: ",fileInputRef.current.files[0].name)
        else
            console.log("No file provided");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Upload file Here:
                <br />
                <input type="file" ref={fileInputRef} />
                <br />
                <button type='submit'>Submit</button>
            </label>
        </form>
    )
}