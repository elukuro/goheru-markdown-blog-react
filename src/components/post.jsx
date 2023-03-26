import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

const Post = ({ slug }) => {
  const [blog, setBlog] = useState(null);

  const generateData = async () => {
    const title = slug;
    const file = await import(`../article/${title}.md`);
    const response = await fetch(file.default)
      .then((res) => res.text())
      .then((text) => text);
    const write = matter(response);
    setBlog(write);
  };

  useEffect(() => {
    generateData();
  }, []);

  const RenderData = ({ content }) => {
    if (content) {
      return (
        <div>
          <div className="">
            <span className="text-black-400 font-thin dark:text-gray-200">
              {content.data.date}
            </span>
            <h1 className="text-3xl text-black-500 font-bold capitalize dark:text-gray-200">
              {content.data.title}
            </h1>
          </div>
          <div className="markdown-body dark:text-gray-200">
            <ReactMarkdown source={content.content} />
          </div>
        </div>
      );
    } else {
      return (
        <h1 className="text-black-400 font-thin dark:text-gray-200">
          loading...
        </h1>
      );
    }
  };

  return (
    <>
      <div>
        <div className="container mx-auto max-w-screen-lg pb-20">
          <div className="markdown-body pt-40 px-5">
            <RenderData content={blog} />
          </div>
        </div>
      </div>
    </>
  );
};

// class Post extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       blog: null,
//     };
//   }
//   async generateData() {
//     const title = this.props.slug;
//     const file = await import(`../article/${title}.md`);
//     const response = await fetch(file.default)
//       .then((res) => res.text())
//       .then((text) => text);
//     const write = matter(response);
//     this.setState({
//       blog: write,
//     });
//   }

//   renderData(content) {
//     if (content) {
//       return (
//         <div>
//           <div className="pt-10">
//             <span className="text-black-400 font-thin dark:text-gray-200">
//               {content.data.date}
//             </span>
//             <h1 className="text-3xl text-black-500 font-bold capitalize dark:text-gray-200">
//               {content.data.title}
//             </h1>
//           </div>
//           <div className="markdown-body dark:text-gray-200">
//             <ReactMarkdown source={content.content} />
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <h1 className="text-black-400 font-thin dark:text-gray-200">
//           loading...
//         </h1>
//       );
//     }
//   }

//   componentDidMount() {
//     this.generateData();
//   }

//   render() {
//     return (
//       <div>
//         <div className="container mx-auto max-w-screen-lg pb-20">
//           <div className="markdown-body mt-20">
//             {this.renderData(this.state.blog)}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Post;
