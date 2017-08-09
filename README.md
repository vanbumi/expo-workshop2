# Expo Workshop2

## Work with Image

	export default class App extends React.Component {
		render() {
			return (
			<View style={styles.container}>
				<Image 
					style={{ flex: 1 }} 
					source={ require('./assets/cat.jpg') } 
				/>
				<Text>
					Hello Cat! and Man!
				</Text>
				<Image style={{ flex: 1 }} source={ require('./assets/man.jpg') } />
			</View>
			);
		}
	}