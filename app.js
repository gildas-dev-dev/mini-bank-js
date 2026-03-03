/******************************************************
 * 1️⃣ Création de l'utilisateur
 * ----------------------------------------------------
 * Représente le propriétaire du compte bancaire.
 ******************************************************/

const user = {
    id: 1, // Identifiant unique de l'utilisateur
    firstName: "Gildas", // Prénom
    lastName: "Mebada", // Nom
    email: "gildas.mebada@email.com", // Email
    isActive: true // Statut actif/inactif
};


/******************************************************
 * 2️⃣ Création du compte bancaire
 * ----------------------------------------------------
 * Chaque compte appartient à un utilisateur.
 * owner contient une référence vers l'objet user.
 ******************************************************/

const account = {
    accountNumber: "ACC-001", // Numéro du compte
    balance: 0, // Solde initial (toujours 0 à la création)
    currency: "XAF", // Devise du compte
    owner: user, // Référence vers l'utilisateur (PAS une copie)
    transactions: [] // Historique des transactions (vide au départ)
};


/******************************************************
 * Fonction : deposit
 * ----------------------------------------------------
 * Permet de déposer de l'argent sur le compte
 * - Vérifie que le montant est positif
 * - Met à jour le solde
 * - Enregistre la transaction
 ******************************************************/
function deposit(amount) {
    // 1️⃣ Validation : le montant doit être positif
    if (amount <= 0) {
        console.log("Erreur : le montant du dépôt doit être supérieur à 0.");
        return; // On arrête la fonction si montant invalide
    }

    // 2️⃣ Ajouter le montant au solde du compte
    account.balance += amount;

    // 3️⃣ Créer l'objet transaction
    const transaction = {
        id: Date.now(),       // id unique basé sur le timestamp
        type: "deposit",      // type de la transaction
        amount: amount,       // montant du dépôt
        date: new Date()      // date et heure actuelle
    };

    // 4️⃣ Ajouter la transaction au tableau du compte
    account.transactions.push(transaction);

    // 5️⃣ Message de confirmation
    console.log(`Dépôt de ${amount} ${account.currency} effectué avec succès.`);
}



/******************************************************
 * Fonction : withdraw
 * ----------------------------------------------------
 * Permet de retirer de l'argent du compte
 * - Vérifie que le montant est positif
 * - Vérifie que le solde est suffisant
 * - Met à jour le solde
 * - Enregistre la transaction
 ******************************************************/
function withdraw(amount) {

    // 1️⃣ Vérifier que le montant est valide
    if (amount <= 0) {
        console.log("Erreur : le montant du retrait doit être supérieur à 0.");
        return;
    }

    // 2️⃣ Vérifier que le solde est suffisant
    if (account.balance < amount) {
        console.log("Erreur : solde insuffisant.");
        return;
    }

    // 3️⃣ Soustraire le montant du solde
    account.balance -= amount;

    // 4️⃣ Créer la transaction
    const transaction = {
        id: Date.now(),
        type: "withdraw",
        amount: amount,
        date: new Date()
    };

    // 5️⃣ Ajouter la transaction à l'historique
    account.transactions.push(transaction);

    // 6️⃣ Message de confirmation
    console.log(`Retrait de ${amount} ${account.currency} effectué avec succès.`);
}



/******************************************************
 *  Voir le solde
 * ----------------------------------------------------
 * Retourne le solde actuel du compte
 ******************************************************/
function getBalance() {
    return account.balance;
}

/******************************************************
 *  Voir l'historique des transactions
 * ----------------------------------------------------
 * Retourne le tableau complet des transactions
 ******************************************************/
function getTransactions() {
    return account.transactions;
}
