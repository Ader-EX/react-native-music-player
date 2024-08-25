import { FlatList, Text, View, FlatListProps } from 'react-native'
import songs from '@/assets/data/library.json'
import TrackListItem from './TrackListItem'
import { unknownTrackImageUri } from '@/constants/images'
import { utilStyles } from '@/styles'

export type TracksListProps = Partial<FlatListProps<unknown>>

const TracksList = ({ ...flatListProps }: TracksListProps) => {
	return (
		<FlatList
			data={songs}
			renderItem={({ item: track }) => (
				<TrackListItem
					track={{
						title: track.title,
						image: track.artwork,
						artist: track.artist,
					}}
				/>
			)}
			{...flatListProps}
		/>
	)
}

export default TracksList
