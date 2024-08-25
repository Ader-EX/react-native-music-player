import React, { useRef } from 'react'
import { StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { View, Animated, Text, StyleSheet } from 'react-native'
import SongsScreen from '.'
import { colors } from '@/constants/tokens'
import { useNavigationSearch } from '@/hooks/useNavigationSearch'

const HEADER_MAX_HEIGHT = 200
const HEADER_MIN_HEIGHT = 100
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

const SongsScreenLayout = () => {
	const scrollY = useRef(new Animated.Value(0)).current

	const headerHeight = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
		extrapolate: 'clamp',
	})

	const headerTitleSize = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [24, 16],
		extrapolate: 'clamp',
	})

	const searchText = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Search for songs',
		},
	})
	return (
		<View style={defaultStyles.container}>
			<Animated.View style={[styles.header, { height: headerHeight }]}>
				<Animated.Text style={[styles.headerTitle, { fontSize: headerTitleSize }]}>
					Songs
				</Animated.Text>
			</Animated.View>
			<Animated.ScrollView
				contentInsetAdjustmentBehavior={'automatic'}
				contentContainerStyle={styles.scrollViewContent}
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
					useNativeDriver: false,
				})}
				scrollEventThrottle={16}
			>
				<SongsScreen searchText={searchText} />
			</Animated.ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: colors.background,

		justifyContent: 'center',
		paddingTop: 36,
		paddingHorizontal: 16,
		zIndex: 1,
	},
	headerTitle: {
		fontWeight: 'bold',
		color: colors.primary,
	},
	searchBarPlaceholder: {
		height: 40,
		marginTop: 8,
		backgroundColor: colors.background,
	},
	scrollViewContent: {
		paddingTop: HEADER_MAX_HEIGHT,
	},
})

export default SongsScreenLayout
