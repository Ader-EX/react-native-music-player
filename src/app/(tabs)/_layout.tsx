import { Tabs } from 'expo-router'
import React from 'react'

import { colors, fontSize } from '@/constants/tokens'
import { BlurView } from 'expo-blur'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const TabsNavigation = () => {
	return (
		<Tabs
			screenOptions={({ route }) => ({
				tabBarActiveTintColor: colors.primary,
				tabBarLabelStyle: {
					fontSize: fontSize.xs,
					fontWeight: '800',
					textAlign: 'center',
				},
				headerShown: false,
				tabBarStyle: {
					position: 'absolute',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					borderTopWidth: 0,
					paddingTop: 10,
					backgroundColor: colors.background,
					paddingBottom: 8,
					height: 70,
				},
				tabBarBackground: () => (
					<BlurView
						intensity={20}
						style={{
							...StyleSheet.absoluteFillObject,
							overflow: 'hidden',
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
						}}
					/>
				),
				tabBarIcon: ({ color, size }) => {
					let iconName

					if (route.name === 'favorites') {
						iconName = 'heart'
					} else if (route.name === 'playlists') {
						iconName = 'musical-notes'
					} else if (route.name === '(songs)') {
						iconName = 'musical-note'
					} else if (route.name === 'artists') {
						iconName = 'person'
					}

					return <Icon name={iconName ?? ''} size={size} color={color} />
				},
			})}
		>
			<Tabs.Screen
				name="favorites"
				options={{
					title: 'Favorites',
				}}
			/>
			<Tabs.Screen
				name="playlists"
				options={{
					title: 'Playlists',
				}}
			/>
			<Tabs.Screen
				name="(songs)"
				options={{
					title: 'Songs',
				}}
			/>
			<Tabs.Screen
				name="artists"
				options={{
					title: 'Artists',
				}}
			/>
		</Tabs>
	)
}

export default TabsNavigation
