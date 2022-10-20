
import React, { useState, useRef } from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 * 
 */

function App() {

  const [fname, setFname]= useState("");
  const [lname, setLname] = useState("");
  function data1(fname,lname) {
    this.fname = fname;
    this.lname = lname;
  }
  var data = new data1(fname,lname);

  const handle_Submit=(e)=>{
    e.preventDefault();

    // function data1(fname,lname) {
    //   this.fname = fname;
    //   this.lname = lname;
    // }

    // var data = new data1(fname,lname);
    // console.log(data.fname, data.lname, data)

  }

  const is_name_valid =()=>{
    if(typeof fname === 'string' && fname.length > 1){
      return true;
    }else{
      return false;
    }
  }

  const looksLikeMail=()=> {
    var lastAtPos = lname.lastIndexOf("@");
    var lastDotPos = lname.lastIndexOf(".");
    return (
      lastAtPos < lastDotPos &&
      lastAtPos > 0 &&
      lname.indexOf("@@") == -1 &&
      lastDotPos > 2 &&
      lname.length - lastDotPos > 2
    );
  }

  return(
    <div className="App">
      <h1>hello</h1>

      <h1>How About Them Apples</h1>
      {/* <form onSubmit={handle_Submit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name"  ref={fnameRef}/>
            <br></br>
            <p>Email</p>
            <input id='lname' name="name"   ref={emailRef}/>
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
          </label>
        </fieldset>

        <button id='submit' type="submit">Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        )
      } */}


      <form onSubmit={handle_Submit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name" value={fname} onInput={(e)=>{setFname(e.target.value)}} />
            <br></br>
            <p>Email</p>
            <input id='lname' name="name" value={lname} onInput={(e)=>{setLname(e.target.value)} }  />
            {!looksLikeMail() && <h2 style={{color: 'red'}}>Email is invalid</h2>}
          </label>
        </fieldset>

        <button id='submit' type="submit" disabled={!looksLikeMail()}>Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        )
      }
    </div>
  )
}


export default App;