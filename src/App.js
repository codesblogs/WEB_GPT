import React from 'react';           //1. rafce and enter with help of es7 snippets it will print whole arrow function
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { Brand, Cta, Navbar } from './components';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
//2. After creating arrow function add required dependencies by: 'npm install react-icons' <- enter
// 3. u can add content in the arrow function & after that u can check it by run: 'npm start' <- enter
//4. after that u can create components folder under src if you had removed src earlier to build from scratch
//5. create folder like(article, brand, cta, feature, navbar)under the just builded components folder 
//6. create {Article.jsx , article.css} file inside the article folder (in Article.jsx use rafce arrow fn., article.css to include css)
//7. in Article.jsx add `~import './article.css' (will help to connect css in Article.jsx)