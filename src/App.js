import React from 'react';
import glob from 'glob';
import UiHeader from './components/header.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.paths = {};
  }
  generateData(){
    const blogs = glob.sync('./content/*.md');
    return blogs
    // const blogSlugs = blogs.map(file =>
    //     file
    //     .split('/')[1]
    //     .replace(/ /g, '-')
    //     .slice(0, -3)
    //     .trim()
    // );
    // const paths = blogSlugs.map(slug => ({
    //     url:`/posts/${slug}`,
    //     title:`${slug.replace(/-/g,' ')}`,
    // }))
    // this.setState({paths: paths});
  };
  
  componentDidMount() {
    this.generateData()
  }

  render() {
      return (
        <div className="container mx-auto max-w-lg">
              <UiHeader isHomepage={true}/>
              <div className="font-sans">
  
              </div>
          </div>
    );
  }
}

export default App;
