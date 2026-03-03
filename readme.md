#### 1- Les variables en informatique

Une variable est un espace memoire qui sert à stocker une valeur

En JS, une variable permet de stocker: Un nombre (Number), Un texte (String), Un booléen (Boolean), Une valeur undefined , Une valeur null , Un Symbol , Un BigInt ,  Un objet (Object), Un tableau (Array), Une fonction (Function), Une date (Date), Une expression régulière (RegExp), Une Map, Une Set , Une WeakMap, Une WeakSet, Une Promise, Une erreur (Error), Une instance de classe personnalisée, Même une combinaison de plusieurs types (ex: tableau d’objets, objet contenant des fonctions, etc.)

En simple, Une variable en JavaScript peut stocker : Une valeur primitive, Un objet, Une fonction, Une structure de données, Une instance, une promesse, Une erreur

1.1 En JS on peut déclarer une variable pas les mots clés suivants: "let", "var", "const"

1.2 Les types de variable en JS, en JS, il existe deux types de variables à savoir: Les types primitifs (number, String, Boolean, Undefind, Null, Symbol, Biglnt)
1.3 Les types complexes: Object, array, function, 



📘 Fiche de concepts – JavaScript (Phase 1)
1️⃣ Types de données

Primitives : number, string, boolean

Copiées par valeur

Exemple : let a = 5; let b = a; → b est indépendant de a

Erreur à éviter : penser qu’une primitive se met à jour si on modifie une autre variable

Objets / Tableaux

Passés par référence

Exemple : let obj2 = obj1; → toute modification affecte l’original

Erreur à éviter : modifier un tableau ou objet retourné sans vouloir toucher l’original

2️⃣ Fonctions

Définition : function nom(param) { ... }

Paramètres : valeurs reçues pour agir dans la fonction

return : renvoie une valeur au lieu d’afficher

Blocage conditionnel : utiliser return pour arrêter la fonction si une validation échoue

Erreurs fréquentes :

Modifier des objets globaux sans validation

Confondre console.log() (affichage) et return (donnée)

Oublier de vérifier les cas limites

3️⃣ Validation de données

Vérifier que les paramètres sont corrects avant toute modification

Exemple de règles :

nombre positif (amount > 0)

limite disponible (balance >= amount)

Erreurs fréquentes :

Ne pas vérifier les cas limites (0, égalité, dépassement)

Mettre la validation après avoir modifié la donnée

4️⃣ Mutation d’objet

Modifier directement une propriété d’un objet ou tableau

Exemple : account.balance += amount

Concept clé : comprendre quand on travaille sur une copie ou sur la référence originale

Erreurs fréquentes :

Confondre primitive et référence

Penser qu’une variable copiant un objet est indépendante (ce n’est pas le cas pour les objets)

5️⃣ Historique / journalisation

Conserver toutes les actions dans un tableau d’objets

Chaque entrée contient : identifiant, type, valeur, date

Sert à retracer les modifications et vérifier le comportement

Erreurs fréquentes :

Ne pas créer d’ID unique → difficulté à identifier les actions

Modifier directement l’historique sans enregistrement structuré

6️⃣ Bonnes pratiques

const par défaut, let seulement si la variable change

Fonctions courtes et claires

Noms explicites pour variables et fonctions

Validation avant mutation

Séparer :

logique métier (calcul, validation, mutation)

affichage (console.log)

7️⃣ Concepts clés à retenir

Primitive vs Référence → comprendre ce qui est copié ou partagé

Return vs console.log → séparer données et affichage

Validation avant mutation → protéger les données

Blocage conditionnel avec return → arrêter la fonction dès qu’une erreur est détectée

Historique / journalisation → garder trace de toute modification

Cas limites → 0, égalité, dépassement, montant négatif


