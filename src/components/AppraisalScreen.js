import React, { Component } from 'react'
import { SafeAreaView, View, Text } from "react-native";
import VehicleForm from './VehicleForm';
export default class AppraisalScreen extends Component
{
    state = {
        language: 'java',
    };
    render()
    {
        var styles = require('./Style');
        return (
            <SafeAreaView style={[styles.primaryBackground]}>
                <View style={styles.mainContainer}>
                    <Text style={[styles.h1, styles.catchColor]}>New Appraisal</Text>
                    <Text style={[styles.p]}>Service Description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </Text>
                    <VehicleForm action="appraise"/>
                </View>
            </SafeAreaView>
        )
    }
}
