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
    return (
      <React.Fragment>
        <TextField
         required
         id='0'
         label="Option 1"
         value={options[0]}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />
        <TextField
         required
         id='1'
         label="Option 2"
         value={options[1]}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />

        <TextField
         id='2'
         label="Option 3"
         value={options[2]}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />

        <TextField
         id='3'
         label="Option 4"
         value={options[3]}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />

      </React.Fragment>

    )
  }
}


export default NewOptions
