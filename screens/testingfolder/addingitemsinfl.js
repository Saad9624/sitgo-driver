import { StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput } from 'react-native';
 import React from 'react' ;

export default class Myproject extends React.Component {
 
  constructor(props) {
    
    super(props);
 
    this.array = [{
      title: 'ONE'
    },
    {
      title: 'TWO'
    },
    {
      title: 'THREE'
    },
    {
      title: 'FOUR'
    },
    {
      title: 'FIVE'
    }
    ],
 
      this.state = {
 
        arrayHolder: [],
 
        textInput_Holder: ''
 
      }
 
  }
 
  componentDidMount() {
 
    this.setState({ arrayHolder: [...this.array] })
 
  }
 
 
  joinData = () => {
 
    this.array.push({title : this.state.textInput_Holder});
 
    this.setState({ arrayHolder: [...this.array] })
 
  }
 
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
 
  GetItem(item) {
 
    Alert.alert(item);
 
  }
 
 
  render() {
    return (
 
      <View style={styles.MainContainer}>
 
        <TextInput
          placeholder="Enter Value Here"
          onChangeText={data => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
        />
 
        <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >
 
          <Text style={styles.buttonText}> Add Values To FlatList </Text>
 
        </TouchableOpacity>
 
        <FlatList
 
          data={this.state.arrayHolder}
 
          width='100%'
 
          extraData={this.state.arrayHolder}
 
          keyExtractor={(index) => index.toString()}
 
          ItemSeparatorComponent={this.FlatListItemSeparator}
 
          renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.title)} > {item.title} </Text>}
        />
 
 
      </View>
 
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
 
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2
 
  },
 
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
 
  textInputStyle: {
 
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12
  },
 
  button: {
 
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10
  },
 
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
 
});