import React from 'react'
import TextField from '@material-ui/core/TextField';

class NewSurveyFields extends React.Component {
  constructor(props) {
    super(props)
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
  }

  render() {
    const {survey} = this.state
    return(
      <React.Fragment>
        <TextField
         autoFocus
         required
         id="title"
         label="Title"
         value={survey.title}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />

        <TextField
         required
         id="question"
         label="Question"
         value={survey.question}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />
      </React.Fragment>
    )
  }
}

export default NewSurveyFields
