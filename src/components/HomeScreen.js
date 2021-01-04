import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
export default class HomeScreen extends Component
{
    render()
    {
        var styles = require('./Style');
        return (
            <SafeAreaView style={{ backgroundColor: 'rgb(24,24,66)' }}>
                <View style={styles.mainContainer}>
                    <Text style={[styles.h1, styles.catchColor]}>Pistem</Text>
                    <Text style={styles.p}>We are an application that specializes in cars commerce</Text>
                    <View style={styles.widgetContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Appraisal')} style={styles.serviceWidget}>
                            <Text style={[styles.standardTextColor]}>Appraise Your Car</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.serviceWidget}>
                            <Text style={[styles.standardTextColor]}>Appraise Your Car</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.serviceWidget}>
                            <Text style={[styles.standardTextColor]}>Appraise Your Car</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

});