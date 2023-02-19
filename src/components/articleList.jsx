import { Link } from "react-router-dom";

function ArticleList({ list }) {
  return (
    <ul>
      {list.map((article, index) => {
        return (
          <li
            key={index}
            className="text-sm underline text-black-400 dark:text-gray-200 antialiased mb-3"
          >
            <Link className="capitalize" to={"/posts/" + article}>
              Tips {list.length - index}:
              {article.split("-").join(" ").replace(/[0-9]/g, "")}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticleList;
