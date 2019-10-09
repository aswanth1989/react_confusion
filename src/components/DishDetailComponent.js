import React, {Component} from 'react'
import {Card, CardImg, CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component{

  

  render(){ 
    const renderDish = (dish)=>{
      if(dish != null){
        return(
          <Card>
            <CardImg top src={dish.image} alt={dish.name}/>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        );
      }
      else{
        return(
          <div></div>
        );
      }
    }

    const renderComments = (dish)=>{
      if(dish!=null){
        return(
          <div>
            {renderComment(dish.comments)}
          </div>
        )
      }else{
        return(
          <div>
          </div>
        )
      }
      }

      const renderComment = (comments) => {
        if(comments != null){
          let commentList = comments.map(c => {
            return(
              <div key={c.id}>
                <div>
                  {c.comment}
                </div>
                <div>
                  -- {c.author}
                </div>
              </div>
            )
          })
    
          return(
            <div>
              <h3>Comments</h3>
              <ul className="list-unstyled">
                {commentList}
              </ul>
            </div>
          )
        }else{
          return(
            <div>

            </div>
          )
        }
  
      }
      
    return(
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
            {renderDish(this.props.dish)}
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
              {renderComments(this.props.dish)}
          </div>
        </div>
    );
  }
}

export default DishDetail
//