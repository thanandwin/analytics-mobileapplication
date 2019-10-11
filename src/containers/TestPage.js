import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import WorkThrough from 'WorkThrough';
import { icons } from '@assets';

// example data
const flowData = {
    bgColor: "rgb(245, 245, 245)",
    fgColor: "#4A4A4A",
    screens:
        [
            { icon: "logo.png", title: "TNW Application", description: "Welcome Our Application." },
            { icon: "face.png", title: "FaceScan", description: "Face recognition login system provides utmost level of security to the websites of organizations by securing user specific information such as passwords.." },
            { icon: "message.png", title: "Get Notified", description: "Social Network" },
        ]
}

export default class TestPage extends Component {
    componentDidMount() {
        StatusBar.setHidden(true);
        setTimeout(() => {
            this.props.navigation.navigate('loginScreen');
        }, 1000);
    }

    _onWorkFlowFinished = () => {
        this.props.navigation.navigate('SignIn');
    }
    render() {
        return (
            <View style={styles.container}>
                <WorkThrough
                    iconpackage={icons}
                    data={flowData}
                    onFinished={this._onWorkFlowFinished} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});
