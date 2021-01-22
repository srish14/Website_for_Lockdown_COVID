import React from 'react';
import { Message, Select, Image, Form, TextArea, Button, Card, Segment, Icon } from 'semantic-ui-react';
import './SelectArea.js';
import { useQuery } from '@apollo/react-hooks';
import SelectArea from './SelectArea.js';
import './StyleConsult.css';

function Third(){
    return(
        <div className='entire-page'>
            <h1 className='main-head'>CONSULTANCY</h1>

<Card centered>
    <Image src='https://www.qub.ac.uk/directorates/media/Media,828594,en-800x630.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Dr. Manju Patidar</Card.Header>
      <Card.Meta>
        <span className='date'>Gynaecologist | Obstetrician | Infertility specialist | Laparoscopic Surgeon</span>
      </Card.Meta>
            <Card.Description>
            Asha Nagar, Kanadia Road, Bangali
        Square, Indore.        
            </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        088892X884
      </a>
    </Card.Content>
  </Card>
            {/* <Message color='red'></Message> */}
            
{/* <Segment.Group> */}


<div className='mid-head'>
<Segment raised>
        <h2>Your Preferred Area</h2>
            <section className='xd'>
                <SelectArea>
                </SelectArea>
        
            </section>  
</Segment>
</div>
 
            <Segment raised>
               <div className='mid-head'>
               <h2>Available Gynecologist</h2>
                <Image src='https://img.freepik.com/free-vector/gynecology-concept-illustration_23-2148651431.jpg?size=338&ext=jpg' size='medium' circular centered/>
                </div> 
            <Segment.Group>

            <Card.Group>
                <Card fluid color='red' header='Doctor1' href='#card-example-link-card' header='Dr. Sushma Jhamad' meta='Obstetrician | Gynaecologist' description='98931255x6' 
                />
                <Card fluid color='orange' header='Doctor 2' href='#card-example-link-card' header='Dr. Hansali Neema Bhartiya' meta='Gynaecologist' description='257X0034.'  />
                <Card fluid color='yellow' header='Doctor 3' href='#card-example-link-card' header='Dr. Neelu Soni' meta='Obstetrician | Gynecologist' description='24687x78283'   />
                <Card fluid color='yellow' header='Doctor 4' href='#card-example-link-card' header='Dr. Moon Jain' meta='Obstetrics | Gynaecologist | Infertility specialist' description='24687x78283'   />
                <Card fluid color='yellow' header='Doctor 5' href='#card-example-link-card' header='Dr. Raj Singhal' meta='Obstetrics | Gynaecologist' description='24687x78283'   />

                <Card fluid color='yellow' header='Doctor 6' href='#card-example-link-card' header='Dr. Archana Dubey' meta='Gynaecologist | High Risk Pregnancy Specialist' description='24687x78283'   />
                <Card fluid color='yellow' header='Doctor 7' href='#card-example-link-card' header='Dr. Prerna Jain' meta='Gynaecologist' description='24687x78283'   />
                <Card fluid color='yellow' header='Doctor 8' href='#card-example-link-card' header='Dr. Arpana Jain' meta='Laparoscopic Surgeon | Gynecologist | Infertility
Specialist' description='24687x78283'   />

                <Card fluid color='yellow' header='Doctor 9' href='#card-example-link-card' header='Dr. Diptee Mahabale' meta='Gynecologist' description='24687x78283'   />
                <Card fluid color='yellow' header='Doctor 10' href='#card-example-link-card' header='Dr. Neeti Gupta' meta='Obstetrician | Gynecologist' description='24687x78283'   />
            </Card.Group>
            </Segment.Group>
            </Segment>  
{/* </Segment.Group> */}

            {/* <Segment padded='very'>
            <Message color='blue'> Any suggestion? Any problem you faced? Any update you want us to know.</Message>
            <Form>
                <TextArea placeholder='Share with us' />
                <Button floated='right' inverted color='blue'>
                Submit
            </Button>
            </Form>
            </Segment> */}

            <Image src='https://dreulemd.com/wp-content/uploads/2015/05/Gynecology.jpg' size="small" centered/>
            
           

        </div>
    )
}

export default Third;