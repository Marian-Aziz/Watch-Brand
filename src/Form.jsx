import React from "react";



const Form = () => {
    function  MyForm() {
        console.log('handle click called');
        
        }
        const ClickName =(name) => {
            console.log('handle click submit' +name);
        }
        const ClicEmail =(Email) => {
            console.log('handle click submit' +Email);
        }
    
     
    
    
    

  return (
    <div>
<form onSubmit={MyForm}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        // value={inputs.username || ""} 
        onChange={ClickName}
      />
      </label>
      <label>Enter your email:
        <input 
          type="text" 
          name="username" 
        //   value={inputs.email || ""} 
        onChange={ClicEmail}
        />
        </label>
        <input type="submit" />
    </form>
    {/* <button onClick={(name) => ClickName("marian")}>Submit</button> */}

    </div>
  )
}

export default Form