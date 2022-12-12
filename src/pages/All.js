import React from 'react'
import CustomLink from '../Routing';
// import { toolsdata } from '../toolsdata'

export default function All({ CAT, data }) {

    function SortOut(cat) {
        if (cat === 'All') { return data }
        const resultData = data.filter(d => d.category === cat)
        // console.log(resultData)
        return resultData
    }

    return (
        <div className='tools'>
            <ul>
                <Items tools={SortOut(CAT)} />
            </ul>
        </div>
    )
}


function Items({ tools }) {
    return (
        tools.map(tool => {
            return (
                <CustomLink key={tool.id} to={tool.path}>
                    <div className='info'>
                        <div className='name'><div className='text' >{tool.name}</div></div>
                        <div className='desc'><div className='text' style={{ fontSize: '1.0rem' }}>{tool.description}</div></div>
                    </div>
                </CustomLink>)
        })
    )
}
