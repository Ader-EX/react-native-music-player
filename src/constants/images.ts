import unkownArtist from '@/assets/unknown_artist.png'
import unkownTrack from '@/assets/unknown_track.png'
import { Image } from 'react-native'

export const unknownTrackImageUri = Image.resolveAssetSource(unkownTrack).uri
export const unknownArtistImageUri = Image.resolveAssetSource(unkownArtist).uri
