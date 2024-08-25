import { unknownTrackImageUri } from '@/constants/images'
import { colors, fontSize } from '@/constants/tokens'
import { defaultStyles } from '@/styles'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import FastImage from 'react-native-fast-image'

export type TrackListItemProps = {
	track: { title: string; image?: string; artist?: string }
}

const TrackListItem = ({ track: { title, image, artist } }: TrackListItemProps) => {
	const isActive = false
	return (
		<TouchableHighlight>
			<View>
				<View className="flex  border-white flex-row justify-between items-center p-4 gap-x-2">
					<View>
						<Image
							source={{
								uri: image ?? unknownTrackImageUri,
							}}
							style={{ ...styles.trackArtworkImage, opacity: isActive ? 0.5 : 1 }}
						/>
					</View>
					{/* Track Title & Artist */}
					<View style={{ width: '70%' }}>
						<Text
							numberOfLines={2}
							style={{
								...styles.trackTitleText,
								color: isActive ? colors.primary : colors.text,
							}}
						>
							{title}
						</Text>

						<Text
							numberOfLines={1}
							style={{
								...styles.trackArtistText,
								color: isActive ? colors.primary : colors.text,
							}}
						>
							{artist ?? 'Unknown Artist'}
						</Text>
					</View>
					<View className="border-2">
						<Text
							style={{
								color: colors.text,
							}}
						>
							...
						</Text>
					</View>
				</View>
			</View>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	trackArtworkImage: {
		width: 50,
		height: 50,
		borderRadius: 10,
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		fontSize: fontSize.xs,
		maxWidth: '90%',
		color: colors.textMuted,
		marginTop: 4,
	},
})

export default TrackListItem
