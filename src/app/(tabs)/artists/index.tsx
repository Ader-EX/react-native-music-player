import TracksList from '@/components/TracksList'
import { defaultStyles } from '@/styles'
import { ScrollView, Text, View } from 'react-native'

const ArtistsScreen = () => {
	return (
		<View style={defaultStyles.container}>
			<ScrollView>
				<TracksList />
			</ScrollView>
		</View>
	)
}

export default ArtistsScreen
