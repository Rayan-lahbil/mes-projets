questions = [
    {
        "question": "Qu'est-ce qu'un algorithme ?",
        "choix": ["A. Un langage de programmation", "B. Une suite d'instructions pour résoudre un problème", "C. Un type de processeur", "D. Un logiciel antivirus"],
        "reponse": "B"
    },
    {
        "question": "Que fait la fonction print() en Python ?",
        "choix": ["A. Elle imprime un document", "B. Elle supprime du texte", "C. Elle affiche du texte dans le terminal", "D. Elle crée une variable"],
        "reponse": "C"
    },
    {
        "question": "À quoi sert une base de données SQL ?",
        "choix": ["A. Créer des images", "B. Stocker et organiser des informations", "C. Naviguer sur internet", "D. Programmer des jeux"],
        "reponse": "B"
    },
    {
        "question": "Quel langage est principalement utilisé pour créer des pages web ?",
        "choix": ["A. Python", "B. HTML", "C. Java", "D. C++"],
        "reponse": "B"
    },
    {
        "question": "Parmi ces propositions, laquelle est un langage de programmation ?",
        "choix": ["A. Google", "B. Windows", "C. Javascript", "D. Excel"],
        "reponse": "C"
    }
]

def poser_question(q, numero):
    print("\nQuestion", numero, ":", q["question"])
    for choix in q["choix"]:
        print(choix)
    reponse = input("Ta réponse (A, B, C ou D) : ")
    reponse = reponse.upper()
    if reponse == q["reponse"]:
        print("Bonne réponse !")
        return 1
    else:
        print("Mauvaise réponse ! La bonne réponse était :", q["reponse"])
        return 0

print("=== QUIZ INFORMATIQUE ===")
print("5 questions, bonne chance !\n")

score = 0
numero = 1

for q in questions:
    score += poser_question(q, numero)
    numero += 1

print("\n=== RÉSULTAT ===")
print("Tu as obtenu", score, "sur", len(questions), "!")

if score == 5:
    print("Parfait, tu es un génie !")
elif score >= 3:
    print("Bien joué, continue comme ça !")
else:
    print("Continue à travailler, tu vas progresser !")