import React from 'react';
import UiHeader from './components/header.js';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';


import blog0 from './content/test.md';
import blog1 from './content/test2.md';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      blog:null
    }
  }
  generateData(){
    fetch(blog0).then(res => res.text()).then(text => {
      const write = matter(text);
      this.setState({
        blog:write
      })
    });
  };

  renderData(content){
    if(content){
      return(
        <div>
          <div className="mt-20">
              <span className="text-black-400 font-thin">{content.data.date}</span>
              <h1 className="text-3xl text-black-500 font-bold">{content.data.title}</h1>
          </div>
          <div className="markdown-body mt-20">
              <ReactMarkdown source={content.content} />
          </div>
        </div>
      )
    }else{
      return(
        <p>loading...</p>
      )
    }
  }

  componentDidMount() {
    this.generateData()
  }

  render() {
      return (
        <div>
          <div className="container mx-auto max-w-lg">
                <UiHeader isHomepage={true}/>
          </div>
          <div className="container mx-auto max-w-screen-lg pb-20">
          <div className="markdown-body mt-20">
            {this.renderData(this.state.blog)}
          </div>
          </div>
        </div>
    );
  }
}

export default App;
