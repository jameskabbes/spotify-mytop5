from pathlib import Path
import requests
import json

USER_TOKEN = Path('USER_TOKEN.txt').read_text().strip()

artists = [ line.strip() for line in Path( 'artists.txt' ).read_text().split('\n') ]
tracks =  [ line.strip() for line in Path( 'tracks.txt'  ).read_text().split('\n') ]

artists_data = []
tracks_data = []

def call_api( search_term, type ):

	return requests.get( 
		'https://api.spotify.com/v1/search',
		headers={
			"Authorization": "Bearer {}".format( USER_TOKEN )
		},
		params={
			'q': search_term,
			'type': type
		}
	)

for artist in artists:
	artists_data.append( call_api( artist, 'artist' ).json()['artists']['items'][0] )

for track in tracks:
	tracks_data.append( call_api( track, 'track' ).json()['tracks']['items'][0] )

f = open( '../src/demo.json', 'w' )
json.dump( { 'artists': artists_data, 'tracks': tracks_data }, f )
f.close()

