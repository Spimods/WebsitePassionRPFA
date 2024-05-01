import requests


def getServer():
	r = requests.get("http://213.199.55.142:30120/dynamic.json")
	players = r.json()
	return players

print(str(getServer()['clients'])+"/"+str(getServer()['sv_maxclients']))