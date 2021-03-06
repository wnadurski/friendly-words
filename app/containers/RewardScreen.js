import React, {Component, Fragment} from "react";
import {View, StyleSheet,} from "react-native";
import WordCard from "../components/ui/wordCard/WordCard";
import _ from "lodash";
import {speak} from '../services/speaker';
import BorderedButton from "../components/ui/borderedButton/BorderedButton";
import {width} from "../services/deviceInfo";
import AnimatedBalloons from "../components/animations/AnimatedBalloons";
import {Header} from "../components/ui/Header";
import {TopbarContainer, PositionRight} from "../components/ui/Topbar";
import ReadingCommandButton from '../components/game/ReadingCommandButton';

const withReward = WrappedComponent =>
  class extends Component {
    componentDidMount() {
      this.props.shouldReadReward
        ? this.readReward()
        : _.noop();
    }

    readReward() {
      speak(this.props.textReward)
    }

    render() {
      return <Fragment>
        <WrappedComponent {...this.props} />
        <AnimatedBalloons/>
      </Fragment>
    }
  };

export class ReinforcingScreen extends Component {

  componentDidMount() {
    speak(this.props.word.name)
  }

  render() {
    return <Fragment>
      <TopbarContainer>
        <Header>{this.props.word.name}</Header>
        <PositionRight><ReadingCommandButton command={this.props.word.name}/></PositionRight>
      </TopbarContainer>
      <View style={styles.container}>
      <WordCard imageUrl={this.props.word.image} cardSize={width / 2.5} noBorder={true}/>
      <View style={styles.topbar}>
        <BorderedButton icon="left-arrow" color="#E37346" onPress={this.props.onPrevPress}/>
        <BorderedButton icon="right-arrow" color="#53AD4B" onPress={this.props.onPress}/>
      </View>
      </View>
    </Fragment>
  }
}

export default RewardScreen = withReward(ReinforcingScreen);

const styles = StyleSheet.create({

  topbar: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    paddingVertical: 10
  },

  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
}});

