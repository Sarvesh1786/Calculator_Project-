import React, { useState } from "react";
import "./Cal.css";
import { Button, Grid, Input, Segment } from "semantic-ui-react";

const Cal = () => {

  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };
  const Del = () => {
    // setResult(result.slice(0,result.length -1))
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Invaild");
    }
  };


  return (
    <>
      <h1>Calculator Project </h1>
      <Grid className="Header">
        <Grid.Column>
          <Segment.Group>
            <Segment>
              <p>𝐂𝐚𝐥𝐜𝐮𝐥𝐚𝐭𝐨𝐫 𝐏𝐫𝐨𝐣𝐞𝐚𝐜𝐭 </p>
            </Segment>
           
            <Segment secondary>
              <Input className="input" type="text " value={result}></Input>
              <div className="keypad">
                <Button  color="blue" name="clear" id="Clear" size="mini" onClick={clear}>
                  Clear
                </Button>
                <Button name="Del" id="Del" color="blue" size="mini" onClick={Del}>
                 
                  Del
                </Button>
                <Button name="/" color="blue" size="mini">&divide;</Button>
                <Button name="7" size="mini" onClick ={handleClick}>7</Button>
                <Button name="8" size="mini" onClick ={handleClick}>8</Button>
                <Button name="9" size="mini" onClick ={handleClick}>9</Button>

                <Button name="*" color="blue" size="mini" onClick ={handleClick}>&#215;</Button>
                <Button name="6" size="mini" onClick ={handleClick}>4</Button>
                <Button name="5" size="mini" onClick ={handleClick}>5</Button>
                <Button name="4" size="mini" onClick ={handleClick}>6</Button>

                <Button name="-" color="blue" size="mini" onClick ={handleClick}>&#8722;</Button>
                <Button name="3" size="mini" onClick ={handleClick}>1</Button>
                <Button name="2" size="mini" onClick ={handleClick}>2</Button>
                <Button name="1" size="mini" onClick ={handleClick}>3</Button>

                <Button name="+" color="blue" size="mini" onClick={handleClick}>&#43;</Button>
                <Button name="0" size="mini" onClick ={handleClick}>0</Button>
                <Button name="00" size="mini" onClick ={handleClick}>00</Button>


                <Button name="." size="mini" onClick ={handleClick}>&#8729;</Button>
                <Button name="=" id="Equal"  color="blue" size="mini"  onClick={calculate} >&#61;</Button>
              </div>
            </Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
    </>
  );
};              

export default Cal;
