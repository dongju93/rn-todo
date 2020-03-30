import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
  ScrollView
} from 'react-native';
import ToDo from "./todo";

// 휴대폰의 화면 크기를 구하는 정의
const { height, width } = Dimensions.get("window")

export default class App extends React.Component {
  state = {
    newToDo: ""
  }
  render() {
    const { newToDo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Native TO DO</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"New TO DO"}
            // value={newToDo}
            onChangeTex={this._controlNewToDo}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView>
            <ToDo />
            <Text>dewer</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
  _controlNewToDo = text => {
    this.setState({
      newToDo: text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "300",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    // Dimensions 함수로 구한 휴대폰의 width 에서 -25 크기의 card
    width: width - 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // iOS와 안드로이드 shadow 설정을 각자 다르게 주는 방법
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3,
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  }
});
