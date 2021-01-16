import React from 'react';
import UiHeader from './components/header.js';
import UiPost from './components/post.js';
import articleList from './article/index.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";

function BlogPost() {
  let { slug } = useParams();
  return <UiPost slug={slug}/>;
}

function ArticleList() {
  return(
    <ul>
      {
        articleList.map((article,index)=>{
          return(
            <li key={index} className="text-xl underline text-black-400 antialiased mb-3">
              <Link className="capitalize" to={'/posts/'+article}>{article.split('-').join(' ')}</Link>
            </li>
          )
        })  
      }  
    </ul>
  )
}

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <UiHeader isHomepage={true}/>
          <div className="container mx-auto max-w-lg">
            <ArticleList/>
          </div>
        </Route>
        <Route path="/posts/:slug">
          <UiHeader/>
          <BlogPost/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
