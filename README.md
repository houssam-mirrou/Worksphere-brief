# WorkSphere — Application Web de Gestion Visuelle du Personnel
WorkSphere est une application web moderne et interactive permettant de gérer les employés à travers une représentation visuelle du plan d’un bâtiment.  
Elle offre une gestion dynamique, intuitive et en temps réel des zones de travail, tout en respectant des règles métiers basées sur les rôles des employés.

## Fonctionnalités principales

### Gestion des employés
- Ajout d’un employé via une modale dynamique 
- Formulaire interactif avec validation REGEX 
- Gestion de plusieurs expériences professionnelles 
- Prévisualisation de l'image via URL 
- Edition complète du profil (nom, rôle, email, téléphone, photo, expériences) 
- Suppression d’employés 
- Recherche par nom ou rôle 
- Photo par défaut pour les employés sans image

### Plan Interactif du Bâtiment

Le plan comprend **6 zones distinctes** :
1. Salle de conférence 
2. Réception 
3. Salle des serveurs 
4. Salle de sécurité 
5. Salle du personnel 
6. Salle d’archives 

Chaque zone permet :
- L’affichage des employés assignés 
- L’ajout d’employés via un bouton “+” 
- La suppression via une icône rouge 
- L’aperçu du profil d’un employé en cliquant dessus 
- Un comportement responsive (mobile + desktop)

## Règles Métiers (Restrictions par rôle)
| Rôle              | Zones autorisées                     |
|-------------------|--------------------------------------|
| Réceptionniste    | Réception uniquement                 |
| Technicien IT     | Salle des serveurs + zones générales |
| Agent de sécurité | Salle de sécurité + zones générales  |
| Manager           | Accès à toutes les zones             |
| Nettoyage         | Toutes zones sauf Archives           |
| Autres rôles      | Zones générales uniquement           |
 ----------------------------------------------------------
## 🔒 Restrictions d’accès par rôle

| Rôle                  | Accès autorisé                                                                            | Accès interdit                        |
|-----------------------|-------------------------------------------------------------------------------------------|---------------------------------------|
| **Réceptionniste**    | Réception, Salle du personnel, Salle de conférence, Archives                              | Salle des serveurs, Salle de sécurité |
| **Technicien IT**     | Salle des serveurs, Salle du personnel, Salle de conférence, Archives                     | Réception, Salle de sécurité          |
| **Agent de sécurité** | Salle de sécurité, Salle du personnel, Salle de conférence, Archives                      | Réception, Salle des serveurs         |
| **Manager**           | **Toutes les zones sans exception**                                                       | —                                     |
| **Nettoyage**         | Salle du personnel, Salle de conférence, Réception, Salle des serveurs, Salle de sécurité | **Salle d’archives**                  |
| **Autres rôles**      | Zones générales (Salle du personnel, Salle de conférence, Archives\*) | Zones restreintes (Réception, Serveurs, Sécurité)         |



## Persistance des données
Le projet utilise **LocalStorage** pour sauvegarder :
- La liste des employés 
- Les zones assignées 
- Les expériences 
- L'état global du plan

Toutes les données sont restaurées automatiquement au rechargement de la page.


## Responsive Design
L’interface est entièrement responsive pour :
- Ordinateurs (petits et grands écrans)
- Tablettes (portrait et paysage)
- Mobiles (portrait et paysage)

Basé sur :
- **CSS Grid**
- **Flexbox**
- **TailwindCSS**
- Icônes FontAwesome

## Interactions Utilisateur

### Ajouter un employé

1. Cliquer sur **Add New Worker** 
2. Remplir le formulaire 
3. Ajouter des expériences si souhaité 
4. Valider → l’employé apparaît dans la liste “Unassigned Staff” 

### Assigner un employé à une zone
- Cliquer sur le **+** d’une zone 
- Choisir un employé éligible 
- L’employé est immédiatement affiché dans la zone

### Retirer un employé d’une zone
- Cliquer sur l’icône rouge 
- L’employé retourne dans “Unassigned”

### Consulter les détails
- Cliquer sur l’employé 
- Voir : nom, rôle, photo, expériences, email, téléphone, localisation

## Structure du projet

├── index.html # Structure HTML du projet  
├── css/  
│ └── style.css # Styles + Tailwind CSS  
├── script/  
│ └── script.js # Logique complète de l'application  
├── img/  
│ ├── phone.png  
│ ├── desktop.png  
│ └── profile.png # Image par défaut  


###  Références utilisées dans ce dépôt

- **index.html** → Structure principale, formulaires, modales et plan 
  (Voir le fichier original) 
- **script.js** → Gestion du DOM, logique métier, LocalStorage, UI dynamique 
  (Voir le fichier original)

---

## Installation

### 1) Cloner le dépôt
```bash
git clone https://github.com/votre-nom/WorkSphere.git
cd WorkSphere

### 2) Lancer le projet
Aucun serveur nécessaire, il suffit d’ouvrir :

index.html

# User Stories (Scrum)

## Concepteur (Designer)

Créer une interface moderne, fluide et intuitive

Choisir une palette cohérente et des icônes adaptées

Concevoir la version mobile + desktop

## Développeur Front-End

Construire la structure HTML

Implémenter les formulaires dynamiques

Gérer la prévisualisation d’image

Ajouter les validations via REGEX

Intégrer les restrictions métiers

Ajouter le bouton “+” par zone

Afficher les popups de détails

Gérer le LocalStorage

Rendre le site responsive

Valider HTML/CSS via W3C

## Scrum Master

Organiser les tâches sur GitHub Projects

Structurer le dépôt Git avec des branches claires

Présenter la démo finale

# Fonctionnalités Bonus (Optionnel)

Modification des employés directement depuis une zone ou sur unassigned staff

L'ajout du localStorage pour storer les employés et garder la page comme il est

# Auteur
Développé par Houssam Mirrou dans le cadre du projet WorkSphere.
Vos contributions et retours sont les bienvenus !
