export class SidebarNavModel {
  public static MOCK_DATA: {
    'Accounts': [
      {
        'operationId': 'Accounts.create_account',
        'summary': 'Create a new account'
      }
    ]
  };

  [name: string]: SidebarNavEntity[]
}

export class SidebarNavEntity {
  operationId: string;
  summary: string;
}
