import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
    let [column, setColumn] = useState([0, 0, 0, 0])
    let showColumn = []
    const UNITS = ["勝 ", "敗 ", "連勝 最大", "連勝"]
    let plusBTN = []
    let minusBTN = []
    let chgColumn=[]
    let [fontS,setFsize] = useState(20)
    let columnFont={
        fontSize: fontS,
    }
    for (let i = 0; i < 4; i++) {
        showColumn.push(<span style={columnFont}>{column[i]}{UNITS[i]}</span>)
        plusBTN.push(<button id={"plus"+i} onClick={() => {
            let newColumn = [...column]
            newColumn[i] += 1
            if(i==0){
                newColumn[2] += 1
                if(newColumn[3]<newColumn[2]){
                    newColumn[3]=newColumn[2]
                }
            }else if(i==1){
                newColumn[2] = 0
            }
            setColumn(newColumn)
        }}>+</button>)
        minusBTN.push(<button onClick={() => {
            let newColumn = [...column]
            newColumn[i] -= 1
            setColumn(newColumn)
        }}>-</button>)
        chgColumn.push(<input value={column[i]} type="number" onChange={
            (e)=>{
                let newColumn = [...column]
                newColumn[i] =e.target.value
                setColumn(newColumn)
            }
        }/>)
    }
    return (
        <div>
            {showColumn}
            <br />
            {plusBTN}
            <br />
            {chgColumn}
            <br />
            {minusBTN}
            <br/>
            文字サイズ{fontS}px:
            <button onClick={() => {
                setFsize(fontS+1)
            }}>+</button>
            <button onClick={() => {
                setFsize(fontS-1)
            }}>-</button>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('app'))