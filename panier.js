// ligne 56 et 115 getcode n'est pas reconnu


function ajouter(number)


// Cette fonction me sert à ajouter un article
            {
                var code = number;
                var qte = parseInt((document.getElementById("qte" + number).value));
                var prix = parseInt((document.getElementById("prix" + number).value));


// parseInt permet d'analyser une chaîne de caractère et d'en donner un nombre entier dans une base de donnée
// Ici j'analyse la chaîne de caractère de qte et de prix pour en sortir un nombre en js                
                var monPanier = new Panier();
// Je déclare la variable monPanier et je lui ajoute new pour créer une instance d'un certain type d'objet à partir du constructeur
// Cela permet de créer l'objet Panier lié à monPanier
                monPanier.ajouterArticle(code, qte, prix);
// monPanier(objet).ajouterArticle (propriété)
// Une propriété est une caractéristique d'un objet, elle décrit des attributs à une structure de données
                var tableau = document.getElementById("tableau");
                var longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
// getElementById est une méthode permet de renvoyer une chaîne spécifique correspondant à l'id du HTML, ici l'id tableau               
                if (longueurTab > 0)
// Si la longueur du tableau est supérieur à 0
                {
                    for(var i = longueurTab ; i > 0  ; i--)
// On fait une boucle for qui a comme valeur la variable i = longueurTab et i > 0 et on soustrait 1 à i
                    {
                        monPanier.ajouterArticle(parseInt(tableau.rows[i].cells[0].innerHTML), parseInt(tableau.rows[i].cells[1].innerHTML), parseInt(tableau.rows[i].cells[2].innerHTML));
// La boucle va analyser la chaîne de caractère du tableau pour chaque colonne 
                        tableau.deleteRow(i);
// deleteRow va supprimer une ligne spécifique de <tr>
                    }
                }

// Ici j'ai créer une fonction nommé "ajouter" pour ajouter un article au panier, je lui donne le paramètre "n"
// Les 2 variable qte et prix analyse le code html pour retrouver les bonnes valeurs
// Qte récupère la valeur de l'id correspondant et pareil pour le prix. Les valeurs sont convertis en entier gràce à parseInt
// Une nouvelle variable est créer avec pour contructeur Panier
// La méthode ajouterArticle de l'objet monPanier est appelée avec pour valeur n, qte et prix
// Cela ajoute un nouvel article au panier
// Ensuite la variable tableau récupère l'id du doc HTML, et la variable longueurTab récupère la valeur du tableau et le convertis le résultat en entier
// Si la longueur du tableau et > 0 alors on démarre une boucle for
// La boucle itère les lignes du tableau de bas en haut
// Pour chaque ligne on appel la méthode de monPanier et on lit chaque ligne du tableau
// Pour finir on supprime les lignes du tableau à l'aide de deleteRow

// Pour résumé, la fonction va lire la qte et le prix de l'article d'après le HTML
// Ensuite elle va ajouter au panier le résultat


                var longueur = monPanier.liste.length;
// La variable longueur est déclarée et assignée avec la valeur correspondant à la longueur de la liste d'articles dans l'objet monPanier.
                for(var i = 0 ; i < longueur ; i++)
                {
                    var ligne = monPanier.liste[i];
                    var ligneTableau = tableau.insertRow(-1);
                    var colonne1 = ligneTableau.insertCell(0);
                    colonne1.innerHTML += ligne.getCode();
                    var colonne2 = ligneTableau.insertCell(1);
                    colonne2.innerHTML += ligne.qteArticle;
                    var colonne3 = ligneTableau.insertCell(2);
                    colonne3.innerHTML += ligne.prixArticle;
                    var colonne4 = ligneTableau.insertCell(3);
                    colonne4.innerHTML += ligne.getPrixLigne();
                    var colonne5 = ligneTableau.insertCell(4);
                    colonne5.innerHTML += "<button class=\"btn btn-primary\" type=\"submit\" onclick=\"supprimer(this.parentNode.parentNode.cells[0].innerHTML)\"><span class=\"glyphicon glyphicon-remove\"></span> Retirer</button>";
                }
// La boucle for permet d'itérer chaque article dans la liste du panier
// Pour chaque article, une nouvelle ligne (ligneTableau) est insérée dans le tableau (tableau) en utilisant la méthode insertRow(-1), qui ajoute la ligne à la fin du tableau.
// Gràce à la méthode insertCell, les colonnes 1,2,3;4;5 sont insérer dans la ligne du tableau
// Le contenu des cellules est modifié pour afficher les informations de l'article gràce à ligne et getPrixLigne (get permet de lier une propriété d'un objet à une fonction)
// Le 5 eme colonne comprend un attribut onclick qui appelle la fonction supprimer
                document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
                var nbreLignes = document.getElementById("nbreLignes");
                var nbrLigneImt = parseInt(nbreLignes.innerHTML);
                console.log(nbreLignes)
                document.getElementById("nbreLignes").innerHTML = nbrLigneImt + 1;
        }
             
