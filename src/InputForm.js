import { useState, useTransition } from "react";

function InputForm(props) {
    const [input, setInput] = useState("")
    const [inputPrio, setInputPrio] = useState("")
    const [list, setList] = useState([])
    const [isPending, startTransition] = useTransition()

    const size = 30000

    const handleOnChange = (e) => {
        setInput(e.target.value)

        const tmp_list = []
        for (let i = 0 ; i < size; i++) {
            tmp_list.push(e.target.value)
        }
        setList(tmp_list)
    }

    const handleOnChangePrio = (e) => {
        setInputPrio(e.target.value)

        startTransition(() => {
            const tmp_list = []
            for (let i = 0 ; i < size; i++) {
                tmp_list.push(e.target.value)
            }
            setList(tmp_list)
        })
    }

    return (
      <div>
        Without priority: 
        <input type="text" value={input} onChange={handleOnChange}/>
        With priority: 
        <input type="text" value={inputPrio} onChange={handleOnChangePrio}/>
        {isPending ? "Loading" : list.map((el, i) => {
            return <div key={i}>{el}</div>
        })}
      </div>
    );
  }
  export default InputForm;