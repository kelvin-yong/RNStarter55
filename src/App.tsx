/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Hello } from "src/components/Hello";

interface Props {}
export default class App extends Component<Props> {
	public render() {
		return (
			<View style={styles.container}>
				<Hello name="Person" enthusiasmLevel={5} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
});
