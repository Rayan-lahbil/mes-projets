import random

mots = ["python", "informatique", "ordinateur", "algorithme", "clavier"]
mot_secret = random.choice(mots)
lettres_trouvees = []
lettres_ratees = []
essais_restants = 6

print("Bienvenue dans le jeu du pendu !")
print("Le mot a", len(mot_secret), "lettres")

while essais_restants > 0:
    
    affichage = ""
    for lettre in mot_secret:
        if lettre in lettres_trouvees:
            affichage += lettre + " "
        else:
            affichage += "_ "
    
    print("\n" + affichage)
    
    if "_" not in affichage:
        print("Bravo ! Tu as trouvé le mot :", mot_secret)
        break
    
    if lettres_ratees:
        print("Lettres ratées :", " ".join(lettres_ratees))
    
    proposition = input("Propose une lettre : ")
    proposition = proposition.lower()
    
    if proposition in lettres_trouvees or proposition in lettres_ratees:
        print("Tu as déjà proposé cette lettre !")
    elif proposition in mot_secret:
        lettres_trouvees.append(proposition)
        print("Bien joué ! La lettre", proposition, "est dans le mot !")
    else:
        lettres_ratees.append(proposition)
        essais_restants -= 1
        print("Raté ! Il te reste", essais_restants, "essais")

if essais_restants == 0:
    print("Perdu ! Le mot était :", mot_secret)