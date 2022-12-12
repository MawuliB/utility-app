import './App.css';
import React, { useRef, useState } from 'react';
import TopBar from './TopBar'
import Home from './pages/Home'
import TA from './pages/TA'
import Contact from './pages/Contact'
import Gift from './pages/Gift'
import All from './pages/All'

import { toolsdata } from './toolsdata'

import TypeWriterEffect from 'react-typewriter-effect';

import { Route, Routes, useLocation } from "react-router-dom"

import { ReactComponent as Logo } from './icons/logo.svg';
import { ReactComponent as Search } from './icons/search.svg';
// import { ReactComponent as Search1 } from '../icons/search1.svg';

function App() {
  const [tools, setTools] = useState(toolsdata)
  const searchWord = useRef()

  // useEffect(() => {
  //   setTools(toolsdata)
  //   // console.log(tools)
  // }, [tools])

  const words = [
    'Utility App',
    'For all your services',
    'Access all your petty tools',
    'Utility App'
  ];
  let location = useLocation()


  const searchTool = () => {
    // if (searchWord.current.value.length === 0) return toolsdata
    const result = toolsdata.filter(tool =>
      tool.description.toLowerCase().includes(searchWord.current.value.toLowerCase()) ||
      tool.name.toLowerCase().includes(searchWord.current.value.toLowerCase())
    )
    setTools(result)
    return tools
  }

  return (
    <>
      <TopBar />
      {(["/All", "/Image", "/"].indexOf(location.pathname) >= 0) &&
        <div className='first-view' >
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
            <input type="text" ref={searchWord} onChange={searchTool} className='searchTerm' placeholder="What are you looking for?" />
            <button type="submit" className='searchButton'>
              <Search />
            </button>
          </div>
        </div>
      }
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/TA' element={<TA />} />
          <Route path='/gift' element={<Gift />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/All' element={<> <Home /> <All CAT="All" data={tools} /></>} />
          <Route path='/Image' element={<> <Home /> <All CAT="Image" data={tools} /></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
