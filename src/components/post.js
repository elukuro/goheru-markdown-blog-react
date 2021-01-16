import React from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      blog:null
    }
  }
  async generateData(){
    const title = this.props.slug
    const file = await import(`../article/${title}.md`);
    const response = await fetch(file.default).then(res=>res.text()).then(text => text);
    const write = matter(response);
    this.setState({
      blog:write
    });
  };

  renderData(content){
    if(content){
      return(
        <div>
          <div className="mt-10">
              <span className="text-black-400 font-thin">{content.data.date}</span>
              <h1 className="text-3xl text-black-500 font-bold capitalize">{content.data.title}</h1>
          </div>
          <div className="markdown-body">
              <ReactMarkdown source={content.content} />
          </div>
        </div>
      )
    }else{
      return(
        <h1 className="text-black-400 font-thin">loading...</h1>
      )
    }
  }

  componentDidMount() {
    this.generateData()
  }

  render() {
      return (
        <div>
          <div className="container mx-auto max-w-screen-lg pb-20">
            <div className="markdown-body mt-20">
              {this.renderData(this.state.blog)}
            </div>
          </div>
        </div>
    );
  }
}

export default Post;
