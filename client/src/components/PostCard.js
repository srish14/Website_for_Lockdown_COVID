// import React, { useContext } from 'react';
// import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';

// import { AuthContext } from '../context/auth';
// import LikeButton from './LikeButton';
// import DeleteButton from './DeleteButton';
// import MyPopup from '../util/MyPopup';

// function PostCard({
//   post: { body, createdAt, id, username, likeCount, commentCount, likes }
// }) {

    // function likePost(){
    //   console.log('Like post!')
    // }

    // function commentOnPost(){
    //   console.log("Comment on post!")
    // }
//   return (
//     <Card fluid>
//       <Card.Content>
//         <Image
//           floated="right"
//           size="mini"
//           src="https://cryobank.ua/wp-content/uploads/2020/05/K-state.png"
//         />
//         <Card.Header>{username}</Card.Header>
//         <Card.Meta>
//           {moment(createdAt).fromNow(true)}
//         </Card.Meta>
//         <Card.Description>{body}</Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <p>Buttons!</p>

//       </Card.Content>
//     </Card>
//   );
// }

// export default PostCard;


{/* <LikeButton user={user} post={{ id, likes, likeCount }} />
        <MyPopup content="Comment on post">
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue" basic>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </MyPopup>
        {user && user.username === username && <DeleteButton postId={id} />} */}

        {/* <Button as="div" labelPosition="right" onClick={likePost}>
  <Button color='teal' basic>
    <Icon name="heart"/>
  </Button>
<Label basic color="teal" pointing="left">
  {likeCount}
</Label>
</Button>

<Button as="div" labelPosition="right" onClick={commentOnPost}>
  <Button color='green' basic>
    <Icon name="comment"/>
  </Button>
<Label basic color="green" pointing="left">
  {commentCount}
</Label>
</Button> */}