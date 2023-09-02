import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
const snap = useSnapshot(state)
    return (
    <div className='absolute left-full ml-3'>
        <SketchPicker
        color={snap.color} 
        disableAlpha
        // presetColors={[
        //     "#ccc",
        //     "#EFBD4E",
        //     "#80c660",
        //     "#353934",
        //     "#2ccce4",
        //     "#ff8a65",
        //     "#7098da",
        //     "C19277",
        //     "ff96ad",
        //     "5f123d"
        // ]}
        onChange={(color)=> state.color = color.hex} />
    </div>
)
}

export default ColorPicker