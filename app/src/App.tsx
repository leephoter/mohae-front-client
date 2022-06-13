/** @format */

import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { injectGlobal } from '@emotion/css';
import { color, Layout } from './styles';
import { HG, Home, MyPage, OtherPage, Spec } from './pages';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box; 
    line-height: 170%;
  }
  textarea {
    resize: none;
  }
  button {
    cursor: pointer;
    background-color: inherit;
  } 
  ul {
    list-style: none;
  }
  a, a:visited, a:link {
    color: inherit;
    text-decoration: none;
  }
  &::-webkit-scrollbar {
        margin-right: 20px;
        background-color: rgba(0, 0, 0, 0);
        width: 4px;
        height: 0;
        cursor: pointer;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${color.main};
        border-radius: 10px;
      }
      &::-webkit-scrollbar-track {
        background-color: ${color.light4};
        border-radius: 10px;
      }

`;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout main component={<Home />} />} />
        <Route path="/hg" element={<Layout component={<HG />} />} />
        <Route path="/hl" element={<Layout component={<div />} />} />
        <Route path="/sj" element={<Layout component={<div />} />} />
        <Route path="/boards/:no" element={<Layout component={<HG />} />} />
        <Route path="/mypage/:no" element={<Layout component={<MyPage />} />} />
        <Route
          path="/otherpage/:no"
          element={<Layout component={<OtherPage />} />}
        />
        <Route
          path="/otherpage/:no"
          element={<Layout component={<OtherPage />} />}
        />
        <Route path="/spec/:no" element={<Layout component={<Spec />} />} />
      </Routes>
    </Router>
  );
}

export default App;
