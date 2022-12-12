import React from 'react'

import '../App';

import CustomLink from '../Routing';

export default function Home() {

    return (
        <>
            {/* <div class="tk-blob" style={{ fill: '#3f51b5', width: '50%', position: 'absolute', zIndex: -1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.6 343.9">
                    <path
                        d="M275.9 63.1c30.7 37.3 50.9 84.2 43 126.9-7.9 42.7-44.1 81.2-93 112.1C177 332.9 115.2 356 70.9 337 26.5 317.9-.4 256.7 0 204.6c.4-52 28-95 59.7-132.5C91.4 34.5 127.1 2.3 165.5.1c38.5-2.2 79.7 25.7 110.4 63z">
                    </path>
                </svg>
            </div>
            <div class="tk-blob" style={{ fill: '#fdd25d', width: '50%', position: 'absolute', zIndex: -1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.9 377">
                    <path d="M389.3 42c39.8 40.8 47.5 116.3 21.3 165.4-26.1 49.1-86 71.8-145.9 104.3-59.8 32.5-119.6 74.8-168.9 63.4C46.5 363.7 7.6 298.5 1 235.7-5.5 173 20.3 112.5 59.8 71.9 99.3 31.2 152.4 10.2 215 2.8 277.5-4.7 349.5 1.2 389.3 42z"></path>
                </svg>
            </div> */}

            <div className='second-view'>
                <ul>
                    <CustomLink to="/All" >
                        All
                    </CustomLink>
                    <CustomLink to="/Image" >
                        Image
                    </CustomLink>
                    <CustomLink to="/TA">
                        Basic
                    </CustomLink>
                    <CustomLink to="/t">
                        Basic
                    </CustomLink>
                    <CustomLink to="/TA">
                        Basic
                    </CustomLink>
                    <CustomLink to="/TA">
                        Basic
                    </CustomLink>
                </ul>
            </div>
        </>
    )
}
