import React from "react";
import UiHeader from "./components/header";
import UiPost from "./components/post";
import articleList from "./article/index.js";
import UiArticleList from "./components/articleList";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function BlogPost() {
  let { slug } = useParams();
  return <UiPost slug={slug} />;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container mx-auto px-4">
            <UiHeader isHomepage={true} />
            <div className="container mx-auto max-w-lg">
              <UiArticleList list={articleList} />
            </div>
          </div>
        </Route>
        <Route path="/posts/:slug">
          <div className="container mx-auto px-4">
            <UiHeader />
            <BlogPost />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
