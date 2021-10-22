import React from "react";
import UiHeader from "./components/header.js";
import UiPost from "./components/post.js";
import articleList from "./article/index.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";

function BlogPost() {
  let { slug } = useParams();
  return <UiPost slug={slug} />;
}

function ArticleList() {
  return (
    <ul>
      {articleList.map((article, index) => {
        return (
          <li
            key={index}
            className="text-sm underline text-black-400 dark:text-gray-200 antialiased mb-3"
          >
            <Link className="capitalize" to={"/posts/" + article}>
              Tips {articleList.length - index}
              {article.split("-").join(" ").replace(/[0-9]/g, "")}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container mx-auto px-4">
            <UiHeader isHomepage={true} />
            <div className="container mx-auto max-w-lg">
              <ArticleList />
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
