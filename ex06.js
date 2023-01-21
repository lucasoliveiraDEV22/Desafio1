/*6.[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:
 - média do salário da população; 
 - média do número de filhos;
  - maior salário; 
  - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função! */

const people =  [
    {
        salary: 3000,
        numberChildren: 5
    },
    {
        salary: 2500,
        numberChildren: 3
    },
    {
        salary: 2000,
        numberChildren: 2
    },
    {
        salary: 1300,
        numberChildren: 1
    },
    {
        salary: 1000,
        numberChildren: 1
    },
    {
        salary: -200,
        numberChildren:0
    }
]


 const population = (personInformation) => {
    let wageAverage = 0
    let averageChildren = 0
    let heighestSalary = 0
     for (let i=0; i < personInformation.length; i++){
        wageAverage = wageAverage + personInformation [i].salary
        averageChildren = averageChildren + personInformation [i].numberChildren
        // heighestSalary = 
        //     heighestSalary < personInformation[i].salary ? personInformation[i].salary :heighestSalary
        if (heighestSalary < personInformation[i].salary) {
           heighestSalary =  personInformation [i].salary
        } else {
            heighestSalary = heighestSalary
        }
    }
     const wageMean = wageAverage/personInformation.length;
     const meanChildren = averageChildren/personInformation.length;
     console.log ({wageMean}, 'reais')
     console.log ({meanChildren}, 'filhos')
     console.log ({heighestSalary}, 'reais')

    return
 }
 population(people)