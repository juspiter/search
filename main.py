from pymongo import MongoClient
from storage import Storage


# coll = MongoClient('172.17.0.3:27017').jusdb.lawsuits

# coll.insert_one({
# 		"number": "0710802-55.2018.8.02.0001",
# 		"changes":
# 		[
# 			{
# 				"date": "22/02/2021",
# 				"title": "Remetido recurso eletrônico ao Tribunal de Justiça/Turma de recurso",
# 				"content": ""
# 			},
# 			{
# 				"date": "10/02/2021",
# 				"title": "Juntada de Documento",
# 				"content": "Nº Protocolo: WMAC.21.70031538-2 Tipo da Petição: Contrarrazões Data: 10/02/2021 19:27"
# 			}
# 		]
# })

ret = Storage('172.17.0.3:27017')
print(ret.get_lawsuit())