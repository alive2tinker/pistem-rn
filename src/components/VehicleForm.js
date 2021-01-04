import React, { Component } from 'react'
import { View, Text, TextInput, Linking, Button, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from 'react-native-woodpicker'
export default class VehicleForm extends Component
{
    state = {
        isLoading: true,
        make: null,
        model: null,
        year: null,
        mileage: null,
        makes: [],
        models: [],
        years: [
            { label: "1980", value: 1980 },
            { label: "1981", value: 1981 },
            { label: "1982", value: 1982 },
            { label: "1983", value: 1983 },
            { label: "1984", value: 1984 },
            { label: "1985", value: 1985 },
            { label: "1986", value: 1986 },
            { label: "1987", value: 1987 },
            { label: "1988", value: 1988 },
            { label: "1989", value: 1989 },
            { label: "1990", value: 1990 },
            { label: "1991", value: 1991 },
            { label: "1992", value: 1992 },
            { label: "1993", value: 1993 },
            { label: "1994", value: 1994 },
            { label: "1995", value: 1995 },
            { label: "1996", value: 1996 },
            { label: "1997", value: 1997 },
            { label: "1998", value: 1998 },
            { label: "1999", value: 1999 },
            { label: "2000", value: 2000 },
            { label: "2001", value: 2001 },
            { label: "2002", value: 2002 },
            { label: "2003", value: 2003 },
            { label: "2004", value: 2004 },
            { label: "2005", value: 2005 },
            { label: "2006", value: 2006 },
            { label: "2007", value: 2007 },
            { label: "2008", value: 2008 },
            { label: "2009", value: 2009 },
            { label: "2010", value: 2010 },
            { label: "2011", value: 2011 },
            { label: "2012", value: 2012 },
            { label: "2013", value: 2013 },
            { label: "2014", value: 2014 },
            { label: "2015", value: 2015 },
            { label: "2016", value: 2016 },
            { label: "2017", value: 2017 },
            { label: "2018", value: 2018 },
            { label: "2019", value: 2019 },
            { label: "2020", value: 2020 },
            { label: "2021", value: 2021 },
        ],
        errors: []
    };

    componentDidMount()
    {
        fetch('http://pistem-app.lndo.site/api/makes')
            .then((response) =>
            {
                if (response.status !== 200)
                {
                    throw new Error(`There was an error with status code ${response.status}`)
                }
                return response.json()
            })
            .then((json) =>
            {
                this.setState({ makes: json.data });
            })
            .catch((error) => console.error(error))
            .finally(() =>
            {
                this.setState({ isLoading: false });
            });
    }


    handleMakePicker = data =>
    {
        this.setState({ make: data });
        fetch(`http://pistem-app.lndo.site/api/modeles/${data.value}`)
            .then((response) =>
            {
                if (response.status !== 200)
                {
                    throw new Error(`There was an error with status code ${response.status}`)
                }
                return response.json()
            })
            .then((json) =>
            {
                this.setState({ models: json.data });
            })
            .catch((error) => console.error(error))
            .finally(() =>
            {
                this.setState({ isLoading: false });
            });
    };

    handleModelePicker = data =>
    {
        this.setState({ model: data });
    };

    handleYearsPicker = data => 
    {
        this.setState({ year: data })
    };

    updateMileage = data => 
    {
        this.setState({ mileage: data })
    };

    hasError = (fieldKey) =>
    {
        console.log(this.state.errors);
        this.state.errors.forEach(key =>
        {
            if (key.key == fieldKey)
            {
                console.log("we have a match")
                return true;
            }
        })
    }

    validateForm = () =>
    {
        var result = true;

        if (this.state.make === null)
        {
            result = result && false;
            this.setState({ errors: [...this.state.errors, { key: "make", message: "make field is required" }] })
        }

        return result;
    }
    submitForm = () =>
    {
        if (this.validateForm())
        {
            //
        }
    }
    render()
    {
        var styles = require('./Style')
        return (
            <View style={styles.vehicleForm}>
                <ScrollView>
                    <View style={styles.formGroup}>
                        <Text style={[styles.standardTextColor, styles.boldText]}>Make</Text>
                        <Picker
                            style={[styles.pickerContainer, this.hasError("make") ? styles.inputError : null]}
                            placeholderStyle={[styles.picker, this.hasError("make") ? styles.inputError : null]}
                            onItemChange={this.handleMakePicker}
                            items={this.state.makes}
                            title="Make"
                            placeholder="Select Make"
                            item={this.state.make}
                            //backdropAnimation={{ opactity: 0 }}
                            //androidPickerMode="dropdown"
                            isNullable
                            disabled={this.state.makes.length === 0}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.standardTextColor, styles.boldText]}>Model</Text>
                        <Picker
                            style={styles.pickerContainer}
                            placeholderStyle={styles.picker}
                            onItemChange={this.handleModelePicker}
                            items={this.state.models}
                            title="Model"
                            placeholder="Select Model"
                            item={this.state.model}
                            //backdropAnimation={{ opactity: 0 }}
                            //androidPickerMode="dropdown"
                            isNullable
                            disabled={this.state.models.length === 0}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.standardTextColor, styles.boldText]}>Model</Text>
                        <Picker
                            style={styles.pickerContainer}
                            placeholderStyle={styles.picker}
                            onItemChange={this.handleYearsPicker}
                            items={this.state.years}
                            title="Year"
                            placeholder="Select Year"
                            item={this.state.year}
                            //backdropAnimation={{ opactity: 0 }}
                            //androidPickerMode="dropdown"
                            isNullable
                            disabled={this.state.models.length === 0}
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={[styles.standardTextColor, styles.boldText]}>Mileage</Text>
                        <TextInput
                            keyboardType={"numeric"}
                            style={styles.textInput}
                            onChangeText={this.updateMileage}
                            placeholder="vehicle mileage"
                            placeholderTextColor='rgba(255,255,255,0.4)'
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.standardTextColor}>* by clicking submit, you agree to all Pistem&copy; terms and services.<Text style={{ textDecorationLine: 'underline' }} onPress={() => Linking.openURL('https://google.com')}>You can read it here</Text></Text>
                    </View>
                    <View style={styles.formGroup}>
                        <TouchableOpacity onPress={this.submitForm} style={styles.primaryBtn}>
                            <Text style={[styles.textCenter, styles.boldText, { color: 'rgb(24,24,66)' }]}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        )
    }
}
