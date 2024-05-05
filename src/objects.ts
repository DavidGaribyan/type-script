type Abb = {
  name: string;
  headOffice: string;
  cityPlaces: string;
  departments: Departments;
};
type Departments = [
  {
    name: string;
    employees: Employee;
    functions: Functions;
  },
  {
    employees: string[];
    name: string;
    function: string;
  }
];
type Employee = [
  {
    name: string;
    surname?: string;
    age: number;
    workingYears?: string;
    position?: string;
    tasks?: Task;
  },
  {
    name: string;
    surname?: string;
    age: number;
    workingYears?: string;
    position?: string;
  }
];
type Functions = [
  {
    name: string;
    types?: Types;
    description?: string;
    functions: [
      {
        name: string;
        types: Types;
      },
      {
        name: string;
        description: string;
      }
    ];
  },
  {
    name: string;
    description: string;
  }
];
type Types = [
  {
    name: string;
    mortgageDescription: MortrageDescriptions;
  },
  {
    name: string;
    branches: Branch;
  }
];
type MortrageDescriptions = [
  {
    name: string;
    function: string;
  },
  {
    name: string;
    function: string;
  },
  {
    name: string;
    function: string;
  }
];
type Branch = [
  {
    name: string;
    lounch: number;
    city: string;
    employees: Employee;
  },
  {
    name: string;
    lounch: number;
    city: string;
    employees?: Employee;
  },
  {
    name: string;
    lounch: number;
    city: string;
    employees?: Employee;
  }
];
type Task = [
  {
    name: string;
    description: string;
    conditions: Condition;
  },
  {
    name: string;
    description: string;
    conditions?: Condition;
  },
  {
    name: string;
    description: string;
    conditions?: Condition;
  }
];
type Condition = [
  {
    loanTypes: string;
    businessSizes: [
      {
        size: string;
        steps?: Step;
      },
      {
        size: string;
        steps?: Step;
      },
      {
        size: string;
        steps?: Step;
      }
    ];
  },
  { loanType: string }
];
type BusinessSizes = [
  {
    size: string;
  }
];
type Step = [
  {
    step1: string;
    dificulty: string;
    guarantors: boolean;
    documents?: Documents;
  },
  {
    step2: string;
    dificulty?: string;
    guarantors?: boolean;
    documents?: Documents;
  }
];
type Documents = [
  {
    name: string;
    condition: string;
    letters?: string[];
  },
  {
    name: string;
    condition: string;
    letters?: string[];
  }
];
type Letter = [
  {
    name: string;
  }
];
let ArmbusinessBank: Abb = {
  name: 'abb',
  headOffice: 'Nalbandyan',
  cityPlaces: 'Erevan',
  departments: [
    {
      name: 'credit department',
      employees: [
        {
          name: 'Karen',
          age: 35,
        },
        {
          name: 'Gevor',
          age: 32,
        },
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
                  mortgageDescription: [
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
                  name: 'Ani branch',
                  branches: [
                    {
                      name: 'Ani branch',
                      lounch: 2009,
                      city: 'Gyumri',
                      employees: [
                        {
                          name: 'Davit',
                          surname: 'Gharibyan',
                          age: 30,
                          workingYears: '2015-2023',
                          position: 'head manager',
                          tasks: [
                            {
                              name: 'business loans',
                              description: 'give business loans',
                              conditions: [
                                {
                                  loanTypes: 'business use',
                                  businessSizes: [
                                    {
                                      size: 'small',
                                    },
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
                          workingYears: '2019-2023',
                          age: 30,
                        },
                      ],
                    },
                    {
                      name: 'Artik branch',
                      lounch: 2013,
                      city: 'Artik',
                    },
                    {
                      name: 'Ashtarak branch',
                      lounch: 2009,
                      city: 'Ashtarak',
                    },
                  ],
                },
              ],
            },
            {
              name: 'risk class',
              description: 'access risk',
            },
          ],
        },
        {
          name: 'borrowing',
          description: 'Customer saving',
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

ArmbusinessBank.departments[0].functions[0].types?.[1].branches[0].employees[0]
  .tasks?.[0].conditions[0].businessSizes[2].steps?.[0].documents?.[0]
  .condition;
