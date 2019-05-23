import React from 'react'
import TextField from '@material-ui/core/TextField';

class NewOptions extends React.Component {
  constructor() {
    super()
    this.state = {
      // survey: {
        options: ['','','','']
      // }
    }
  }
  handleChange = event => {
    const {id , value} = event.target

    // const newOption= {...this.state.options, [id]:value}
    // console.log('...in handlchagne', this.state.options)
  const newOption = this.state.options.map((option,index) => {
      if (index === Number(id)) {
        // console.log('got here')
        option = value
      }
      return option
     })
     // console.log('..newOption', newOption)
    this.setState({options: newOption})


    // console.log('working... new option ', this.state.options)
  // this.props.setOptions({options: this.state.options})
  this.props.setFormOptions(this.state.options)

    // const newOptions = [...this.state.options, value]
    // this.setState({ options: newOptions})
    // console.log( '..newOptions', this.options)
  }

  render() {
    const {options} = this.state
    // console.log('..options', options)
    const optionsFieldsComponent = options.map((option,index) => {
      if (index < 2) {
        return (
          <TextField
           required
           id={index}
           label={`Option ${index + 1}`}
           value={options[index]}
           onChange={this.handleChange}
           margin="normal"
           fullWidth
          />
        )
      } else {
        return (
          <TextField
           id={index}
           label={`Option ${index + 1}`}
           value={options[index]}
           onChange={this.handleChange}
           margin="normal"
           fullWidth
          />
        )
      }

    })
    return (
      <React.Fragment>
        {optionsFieldsComponent}
        </React.Fragment>

    )
  }
}


export default NewOptions
