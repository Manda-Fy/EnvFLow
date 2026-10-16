# EnvFlow

EnvFlow est un outil en ligne de commande (CLI) et un gestionnaire de configurations conçu pour simplifier, sécuriser et automatiser la synchronisation des fichiers `.env` au sein des équipes de développement.

## Vision du Projet

Dans de nombreux projets, les variables d'environnement (`.env`) sont partagées manuellement, ce qui entraîne des erreurs, des oublis ou des risques de sécurité. EnvFlow résout ce problème en centralisant la configuration et en permettant aux développeurs de mettre à jour leurs fichiers locaux en une seule commande.

## 🛠️ Stack Technique

* **Langage :** TypeScript
* **Runtime :** Node.js
* **Outils :** `tsx` (exécution à la volée), `fs/promises` (gestion des fichiers système)

## Architecture du Projet

```text
envflow/
├── src/
│   ├── commands/
│   │   └── pull.ts        # Logique de la commande pull (téléchargement et écriture)
│   ├── utils/
│   │   └── fileManager.ts # Gestionnaire de lecture/écriture des fichiers locaux
│   └── index.ts           # Point d'entrée principal du CLI
├── package.json
└── tsconfig.json
