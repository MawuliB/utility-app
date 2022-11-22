import React from 'react'
import CustomLink from '../Routing';
import { data } from '../toolsdata'

export default function Basic() {
    return (
        <div className='tools'>
            <ul>
                <Items tools={data} />
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
