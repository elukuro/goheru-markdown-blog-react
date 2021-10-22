import { Link } from "react-router-dom";
import { useState } from "react";

function UirenderBackToHome(props) {
  if (!props.isHomepage) {
    return (
      <div>
        <Link to="/" className="text-xs underline text-blue-600 antialiased ">
          Back to home 🏠
        </Link>
      </div>
    );
  }
  return (
    <div>
      <a
        className="text-xs underline text-blue-600 antialiased "
        href="https://goheru-project.web.app/#/"
      >
        Back to goheru 🏠
      </a>
    </div>
  );
}
function Header(props) {
  const [isActive, setActive] = useState(true);
  const toggleClass = () => {
    if (isActive) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    setActive(!isActive);
  };
  const heading = "<DevTips/>";
  return (
    <div className="pt-10 pb-10 container mx-auto max-w-lg">
      <h1 className="text-6xl orange font-extrabold">{heading}</h1>
      <div className="flex mt-5 justify-between items-end">
        <div>
          <span className="text-1xl dark:text-gray-300">By goheru🤖 | </span>
          <span
            className="cursor-pointer rounded-full bg-gray-300 py-1 px-2 text-xs text-gray-900 dark:bg-gray-500 text-gray-300"
            onClick={toggleClass}
          >
            {!isActive ? "🌞 Light" : "Dark 🌕"}
          </span>
        </div>
        <UirenderBackToHome isHomepage={props.isHomepage} />
      </div>
    </div>
  );
}

export default Header;
