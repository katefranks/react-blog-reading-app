import { Component } from 'react';
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      selection: null,
    }
    this.selectBlog = this.selectBlog.bind(this);
  }
  componentDidMount() {
    const blogs = [{
      title: 'a new blog',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ex suscipit numquam provident in rerum, repellat, corrupti quibusdam magnam iure doloribus nihil cupiditate quas omnis necessitatibus, quam minima expedita voluptas.'
    }, {
      title: 'another awesome post',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime laudantium nemo doloribus dolore omnis adipisci reprehenderit labore delectus, recusandae, voluptatibus amet nesciunt, ut? Quo, dolores sunt officia, cupiditate debitis amet.'
    }];
    // this.setState({ blogs: blogs });
    this.setState({ blogs });
  }
  selectBlog(event) {
    console.dir(event.target)
    const index = Number(event.currentTarget.dataset.index);
    console.log(index);
    this.setState({ selection: this.state.blogs[index] });
  }
// event.target is the h2
// event.currentTarget is the li (bc that’s what the even listener is attached to
//changing the state of selection from null to the index of the blog that was clicked on using the event listener.

  render() {
    const blogs = this.state.blogs.map((blog, index) => (
      <li key={index} onClick={this.selectBlog} data-index={index}>
        <h2>{blog.title}</h2>
      </li>
    ));
    // using map to go through the array of blogs.
    // using index as a key to differentiate li's
    // setting a data-index, which will be used above w/ dataset.index
    // setting an onClick event listener on the li to fire the selectBlog function.
    return(
        <>
          <ul>{blogs}</ul>
          {
            this.state.selection &&
            <aside>
              <h2>{this.state.selection?.title}</h2>
              <p>{this.state.selection?.body}</p>
              <button onClick={() => this.setState({selection: null})}>Close</button>
            </aside>
          }
        </>
        //returning list of blog titles,
    );
  }
}
export default Blog;
