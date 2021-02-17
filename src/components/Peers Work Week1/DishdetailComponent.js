import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);

        this.state = {
            
            selectedcomments:null
        }
    }

    onDishloaded(theselecteddish){
        this.setState({selectedcomments:theselecteddish.comments});
    }

    renderComment(mycomment){
        if(mycomment!=null){
            return mycomment.map((realcomment)=>{
                return(
                    
                        <div key = {realcomment.id}>
                            <blockquote className="blockquote">  
                                <p>{realcomment.comment}</p>
                                <footer className="blockquote-footer">{realcomment.author}, {realcomment.date}</footer>
                            </blockquote>
                        </div>
                    
                );
            });
                    
        }
        else{
            return(
                <div></div>
            );

        }

    }

    render(){
        const theselecteddish= this.props.selectedDish;
        let dishdetail;
        const mycomment= this.props.comments;
        let thecomment;
        if (theselecteddish != null)
        {  dishdetail= 
                <div>
                    <Card onLoad={()=>this.onDishloaded(theselecteddish)}>
                        <CardImg width="100" src={theselecteddish.image} alt={theselecteddish.name}/>
                        <CardBody>
                            <CardTitle>{theselecteddish.name}</CardTitle>
                             <CardText>
                                {theselecteddish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>


            thecomment = this.props.comments.map((usercomment)=>
                <div key={usercomment.id} >
                    <blockquote className="blockquote">  
                        <p>{usercomment.comment}</p>
                        <footer className="blockquote-footer">{usercomment.author}, {usercomment.date}</footer>
                    </blockquote>
                </div>
            );
            
        }
        else
        {
            dishdetail = <div> </div>
            thecomment= <div></div>
        }
 
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {dishdetail}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComment(this.state.selectedcomments)}
                    </div>
                </div>
            </div>
         );
    }
}


export default DishDetail;