import React, { PureComponent } from 'react';
import { Button, Icon } from 'semantic-ui-react'

export default class BackButton extends PureComponent {
    render() {
        return (
            <div style={{position: 'absolute', marginTop: '6em', marginLeft: '2em'}}>
                <Button floated='left' basic color='teal' size='small' icon labelPosition='left' compact onClick={() => this.props.goBackAPage()}>
                    <Icon name='left arrow' />
                    Back
                </Button>
            </div>
        );
    }
}