import React from 'react'
import TextField from '@material-ui/core/TextField';

class NewOptions extends React.Component {
  constructor() {
    super()
    this.state = {
      options: {
        option1: '',
        option2: '',
        option3: '',
        option4: '',
      }
    }
  }
  handleChange = event => {
    const {id , value} = event.target

    const newOption= {...this.state.options, [id]:value}
    this.setState({options: newOption})


    console.log('working... new option ', this.state.options)
  // this.props.setOptions({options: this.state.options})
  this.props.setOptions(this.state.options)

    // const newOptions = [...this.state.options, value]
    // this.setState({ options: newOptions})
    // console.log( '..newOptions', this.options)
  }

  render() {
    return (
      <React.Fragment>
        <TextField
         required
         id="option1"
         label="Option 1"
         value={this.state.option1}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />
        <TextField
         required
         id="option2"
         label="Option 2"
         value={this.state.option2}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />

        <TextField
         id="option3"
         label="Option 3"
         value={this.state.option3}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />

        <TextField
         id="option4"
         label="Option 4"
         value={this.state.option4}
         onChange={this.handleChange}
         margin="normal"
         fullWidth
        />

      </React.Fragment>

    )
  }
}


export default NewOptions
