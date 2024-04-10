import React from 'react';
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
} from 'semantic-ui-react';

const style ={
        container:{
            innerHeight:"3rem",
            border:"1px solid red ",
            display:"flex",
            justifycontent:"space-between",
        }
    
}



function Element(){
    return (
        <>
            <Button>add</Button>
            <Header as='h1' content="responsive"textAlign='center' />
            <Header as='h1' content="responsive"textAlign='center' />

            <Container  >
                <Segment>
                    segment1
                </Segment>
                <Segment>
                    segment2
                </Segment>
                <Segment>
                    segment3
                </Segment>
            </Container>
        {/*this is test  */}
            <Grid columns={2} stackable  >
                <Grid.Column>
                    <Segment>content1</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>content1</Segment>
                </Grid.Column>
            </Grid>
            {/* this is test */}
            <Grid columns={3} stackable >
                <Grid.Column>
                    <Segment>content1</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>content1</Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>content1</Segment>
                </Grid.Column>
            </Grid>









            <Icon>icon</Icon>
            <Image>image</Image>
            <Item>item</Item>
            <Label>labek</Label>
            <Menu>menu</Menu>
            <Step>step</Step>
            <Table>table</Table>
        </>
    )
}

export default Element;