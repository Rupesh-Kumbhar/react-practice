import React , {useState} from "react";

function UpdateProps({expYearProp,incExperienceYearsProp}){

    const [name,setName] = useState("Rupesh");

    const changeName = ()=>{
        setName("Dexter");
    }

    // const incExperience = ()=>{
    //     incExperienceYearsProp(expYearProp + 1);
    // }
    const incExperience = ()=>{
        if(expYearProp >= 10){
            alert("Experience years cannot be more than 10");
            return;
        }
        incExperienceYearsProp(expYearProp + 1);
    }

    const decExperience = ()=>{
        if(expYearProp <= 0){
            alert("Experience years cannot be negative");
            return;
        }
        incExperienceYearsProp(expYearProp - 1);
    }

    // if (expYearProp >= 10) {
    //   alert("Experience years cannot be more than 10");
    // } else {
    //   incExperienceYearsProp(expYearProp + 1);
    // }

    const example = () => {
      console.log("First");
      return;
      console.log("Second");
    };

    return (
    <div className="col-10 m-auto"> 
        <hr />
        <h1>Update Props practice</h1>
        <p> my name is {name}  </p>

        <button onClick={changeName} >change me to Dexter</button>

        <button onClick={()=>setName("Rupesh")} >change me to Rupesh</button>

        <p> my experience is {expYearProp}</p>
        <p> Add experience years
            <button onClick={incExperience} >Add Year</button>
        </p>
        <p>
            Remove experience years 
            <button onClick={decExperience} >Subtract Year</button>
        </p>
        <p>
            Example function checking return statement, only first console log will be printed
            <button onClick={example} >Run Example</button>
        </p>

    </div>
)
}

export default UpdateProps;