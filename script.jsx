class List extends React.Component {

  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  state = {
    list : [],
    word : ""
  };

  changeHandler(event) {
    this.setState({word:event.target.value});
    // console.log("change", event.target.value);
  };

  handleClick() {
    // console.log("handling click..");
    this.setState( {list: this.state.list.concat(this.state.word), word:""} );
  };

  render() {
    // console.log(this.state);
    // console.log("rendering");

    let listEntries = this.state.list.map( (entry, index) => {
      return (
        <li key={index}>{index}: {entry}</li>
        );
    });

    return (
      <div className="list">

        <input onChange={this.changeHandler} value={this.state.word}/>
        <button onClick = {this.handleClick}>add item</button>

        <ul>
          {listEntries}
        </ul>

      </div>
    );
  };
};

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);















