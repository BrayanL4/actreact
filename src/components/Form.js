import React from "react";

export class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      lastname: "",
      telephone: "",
      email: "",
      comments: ""
    };
  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState
        ({value: event.target.value,
        });
    }

    handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    }

  render() {
    return (
      <div>
            <h1>Simple form</h1>
            <form onSubmit={this.handleSubmit}>
                <label for>
                    Name:
                    <input type="text" value={this.state.value} />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label for>
                    Last name:
                    <input type="text" value={this.state.value}  />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label for>
                    Telephone:
                    <input type="text" value={this.state.value}  />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label for>
                    Email:
                    <input type="text" value={this.state.value}  />
                </label>
            </form>
            <form onSubmit={this.handleSubmit}>
                <label for>
                    Comments:
                    <input type="text" value={this.state.value}  />
                </label>
            </form>
            

            <form>
                <button type="button">Send</button>
            </form>
      </div>
    )
  }
}


export default Form;
  