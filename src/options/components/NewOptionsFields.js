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

    // const newOption= {...this.state.options, [id]:value}
    // console.log('...in handlchagne', this.state.options)
  const newOptions = this.state.survey.options.map((option,index) => {
      if (index === Number(id)) {
        // console.log('got here')
        option = value
      }
      return option
     })
     console.log('..newOption', newOptions)
    const updatedSurvey = {...this.state.survey, options: newOptions}
    this.setState({survey: updatedSurvey})


    // console.log('working... new option ', this.state.options)
  // this.props.setOptions({options: this.state.options})
  this.props.setFormOptions(this.state.survey.options)

    // const newOptions = [...this.state.options, value]
    // this.setState({ options: newOptions})
    // console.log( '..newOptions', this.options)
  }

  render() {
    const {options} = this.state.survey
    console.log('..options', options)
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
