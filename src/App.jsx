import React, { useState } from 'react'
import Dropdown from './components/Dropdown'

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)

    return (
        <div>
            <button onClick={() => setShowDropdown(prevState => !prevState)}>Toggle Dropdown</button>
            {/* {showDropdown ? <Dropdown options={options} selected={selected} onSelectedChange={setSelected} /> : null} */}
            {showDropdown && <Dropdown options={options} selected={selected} setSelected={setSelected} />}
        </div>
    )
}

export default App
