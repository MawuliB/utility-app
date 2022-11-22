import React from 'react'
import { ReactComponent as Logo } from '../icons/logo.svg';
import { ReactComponent as Search } from '../icons/search.svg';
// import { ReactComponent as Search1 } from '../icons/search1.svg';
import '../App';
import TypeWriterEffect from 'react-typewriter-effect';
import CustomLink from '../Routing';

export default function Home() {
    const words = ['Utility App',
        'For all your services',
        'Access all your petty tools',
        'Utility App'
    ];

    return (
        <>
            <div className='first-view'>
                <div style={{ display: 'flex', alignItems: "center", gap: 10 }}>
                    <div className='home-logo'>
                        <Logo />
                    </div>
                    <div style={{ fontWeight: 'bold', color: '#f4d47c' }}>
                        <TypeWriterEffect
                            textStyle={{
                                fontFamily: 'Red Hat Display',
                                color: '#f4d47c',
                                fontWeight: 500,
                                fontSize: '1.5em',
                            }}
                            startDelay={2000}
                            cursorColor="red"
                            multiText={words}
                            multiTextDelay={2000}
                            typeSpeed={30}
                            hideCursorAfterText={true}
                        />
                    </div>
                </div>
                <div className='search'>
                    <input type="text" className='searchTerm' placeholder="What are you looking for?" />
                    <button type="submit" className='searchButton'>
                        <Search />
                    </button>
                </div>
            </div>
            <div className='second-view'>
                <ul>
                    <CustomLink to="/Basic">
                        Basic
                    </CustomLink>
                    <CustomLink to="/TA">
                        Basic
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
