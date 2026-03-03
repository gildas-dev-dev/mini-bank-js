/******************************************************
 * MINI BANK - VERSION AMÉLIORÉE
 * ----------------------------------------------------
 * - Support multi-comptes
 * - Fonctions découplées
 * - Validation robuste
 * - Simulation complète
 ******************************************************/



/******************************************************
 * 1️⃣ Création de l'utilisateur
 ******************************************************/
const user = {
    id: 1,
    firstName: "Gildas",
    lastName: "Mebada",
    email: "gildas.mebada@email.com",
    isActive: true
};



/******************************************************
 * 2️⃣ Création des comptes (multi-comptes)
 ******************************************************/
const accounts = [
    {
        accountNumber: "ACC-001",
        balance: 0,
        currency: "XAF",
        owner: user,
        transactions: []
    },
    {
        accountNumber: "ACC-002",
        balance: 100000,
        currency: "XAF",
        owner: user,
        transactions: []
    }
];



/******************************************************
 * 3️⃣ Fonction utilitaire : trouver un compte
 ******************************************************/
function findAccount(accountNumber) {
    return accounts.find(account => account.accountNumber === accountNumber);
}



/******************************************************
 * 4️⃣ Validation du montant
 ******************************************************/
function isValidAmount(amount) {
    return typeof amount === "number" && !isNaN(amount) && amount > 0;
}



/******************************************************
 * 5️⃣ Dépôt
 ******************************************************/
function deposit(accountNumber, amount) {

    const account = findAccount(accountNumber);

    if (!account) {
        console.log("Erreur : compte introuvable.");
        return;
    }

    if (!isValidAmount(amount)) {
        console.log("Erreur : montant invalide.");
        return;
    }

    account.balance += amount;

    const transaction = {
        id: Date.now(),
        type: "deposit",
        amount,
        date: new Date()
    };

    account.transactions.push(transaction);

    console.log(`✅ Dépôt de ${amount} ${account.currency} effectué sur ${accountNumber}`);
}



/******************************************************
 * 6️⃣ Retrait
 ******************************************************/
function withdraw(accountNumber, amount) {

    const account = findAccount(accountNumber);

    if (!account) {
        console.log("Erreur : compte introuvable.");
        return;
    }

    if (!isValidAmount(amount)) {
        console.log("Erreur : montant invalide.");
        return;
    }

    if (account.balance < amount) {
        console.log("Erreur : solde insuffisant.");
        return;
    }

    account.balance -= amount;

    const transaction = {
        id: Date.now(),
        type: "withdraw",
        amount,
        date: new Date()
    };

    account.transactions.push(transaction);

    console.log(`✅ Retrait de ${amount} ${account.currency} effectué sur ${accountNumber}`);
}



/******************************************************
 * 7️⃣ Voir le solde
 ******************************************************/
function getBalance(accountNumber) {
    const account = findAccount(accountNumber);

    if (!account) {
        console.log("Erreur : compte introuvable.");
        return;
    }

    return account.balance;
}



/******************************************************
 * 8️⃣ Voir les transactions
 ******************************************************/
function getTransactions(accountNumber) {
    const account = findAccount(accountNumber);

    if (!account) {
        console.log("Erreur : compte introuvable.");
        return;
    }

    return account.transactions;
}



/******************************************************
 * 9️⃣ SIMULATION
 ******************************************************/

deposit("ACC-001", 50000);
withdraw("ACC-001", 10000);
deposit("ACC-002", 25000);

console.log("Solde ACC-001 :", getBalance("ACC-001"));
console.log("Transactions ACC-001 :", getTransactions("ACC-001"));

console.log("Solde ACC-002 :", getBalance("ACC-002"));
console.log("Transactions ACC-002 :", getTransactions("ACC-002"));
