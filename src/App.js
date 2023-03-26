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
          <div className="mx-auto">
            <UiHeader isHomepage={true} />
            <div className="mx-auto max-w-lg pt-40 px-5">
              <UiArticleList list={articleList} />
            </div>
          </div>
        </Route>
        <Route path="/posts/:slug">
          <div className="mx-auto">
            <UiHeader />
            <BlogPost />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
