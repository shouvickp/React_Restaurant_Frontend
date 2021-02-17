import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

//function RenderComments({mycomments}){
//    const allComments = null;
//    if(comments!=null){
//        allComments = comments.map((comment) => {
//                return(
//                    <div key={comment.id} >
//                        <li className="list-unstyled">{comment.comment}</li>
//                        <br />
//                        <li className="list-unstyled">-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}}</li>
//                        <br />
//                    </div>
//                );
//                
//        });
//    }
//    else{
//        allComments = " ";
//    }
//    return(
//        <div className="col-12 col-md-5 m-1">
//            <h4>Comments</h4>
//            {allComments}
//        </div>
//    );
//}

function RenderDish({dish}) {
    if(dish!=null){
        //console.log(dish.comments);
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
//            <RenderComments mycomments={dish.comments} />
        );
    }
    else{
        return(
            <div></div>
        );
    }
}



const DishDetail = (props) => {
     //console.log(props.selectedDish.comments)   
    return(
            <div className="container">
                <div className="row">
                        <RenderDish dish={props.selectedDish} />
                </div>
            </div>
        );
}

export default DishDetail;