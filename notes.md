React router :

route /menu -> Meal App

/home -> Ouvre la carte

- utilisation des GMaps, OpenStreetMap (OPEN source obligatoirement, pas de CB)
- Apel API Et afficher tous les restaux de l'ile de france,
- Mock d'une API () 6-8 obj des restaux,
- Quand on clicque sur un restau => **Modal** => Details
  - Autre appel d'API pour avoir les détails du restau
    - Avec plein de trucs comme nom, menu, plats sympas, prix moyen (Donc faire une autre API avec mocky)
    - Gestion des feedback http (lading, error, etc)

Sur l'APP meal APP

- Quand on clique sur commander -> on va sur la route commande avec la commande en cours
- Appel d'API pour le suivis de commande JSON Status et num du status
  - Avec l'affichage d'un status en fonction de ce qu'on reçoit
  - Gestion de l'image affiché en fonction du status

Le status doit avoir un CTA besoin d'aide qui nous emmène sur un formulaire.
Formulaire qui doit être géré par Formik et Yup

sur le formulaire un drop down list :

- dropdown list avec un SELECT sur le type de commande (probleme livraison, besoin aide autre). C'est une liste figé non get par l'API
- champ date, pré-remplis avec la date du jour qu'on peut modifier
- Champ time,
- Champ description, TEXT AREA,
- Photo, document pour uploader quelque chose
- Checkbox - Urgent ? BOOL oui non

css framwork conseillé (bootsrap, **Material**)

VERIF AVEEC DALI

--

APRES TOUT ça : sécu

- SSO
- sécurisation des routes
- configurer sev SSO et consume sur le front
