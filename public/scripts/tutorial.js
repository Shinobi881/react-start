var CommentBox = React.createClass({
  render: function() {
    return (
        <div className="CommentBox">
          <h1>Comment</h1>
          <CommentList />
          <CommentForm />
        </div>
      );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Moose">First comment</Comment>
        <Comment author="Clair">Second comment *another*</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a comment CommentForm
      </div>
    );
  }
});

var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { _html: rawMarkup };
  },

  render: function() {
    return(
      <div className="comment">
        <h2 className="commentAuthor">{this.props.author}</h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()}/>
      </div>
    );
  }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);