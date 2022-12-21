import back1 from '../images/back1.png'
import back2 from '../images/back2.png'
import back3 from '../images/back3.png'
import back4 from '../images/back4.png'


class HomeForUnlogged extends Component {


  constructor(props) {
    super(props)

    this.state = {
      bgStyle : {
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    }
  }


  componentWillMount() {

    const pictureArray = [back1, back2, back3, back4];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    const selectedPicture = pictureArray[randomIndex];

    this.setState({
      bgStyle: {
        backgroundImage: `url(${selectedPicture})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    })

  }
  render() {

    return (
      < div style={this.state.bgStyle} className="bg">
        <div className="row" >
          <div className="col-sm-4" style={{ marginTop: "30px", padding: "30px" }} > <TextHome /></div>
          <div className="col-sm-4" style={{ marginTop: "90px", padding: "30px" }}> <Login history={this.props.history} /></div>
          <div className="col-sm-4"> </div>
        </div>
      </div>
    );
  }
}

export default HomeForUnlogged;