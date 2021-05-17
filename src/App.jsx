import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
    let [column, setColumn] = useState([0, 0, 0, 0])
    let [opc,setOpc]=useState(0.5)
    let showColumn = []
    const UNITS = ["勝 ", "敗 ", "連勝 最大", "連勝"]
    let plusBTN = []
    let minusBTN = []
    let chgColumn = []
    let [fontS, setFsize] = useState(50)
    let [fontColor, setFcolor] = useState("#000000")
    let columnFont = {
        fontSize: fontS,
        color: fontColor
    }
    for (let i = 0; i < 4; i++) {
        showColumn.push(<span style={columnFont}>{column[i]}{UNITS[i]}</span>)
        plusBTN.push(<><button style={{width:90,height:60,fontSize:"1em"}} id={"plus" + i} onClick={() => {
            let newColumn = [...column]
            newColumn[i] += 1
            if (i == 0) {
                newColumn[2] += 1
                if (newColumn[3] < newColumn[2]) {
                    newColumn[3] = newColumn[2]
                }
            } else if (i == 1) {
                newColumn[2] = 0
            }
            setColumn(newColumn)
        }}>+</button> </>)
        minusBTN.push(<><button style={{width:90,height:60,fontSize:"1em"}} onClick={() => {
            let newColumn = [...column]
            newColumn[i] -= 1
            setColumn(newColumn)
        }}>-</button> </>)
        chgColumn.push(<><input style={{width:82,height:60,fontSize:"1em"}} value={column[i]} type="number" onChange={
            (e) => {
                let newColumn = [...column]
                newColumn[i] = Number(e.target.value)
                setColumn(newColumn)
            }
        } />  </>)
    }
    return (
        <div　style={{backgroundColor:"rgba(255,255,255,"+opc+")"}}>
            {showColumn}
            <br />
            <div style={{fontSize:50}}>
                {plusBTN}
                <br />
                {chgColumn}
                <br />
                {minusBTN}
                <br />
                文字サイズ{fontS}px:
                <button style={{width:60,height:60,fontSize:"1em"}} onClick={() => {
                    setFsize(fontS + 1)
                }}>+</button>
                <button style={{width:60,height:60,fontSize:"1em"}} onClick={() => {
                    setFsize(fontS - 1)
                }}>-</button>
                <br />
                背景の透過度合い:
                <input min="0.0" max="1.0" step="0.1" type="range" onChange={(e)=>{
                    setOpc(e.target.value)
                }}/>
                {opc*100}%
                <br />
                文字色:
                <input style={{height:60}} value={fontColor} type="color" onChange={
                    (e) => {
                        setFcolor(e.target.value)
                    }
                } /> 
                <input style={{width:200,height:60,fontSize:"1em"}} value={fontColor} type="text" onChange={
                    (e) => {
                        setFcolor(e.target.value)
                    }
                } />
            </div>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))