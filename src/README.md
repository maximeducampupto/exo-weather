Consignes :

- Vous allez réaliser une application météo à l'aide de l'API gratuite d'openweathermap
- Rendez vous sur https://openweathermap.org/price et souscrivez à l'option gratuite
- Vous trouverez ici la documentation de l'api : https://openweathermap.org/current#one
- Votre projet va également utiliser un script php pour effectuer les appels vers l'API
- En php, pour effectuer une requête distante, vous pouvez utiliser l'extension curl : http://php.net/manual/fr/book.curl.php
- Votre script php renverra du JSON
- Vous utiliserez ce JSON renvoyé avec Javascript/ajax pour afficher à l'utilisateur les informations météo

- Vous utiliserez Bootstrap pour la partie front
- L'appli doit être responsive
- Utilisez la maquette fournie pour réaliser l'interface de l'appli






Théorie :

Lorsqu'on execute un script php en utilisant une requête ajax, il est trés courant de renvoyer du texte sous forme de
JSON.

JSON veux dire JavaScript Object Notation, le texte renvoyé l'est sous forme d'objet, exemple :

var text = '{"propriete1" : valeur1, "propriete2" : valeur2}';

En javascript, on utilisera la méthode JSON.parse() pour convertir ce texte en un objet exploitable :

var text2 = JSON.parse(text);

On pourra par la suite acceder aux propriétés de l'objet de cette façon :

 text2.propriete1

