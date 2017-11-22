import React from "react";
import {Text, View, StyleSheet} from "react-native";
import _ from "lodash";
import CapriolaText from "../ui/CapriolaText";
import colors from "../../assets/colours";
import {isPhone} from "../../services/deviceInfo";

export default Command = ({text, word, style}) =>
	<View style={styles.container}>
		<CapriolaText style={styles.text}>{_.replace(text, '{slowo}', word)}</CapriolaText>
	</View>;

const styles = StyleSheet.create({
	text: {
		fontSize: isPhone() ? 30 : 50,
		color: colors.white
	}
});
