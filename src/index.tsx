import {
  Button,
  definePlugin,
  ServerAPI,
  staticClasses,
} from "decky-frontend-lib";
import { useState, VFC } from "react";
import { FaCalculator } from "react-icons/fa";
import isNumber from "is-number";


const Content: VFC<{ serverAPI: ServerAPI }> = ({ serverAPI }) => {
  let [result, setResult] = useState("");

  const clear = () => {
    setResult("");
  }
  const backSpace = () => {
    setResult(result.slice(0, result.length - 1))
  }

  const calculate = () => {
    try {
      result = eval(result).toString()
      if (result.includes('.')) {
        let r = Number.parseFloat(result);
        r = + eval(result);
        setResult(r.toFixed(4).toString());
      } else {
        setResult(eval(result).toString());
      }

    } catch (err) {
      setResult("Error");
    }

  }
  return (
    <div>
      <input style={{ backgroundColor: 'transparent', width: '100%', 'color': 'white', fontSize: 'xx-large' }} type="text" value={result} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 'minmax(60px, auto)' }}>
        <Button onClick={clear} style={{ gridColumn: '1/3', gridRow: '1', backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }}>Clear</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={backSpace}>C</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat(isNumber(result.charAt(result.length-1)) ? "/" : "")) }}>/</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat("7")) }}>7</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat("8")) }}>8</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat("9")) }}>9</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat(isNumber(result.charAt(result.length-1)) ? "*": "")) }}>*</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat("4")) }}>4</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat("5")) }}>5</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat("6")) }}>6</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat(isNumber(result.charAt(result.length-1)) ? "-": "")) }}>-</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat("1")) }}>1</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat("2")) }}>2</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat("3")) }}>3</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat(isNumber(result.charAt(result.length-1)) ? "+" : "")) }}>+</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat("0")) }}>0</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }} onClick={(_: any) => { setResult(result.concat(isNumber(result.charAt(result.length-1)) ? ".": "")) }}>.</Button>
        <Button onClick={calculate} style={{ gridColumn: '3/5', gridRow: '5', backgroundColor: 'transparent', color: 'white', fontSize: 'larger' }}>=</Button>
      </div>
    </div>
  )
}

export default definePlugin((serverApi: ServerAPI) => {
  return {
    title: <div className={staticClasses.Title}>Calculator</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaCalculator />,
    onDismount() {
    },
  };
});
