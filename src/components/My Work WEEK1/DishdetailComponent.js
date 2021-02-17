import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends Component {

    componentDidMount(){
        console.log('DishDetail componentDidMount Invoked');
    }
    componentDidUpdate(){
        console.log('DishDetail componentDidUpdate Invoked');
    }
    renderComments(comments){
        return(
            comments.map((comment) => {
                return(
                    <div key={comment.id} >
                        <li className="list-unstyled">{comment.comment}</li>
                        <br />
                        <li className="list-unstyled">-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}}</li>
                        <br />
                    </div>
                )
                
            })
            
        );
    }

    render(){
            console.log('DishDetail component render Invoked');
            if (this.props.selectedDish != null)
                return(
                    <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                                <CardBody>
                                  <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                  <CardText>{this.props.selectedDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="col-12 col-md-5 m-1">
                                  <h4>Comments</h4>
                                  {this.renderComments(this.props.selectedDish.comments)}
                        </div>
                    </div>
                    </div>                    
                );
            else
                return(
                    <div></div>
                );
        }
}

export default DishDetail;