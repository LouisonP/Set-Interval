var intervalID = window.setInterval(animation, 500);


/* RésuméSection
Appelle une fonction de manière répétée, avec un certain délai fixé entre chaque appel.

SyntaxeSection
intervalID = window.setInterval(fonction,delai[,param1,param2, ...]);
intervalID = window.setInterval(code,delai);
où

intervalID est un ID unique d'intervalle qui peut être passé à window.clearInterval().
fonction est la fonction qui doit être appelée de manière répétée.
code, dans la syntaxe alternative, est une chaîne représentant le code à exécuter de manière répétée.
delai est le nombre de millisecondes (millièmes de seconde) que setInterval() doit attendre avant chaque appel de fonction. Si delai est inférieur à 10, la valeur utilisée est ramenée à 10.
Notez que le passage de paramètres supplémentaires à la fonction dans la première syntaxe ne fonctionne pas dans Internet Explorer. */

/*L'exemple qui suit continuera à appeler la fonction flashtext() toutes les secondes, jusqu'à ce que intervalID soit réinitialisé en cliquant sur le bouton Stop.*/