// Les éléments HTML de l'id prixTotal et nbreLignes sont mis à jour avec le prix total du panier et la valeur de longueur            





function supprimer(code)
// La fonction prend le paramètre "code"
            {
                var monPanier = new Panier(code);
// Nouvelle instance de l'objet Panier gràce au constructeur Panier(code) (code = argument) Instance assignée à la variable monPanier
                var tableau = document.getElementById("tableau");
                
// On va chercher dans la tableau HTML
                var longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
               
// Transforme la chaîne de caractère en nombre               
                if (longueurTab > 0)
// Si la longueur du tableau est surpérieur à 0 
                    for(var i = longueurTab + 1 ; i > 0  ; i--)
// La boucle for se démarre et parcours les lignes du tableau

                    {
                        if(parseInt(tableau.rows[i-1].cells[0].innerHTML) === code){
                          
                          //  monPanier.supprimerArticle(parseInt(tableau.rows[i].cells[0].innerHTML), parseInt(tableau.rows[i].cells[1].innerHTML), parseInt(tableau.rows[i].cells[2].innerHTML));
                            tableau.deleteRow(i);
                        }
// Pour supprimer seulement l'article que l'on souhaite supprimer
                        
                        
                    }
// A chaque itération, la méthode ajouterArticle de l'objet monPanier est appelée avec les valeurs récupérées à partir du tableau
// Les valeurs sont converties en entier gràce à parseInt
// deleteRow supprime la ligne du tableau
                
                
//  monPanier.supprimerArticle();
// La méthode supprimerArticle de l'objet monPanier est appelée pour supprimer l'article du panier en utilisant le code fourni                

                
                var longueur = monPanier.liste.length;
                
// La variable longueur est initialisée avec la longueur de la propriété liste de l'objet monPanier. Cela correspond au nombre d'articles dans le panier
                for(var i = 0 ; i < longueur ; i++) 
// i = indice qui commence toujours à 0; si i < variable longueur alors i++ 
                {
                    tableau.deleteRow(-1);
                    var ligne = monPanier.liste[i];
                    //var ligneTableau = tableau.deleteRow(-1);
                    //var colonne1 = ligneTableau.deleteCell(0);
                    //colonne1.innerHTML += ligne.getCode();
                    //var colonne2 = ligneTableau.insertCell(1);
                    //colonne2.innerHTML += ligne.qteArticle;
                    //var colonne3 = ligneTableau.insertCell(2);
                    //colonne3.innerHTML += ligne.prixArticle;
                    //var colonne4 = ligneTableau.insertCell(3);
                    //colonne4.innerHTML += ligne.getPrixLigne();
                    //var colonne5 = ligneTableau.insertCell(4);
                    //colonne5.innerHTML += "<button class=\"btn btn-primary\" type=\"submit\" onclick=\"supprimer(this.parentNode.parentNode.cells[0].innerHTML)\"><span class=\"glyphicon glyphicon-remove\"></span> Retirer</button>";
                }
                monPanier.supprimerArticle(code)
// Une boucle for pour itérer seur chaque article dans la liste du panier
// A chaque itération:
// - monPanier.liste est assigné à la variable ligne
// - une nouvelle ligne est créer dans le tableau gràce à insertRow()
// - de nouvelles cellules sont insérer gràce à insertCell()
// - le contenu des cellules est modifié en ajoutant les valeurs correspondante de l'objet ligne
// - une nouvelle cellule est insérée pour le bouton de suppression avec un événement onclick qui appelle la fonction supprimer en passant la valeur de la première cellule de la ligne comme argument.
// A la fin de la boucle, les éléments HTML de l'id prisTotal sont mis à jour          
                document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
                document.getElementById("nbreLignes").innerHTML = longueur;
            }

