import React from 'react'
import TextField from '@material-ui/core/TextField';

class SurveyForm extends React.Component {
  constructor() {
    super()
    this.state = {
      survey: {
        title: '',
        question: ''
      },
    }
  }
  handleChange = event => {
    const {id, value} = event.target
    const newSurvey = {...this.state.survey, [id]: value}
    this.setState({ survey: newSurvey})
    this.props.setSurvey(this.state.survey)
    // console.log( '..newSurvey', newSurvey)
  }
  render() {
    return(
      <React.Fragment>
        <TextField
         autoFocus
         required
         id="title"
         label="Title"
         value={this.state.title}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />

        <TextField
         autoFocus
         required
         id="question"
         label="Question"
         value={this.state.question}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />
      </React.Fragment>
    )
  }
}

export default SurveyForm
