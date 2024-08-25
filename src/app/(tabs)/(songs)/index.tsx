import TracksList from '@/components/TracksList'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'
import { defaultStyles } from '@/styles'
import { useNavigation } from 'expo-router'
import { Text, View } from 'react-native'

const SongsScreen = ({ searchText }: any) => {
	return (
		<View style={defaultStyles.container}>
			<TracksList scrollEnabled={true} />
		</View>
	)
}

export default SongsScreen
