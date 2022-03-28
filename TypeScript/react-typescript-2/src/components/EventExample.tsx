import React, { FC } from 'react'
import { useRef } from 'react'
import { useState } from 'react'


type EventExampleProps = {

}
const EventExample: FC<EventExampleProps> = ({ }) => {
    const [value, setValue] = useState<string>()
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const ClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('drop')

    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)

    }

    const dragWitchPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div>
            <input value={value} type="text" onChange={ChangeHandler} placeholder='managed' />
            <input ref={inputRef} type="text" placeholder='not managed'/>
            <button onClick={ClickHandler}>Click</button>
            <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'red' }}></div>
            <div onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWitchPreventHandler}
                style={{
                    width: 200,
                    height: 200,
                    background: isDrag ? 'blue' : 'red',
                    marginTop: 15
                }}
            ></div>
        </div>
    )
}

export default EventExample
