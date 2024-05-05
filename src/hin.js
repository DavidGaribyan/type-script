let abb = {
  name: 'abb',
  headOffice: 'Nalbandyan',
  cityPlaces: 'Erevan',
  departments: [
    {
      name: 'credit department',
      employees: [
        { name: 'Karen', age: 35 },
        { name: 'Gevor', age: 32 },
      ],
      functions: [
        {
          name: 'landing',
          functions: [
            {
              name: 'Understanding Loan Types',
              types: [
                {
                  name: 'mortgages',
                  'mortgage descriptions': [
                    {
                      name: 'Interest Rate',
                      function: 'percentage of the mortgage',
                    },
                    {
                      name: 'Loan Term',
                      function: 'Principal and Interest Payments',
                    },
                    {
                      name: 'Amortization Period',
                      function: 'Principal and Interest Payments',
                    },
                  ],
                },
                {
                  name: 'business loans',
                  branches: [
                    {
                      name: 'Ani branch',
                      'lounch year': 2009,
                      city: 'Gyumri',
                      employees: [
                        {
                          name: 'Davit',
                          surname: 'Gharibyan',
                          age: 30,
                          'working years': '2015-2023',
                          position: 'head manager',
                          tasks: [
                            {
                              name: 'business loans',
                              description: 'give business loans',
                              conditions: [
                                {
                                  loanType: 'business use',
                                  businessSizes: [
                                    { size: 'small' },
                                    { size: 'medium' },
                                    {
                                      size: 'big',
                                      steps: [
                                        {
                                          step1: 'business analis',
                                          dificulty: 'hard',
                                          guarantors: true,
                                          documents: [
                                            {
                                              name: 'Bank Statement',
                                              condition: 'required',
                                            },
                                            {
                                              name: 'ID card',
                                              condition: 'required',
                                            },
                                            {
                                              name: 'employment letter',
                                              condition: 'required',
                                              letters: [
                                                { name: 'Salary Certificate' },
                                                {
                                                  name: 'Co-Applicant Details',
                                                },
                                                {
                                                  name: 'Gurantor Documents',
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        { step2: 'give money to customer' },
                                      ],
                                    },
                                  ],
                                },
                                { loanType: 'personal use' },
                              ],
                            },
                            {
                              name: 'gold loans',
                              description: 'collects documents',
                            },
                            {
                              name: 'analis loans',
                              description: 'make an analis',
                            },
                          ],
                        },
                        {
                          name: 'Petros',
                          surname: 'Petrosyan',
                          position: 'manager',
                          'working years': '2019-2023',
                          age: 30,
                        },
                      ],
                    },
                    { name: 'Artik branch', 'lounch year': 2013 },
                    { name: 'Ashtarak branch', 'lounch year': 2005 },
                  ],
                },
              ],
            },
            {
              name: 'risk class',
              description: 'assess risk',
            },
          ],
        },
        {
          name: 'borrowing',
          function: 'Customer saving',
        },
      ],
    },
    {
      employees: ['Narek', 'Hayk'],
      name: 'security departament',
      function: 'securing',
    },
  ],
};

function deepClone(object) {
  let cloneobject;
  if (typeof object === 'object' && object !== null) {
    cloneobject = {};
    for (let key in object) {
      if (
        (cloneobject[key] =
          typeof object[key] === 'object' && object[key] !== null)
      ) {
        cloneobject[key] = deepClone(object[key]);
      } else {
        cloneobject[key] = object[key];
      }
    }
  } else {
    cloneobject = object;
  }
  return cloneobject;
}
//կանչենք ֆունկցիան և  cloneAbb փոփոխականին տանք այդ ֆունկցիաից ստացված արժեքը
let cloneAbb = deepClone(abb);

//ստուգենք արդյող մի պայման փոփոխելուց հիմնական մասիվի մեջ մյուս մասիվում այն չի փոփոխվի

// abb.headOffice[0].departments[0].functions[0]['Lending and Borrowing'][0]['Understanding of Loan Types'][0].mortgages[0]['Interest Rate'] = 'Փոփոխության ենթարկված տեքստ հիմնական օբյեկտում որը կլոնավորված օբյեկտի մեջ չի փոփոխվել';
console.log(cloneAbb);
console.log(abb);
