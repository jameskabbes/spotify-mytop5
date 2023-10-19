from pathlib import Path
import requests
import json

USER_TOKEN = Path('USER_TOKEN.txt').read_text().strip()

artists = [line.strip() for line in Path('artist.txt').read_text().split('\n')]
tracks = [line.strip() for line in Path('track.txt').read_text().split('\n')]

artists_data = []
tracks_data = []


def call_api(search_term, type):

    return requests.get(
        'https://api.spotify.com/v1/search',
        headers={
            "Authorization": "Bearer {}".format(USER_TOKEN)
        },
        params={
            'q': search_term,
            'type': type
        }
    )


for artist in artists:
    res = call_api(artist, 'artist').json()
    keys = {'name', 'images'}
    d = {}
    for key in keys:
        d[key] = res['artists']['items'][0][key]
    artists_data.append(d)

for track in tracks:
	res = call_api( track, 'track').json()
    keys = {'name', 'images'}
	d = {}
	for key in keys:
        d[key] = res['tracks']['items'][0][key]
        
	tracks_data.append(d)

f = open('../src/demo.json', 'w')
json.dump({'artist': artists_data, 'track': tracks_data}, f)
f.close()
