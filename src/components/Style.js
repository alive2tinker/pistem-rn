'use strict';

var React = require('react-native');

var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({

    mainContainer: {
        backgroundColor: 'rgb(24,24,66)',
        width: null,
        height: '100%',
        padding: 7.5
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 40
    },
    p: {
        color: '#fff'
    },
    widgetContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
    },
    serviceWidget: {
        width: '47%',
        height: 200,
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        margin: 5,
        borderRadius: 10,
    },
    standardTextColor: {
        color: '#ffffff'
    },
    primaryBackground: {
        backgroundColor: 'rgb(24,24,66)'
    },
    catchColor: {
        color: 'rgb(155,246,220)'
    },
    picker: {
        color: 'rgba(255,255,255,0.4)',
        textAlign: 'center',
        alignItems: 'center',
    },
    pickerContainer: {
        padding: 10,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: .3,
        borderRadius: 5,
        marginTop: 5
    },
    vehicleForm: {
        paddingTop: 10,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    formGroup: {
        marginTop: 5,
        marginBottom: 5
    },
    textInput: {
        marginTop: 5,
        borderWidth: .3,
        borderRadius: 5,
        borderColor: '#fff',
        height: 40,
        color: '#fff',
        textAlign: 'center'
    },
    primaryBtn: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'rgb(155,246,220)',
        borderRadius: 10
    },
    textCenter: {
        textAlign: 'center'
    },
    inputError: {
        borderColor: 'rgb(255,0,0)',
        backgroundColor: 'rgb(255,0,0)',
    }
});