import React from 'react';
import './css/Form.css';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      content: '',
      name: '',
      id: props.match.params.id
    };
  }

  componentDidMount() {
    const ep = this.props.postState.posts.filter(
      post => +this.props.match.params.id === +post.id );
    console.log({ep})
    this.setState({
      title: ep[0].title,
      img: ep[0].img,
      content: ep[0].content,
      name: ep[0].name
    });
  }

  handleChange = e => {
    let { value , name} = e.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.props);
    return (
      <div className="form-container">
        <input
          className="form-input"
          name="name"
          placeholder="Name"
          onChange={e => this.handleChange(e)}
          value={this.state.name}
        />
        <input
          className="form-input"
          name="title"
          placeholder="Title"
          onChange={e => this.handleChange(e)}
          value={this.state.title}
        />
        <input
          className="form-input"
          name="img"
          type="url"
          placeholder="Image"
          onChange={e => this.handleChange(e)}
          value={this.state.img}
        />
        <textarea
          className="form-input"
          name="content"
          placeholder="Content"
          onChange={e => this.handleChange(e)}
          value={this.state.content}
        />
        <Link to="/" onClick={() => this.props.editPost(this.state)}>
          Submit Edit
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default withRouter(connect(mapStateToProps, null)(EditForm));
