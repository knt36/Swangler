export class ContactModel {
  public static MOCK_DATA = {
    contact: {
      email: 'khoi.tran@slyce.it'
    },
    version: '1.0',
    title: 'Sylce API'
  };
  contact: ContactInfo;
  version: string;
  title: string;
}

export class ContactInfo {
  public email: string;
  [key: string]: string;
}
