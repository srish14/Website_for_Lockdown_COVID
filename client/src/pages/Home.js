import React, { useContext } from 'react';
import jwtDecode from 'jwt-decode';
// import { AuthContext } from '../context/auth';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// import PostCard from '../components/PostCard';

import './Gridstyle.css';

import { Card, Placeholder, Grid, Image, Segment, Label, CommentAction } from 'semantic-ui-react';
import './HomeStyle.css';

function Home(){
  // const { loading, data: { getPosts: posts } = {} } = useQuery(FETCH_POSTS_QUERY)

  // const { 
  //   loading, 
  //   data: { getPosts: posts } = {}
  // } = useQuery(FETCH_POSTS_QUERY);
 
  const isLoggedIn = localStorage.getItem('jwtToken') && jwtDecode(localStorage.getItem('jwtToken')); 
  
    return(
        <div>
            {/* <h1 className='one'>Home Page</h1> */}
            {/* <div> */}
{/* <Grid column={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
            posts && posts.map((post) => (
                <Grid.Column key={post.id}>
                  <PostCard post={post} />
                </Grid.Column>
              ))
        )}
      </Grid.Row>
</Grid>     */}
{/* </div> */}

        <div className='page-home'>
            <Image className='img' src='https://image.freepik.com/free-vector/pregnancy-motherhood-cute-happy-pregnant-woman-beautiful-young-girl-waiting-baby_189033-105.jpg' floated='right' />
            <h1 className='left' floated='left'>MAKING YOUR JOURNEY EASY</h1>
        </div>


   <Grid>
      <Grid.Row textAlign='center' className="pri">
        <Grid.Column width={5}>
          <Image src='https://cryobank.ua/wp-content/uploads/2020/05/K-state.png' centered/>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" width={11}>

            <div className="cstyle">
            <Segment raised>
            <h3>Coronavirus disease (COVID-19): Read and Know</h3>
            <Label.Detail><h2><a href="./pages/First">PREGNANCY</a></h2></Label.Detail>
                  <Label basic color='red' pointing>
                    Click to read
                  </Label>
            </Segment>  
            </div>
            
          {/* <Image src='https://cryobank.ua/wp-content/uploads/2020/05/K-state.png' /> */}
        </Grid.Column>
      </Grid.Row>
  
      <Grid.Row textAlign='center' className="sec">
        <Grid.Column verticalAlign="middle" width={11}>
            <div className="cstyle">
            <Segment raised>
            <h3>Coronavirus disease (COVID-19): Read and Know</h3>
            <Label.Detail><h2><a href="./pages/Second">MATERNITY</a></h2></Label.Detail>
                  <Label basic color='red' pointing>
                    Click to read
                  </Label>
            </Segment>  
            </div>
          {/* <Image src='https://cryobank.ua/wp-content/uploads/2020/05/K-state.png' /> */}
        </Grid.Column>
        <Grid.Column width={5}>
            <Image src='https://www.cardinalhealth.com/content/dam/corp/products/professional-products/category-grid-asset/grid-square/grid-square-mom-baby-nurse.jpg' centered/>
        </Grid.Column>
      </Grid.Row>

  <Grid.Row textAlign='center' className="ter">
        <Grid.Column width={5}>
          <Image src='https://cdn.cdnparenting.com/articles/2018/04/556142875-H.jpg' centered/>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" width={11}>
            <div className="cstyle">
            <Segment raised>
              <h3>Professional Help</h3>   
              
              <Label.Detail>
              <h2><a href="./login">CONSULTANCY</a></h2>
              </Label.Detail>
              <Label basic color='red' pointing>
                    Click to Login if not logged in
                  </Label>
              
              {isLoggedIn && <Label.Detail>
              {/* <h2><a href="./pages/Third">CONSULTANCY</a></h2> */}
              <h2><a href="./pages/Third">CONSULTANCY</a></h2>
              </Label.Detail>
              }
                {isLoggedIn && <Label basic color='red' pointing>
                    Click to read
                  </Label>
                  }
            </Segment>  
            </div>
          {/* <Image src='https://cryobank.ua/wp-content/uploads/2020/05/K-state.png' /> */}
        </Grid.Column>
      </Grid.Row>
{/* }
</script> */}

    </Grid>
        </div>
    )
}

// const FETCH_POSTS_QUERY = gql`
//   {
//     getPosts{
//     id
//     body 
//     createdAt 
//     username 
//     likeCount
//     likes{
//       username
//     }
//     commentCount
//     comments{
//       id 
//       username 
//       createdAt 
//       body
//     }
//   }
//   }
// `;
export default Home;