// monPanier.getPrixPanier() appelle la méthode getPrixPanier() de l'objet monPanier, cela calcul et renvoie le prix total
// La ligne 129 permet de mettre à jour l'élément HTML avec l'id nbreLignes en utilisant la valeur de la variable longueur, cela représente le nombre d'article dans le panier


function LignePanier (code, qte, prix)
// C'est un constructeur de l'objet LignePanier qui prend 3 arguments pour créer une instance de LignePanier
// Les instances de LignePanier représentent les articles individuels du panier

{
    this.codeArticle = code;
    this.qteArticle = qte;
    this.prixArticle = prix;
// Propriété de l'objet LignePanier
    this.ajouterQte = function(qte)
// Méthode qui ajoute la quantité nouvelle à la quantité initiale
    {
        this.qteArticle += qte;
    }
    this.getPrixLigne = function()
// Méthode qui calcule et renvoie le prix total de la ligne(qte*prixU)
    {
        var resultat = this.prixArticle * this.qteArticle;
        return resultat;
    }
    this.getCode = function() 
// Méthode qui renvoie le code de l'article
    {
        return this.codeArticle;
    }
}



function Panier()
// Constructeur de l'objet Panier. Les instances représentent le panier lui même
// Panier contient une liste d'article et a des méthodes pour ajouter, supprimer et calculer le total
{
    this.liste = [];
// Propriété de l'objet Panier initialisé avec un tableau vide
    this.ajouterArticle = function(code, qte, prix)
// Méthode qui ajoute un article au panier, si produit déjà existant il ajoute au total
    { 
        var index = this.getArticle(code);
// Vérifier si si l'article avec le même code existe déjà. Si il est trouvé elle renvoi à l'index de l'article, sinon _1
        if (index == -1) this.liste.push(new LignePanier(code, qte, prix));
// Si l'article n'est pas trouvé dans le panier, alors c'est un nouvel article à ajouter
        else this.liste[index].ajouterQte(qte);
    }
// Sinon il faut mettre la quantité à jour
// this.liste[index].ajouterQte(qte) est la méthode ajouterQte(qte) de l'objet LignePanier 
    this.getPrixPanier = function()
// Méthode utilisée pour calculer et renvoyer le prix total

    {
        var total = 0;
        for(var i = 0 ; i < this.liste.length ; i++)
// Itérer la liste d'artcile du panier
            total += this.liste[i].getPrixLigne();
// Pour chaque article, la méthode getPrixLigne() de l'objet LignePanier correspondant est appelée pour obtenir le prix total de l'article, qui est ensuite ajouté à la variable total
        return total;
// Valeur totale du panier et retournée
    }
    this.getArticle = function(code)
// Recherche d'un article dans le panier selon son code
    {
        for(var i = 0 ; i <this.liste.length ; i++)
            if (code == this.liste[i].getCode()) return i;
// A chaque itération on vérifie si le code de l'article correspond au code spécifié
// Si oui, l'index de l'article dans la liste est renvoyé
        return -1;
// Si non la valeur et de -1
    }
    this.supprimerArticle = function(code)
// Supprimer un article du panier en fonction de son code
    {
       // var index = this.getArticle(code);
//     La méthode getArticle est appelée pour avoir l'index de l'article avec le code spécifié dans le panier.


}

// Si index > -1 alors l'article est dans le panier et doit être supprimé
// La mtéthode splice est la pour supprimer l'article du panier
    }


// 224 225 ca c'est ma fonction suprimer article dans liste créer, faire : je récupere un code correct, ce code première cellule de la ligne.
// A partir de la --> a partir de ce code je veux recuperer l'article dans le tableau. Son index pour opéraztion reste à faire --> sup element de la liste