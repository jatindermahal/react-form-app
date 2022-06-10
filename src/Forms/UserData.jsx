import { useState,useEffect } from "react";
import "../App.css"

export default function UserData(){
    const [user,setUser] = useState({});

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("The form was submitted. Data: " + JSON.stringify(user));
    }

    const handleChange = (e)=>{
        const{target} = e;
        const {name} = target;
        let value = null;
        
        if (target.type==="select-multiple") {
            value=[];
            for (let i = 0; i < target.options.length; i++) {
                
                if (target.options[i].selected) {
                    value.push(target.options[i].value)
                }
                
            }
        }
        else if(target.type === "checkbox"){
            value = target.checked;
        }
        else{
            value = target.value;
        }
        setUser(()=>{
            return {...user,[name]:value}
        })
    }

    useEffect(()=>{
        setUser({
            "fullName": "Jatinder",
            "program": "Computer Programming",
            "campus": "Markham",
            "enrolled": true,
            "housing": "residence"
        });
    },[])
    return (
    <form onSubmit={handleSubmit}>
        <label >Full Name:
            <input className="align" type="text" name="fullName" value={user.fullName} onChange={handleChange} />
        </label>
        <br />

        <label>Full Program Name:
            <textarea name="program" value={user.program} onChange={handleChange}></textarea>
        </label>
        <br />
        
        <label>Campus: 
        <select value={user.campus} name="campus" multiple={true} onChange={handleChange}>
            <option value="King">King</option>
            <option value="Markham">Markham</option>
            <option value="Newnham">Newnham</option>
            <option value="Downtown">Downtown</option>
        </select>
        </label>
        <br />

        <label>Enrolled:
        <input type="checkbox" name="enrolled" checked={user.enrolled} onChange={handleChange} />
        </label>
        <br />

        <label>Housing:<br />
        <input id="residence" type="radio" value="residence" name="housing" checked={user.housing === "residence"} onChange={handleChange} />
        <label htmlFor="residence">Residence</label>
        <input id="off-campus" type="radio" value="off campus" name="housing" checked={user.housing === "off campus"} onChange={handleChange} />
        <label htmlFor="off-campus">Off Campus</label>
        </label>

        <br />
        <input type="submit" />
    
    </form>
    )
}