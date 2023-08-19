class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
      
    render(){
        return(
            <div>
                <h1> Hello,World!</h1>
                <h2>It Is  {this.props.date.toLocakeTimeString()}.</h2>
            </div>
        )
    }
}