import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
	const [name, setName] = useState("");

	const onUpdateNamepressHandler = (value) => {
		setName("Rahul Puri");
	};

	return (
		<View style={styles.container}>
			{name !== "" && (
				<View style={styles.header}>
					<Text style={styles.textStyle}>Hello, {name}!</Text>
				</View>
			)}
			<View style={styles.inputContianer}>
				<Text>Enter your name: </Text>
				<TextInput
					style={styles.inputStyle}
					placeholder="Your name goes here"
					onChangeText={(val) => setName(val)}
				/>
			</View>
			<View style={styles.buttonStyle}>
				<Button
					title="Update Name"
					onPress={onUpdateNamepressHandler}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		backgroundColor: "#87ceeb",
		padding: 20,
	},
	textStyle: {
		fontWeight: "bold",
	},
	buttonStyle: {
		marginTop: 20,
	},
	inputContianer: {
		marginTop: 20,
		backgroundColor: "orange",
		padding: 20,
	},
	inputStyle: {
		borderWidth: 1,
		borderColor: "#777",
		margin: 10,
		padding: 10,
		width: 200,
	},
});
