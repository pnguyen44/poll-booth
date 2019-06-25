import React from 'react'
import TextField from '@material-ui/core/TextField';

class NewOptions extends React.Component {
  constructor() {
    super()
    this.state = {
      survey: {
        options: ['','','','']
      }
    }
  }
  handleChange = event => {
    const {id , value} = event.target
    const newOptions = this.state.survey.options.map((option,index) => {
      if (index === Number(id)) {
        option = value
      }
      return option
     })
    const updatedSurvey = {...this.state.survey, options: newOptions}
    this.setState({survey: updatedSurvey})
    this.props.setFormOptions(newOptions)
  }

  render() {
    const {options} = this.state.survey
    const newOptionsFieldsComponent = options.map((option,index) => {
      return (
        <TextField
         required={index < 2 ? true : false }
         key={index}
         id={index.toString()}
         label={`Option ${index + 1}`}
         value={options[index]}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />
      )

    })
    return (
      <React.Fragment>
        {newOptionsFieldsComponent}
        </React.Fragment>

    )
  }
}


export default NewOptions
