import React,{Component} from "react";
import axios from "axios";
import { MDBCol, MDBContainer,  MDBTypography } from "mdb-react-ui-kit";
class Quote extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        { 
            content: "Loding....",
            author: "Loding..."
        }
    }
    
componentDidMount() {
    this.fetchAdvice();
}

fetchAdvice = () => {
axios.get('https://api.quotable.io/random').then((res) =>  {
                
    const content = res.data.content;
    const author=res.data.author;
    this.setState({ content, author });
    })
        .catch ((error) => {
        console.log(error);
        })
    }

    render()
    {
        return(
            <div className="card">
            
            <section className="vh-100" >
      <MDBContainer className="container-fluid min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center">
        
          <MDBCol lg="5" className="mb-4 mb-lg-4">
            <figure
              className="bg-white p-3 rounded"
              style={{ borderLeft: ".25rem solid #9999ff" }}
            >
              <MDBTypography blockquote className="pb-5 text-center align-self-center">
                <p>
                ❝{this.state.content}❞
                </p>
              </MDBTypography>
              <figcaption className="blockquote-footer mb-3 text-center align-self-center">
                {this.state.author}
              </figcaption>

              <button type="button" className="btn text-white rounded-2" id="new-quote" onClick={this.fetchAdvice}>
                <span>New Quote</span>
              </button>
            </figure>
          </MDBCol>
      </MDBContainer>
    </section> </div>
    
)}

}
export default Quote;
