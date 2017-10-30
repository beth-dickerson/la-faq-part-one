import React from 'react';
import QuestionContainer from './QuestionContainer';
import Answer from './Answer';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isToggleOn: true })
  }


  render() {
    let isToggleOn = this.state.isToggleOn;

    let className;

    let questions = this.props.data.map((faq) => {
      if (isToggleOn) {
      return(
        <QuestionContainer
          key={faq.id}
          id={faq.id}
          question={faq.question}
          answer={faq.answer}
          handleClick={this.handleClick}
          className={className}
        />
      )
    } else {
      return(
        <QuestionContainer
          key={faq.id}
          id={faq.id}
          question={faq.question}
          handleClick={this.handleClick}
          className={className}
        />
      )
    }
    })


    return(
      <div>
        {questions}
      </div>
    )
  }
}

export default App;
