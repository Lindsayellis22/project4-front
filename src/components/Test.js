import React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import '/Users/lindsayellis/SEI/projects/project4-front/project4-front/src/components/Radclyf.css'
import Radclyf from './Radclyf';

function Test(props) {
    // const ear = styled.className.left_ear`
    // `
    const colors = [
        {
            value: 1,
            label: 'red'
        },
        {
            value: 2,
            label: 'orange'
        },
        {
            value: 3,
            label: 'pink'
        },

    ];
    const [setpetColor,ddlvalue]=useState(colors.label)
    const ddlhandle = e =>
    {
        ddlvalue(e.label);
    }
    return (
        
            <div>
                {/* <Radclyf /> */}
            <style>{ 'body {{background-color:' +setpetColor+':}'}</style>
           <Select options={colors} onChange={ddlhandle}></Select> 
           <center>
               <b>Here: {setpetColor}</b>
           </center>
        </div>
    );
}

export default Test;