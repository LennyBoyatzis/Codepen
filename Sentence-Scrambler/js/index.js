'use strict';

var CHARS = ['!', '$', '+', '<', '%', '=', '&', ',', '.', '~', '(', ')', '*', '@', '#', ':', '|', '/'];

var LetterScrambler = React.createClass({
  displayName: 'LetterScrambler',

  getInitialState: function getInitialState() {
    return {
      letter: this.props.letter,
      noOfScrambles: 4
    };
  },

  scrambleLetter: function scrambleLetter() {
    if (this.state.noOfScrambles > 0) {
      this.setState({
        letter: CHARS[Math.floor(Math.random() * CHARS.length)],
        noOfScrambles: this.state.noOfScrambles - 1
      });
      setTimeout(this.scrambleLetter, 100);
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    var _this = this;

    if (props.scrambling) {
      this.setState({
        noOfScrambles: 4
      }, function () {
        _this.scrambleLetter();
      });
    } else {
      return this.setState({
        letter: this.props.letter
      });
    }
  },

  render: function render() {
    console.log('this.state.letter ' + this.state.letter);
    return React.createElement(
      'span',
      null,
      this.state.letter
    );
  }
});

var SentenceScrambler = React.createClass({
  displayName: 'SentenceScrambler',

  getInitialState: function getInitialState() {
    return {
      scrambling: false
    };
  },

  onHover: function onHover() {
    return this.setState({
      scrambling: true
    });
  },

  onMouseOut: function onMouseOut() {
    return this.setState({
      scrambling: false
    });
  },

  render: function render() {
    var _this2 = this;

    return React.createElement(
      'div',
      { className: 'scrambler', onMouseEnter: this.onHover, onMouseLeave: this.onMouseOut },
      React.createElement(
        'p',
        null,
        this.props.sentence.split('').map(function (i) {
          return React.createElement(LetterScrambler, { scrambling: _this2.state.scrambling, letter: i });
        })
      )
    );
  }
});

React.render(React.createElement(SentenceScrambler, { sentence: 'Digital World' }), document.querySelector('body'));