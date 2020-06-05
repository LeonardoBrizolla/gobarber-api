interface IMailConfig {
  driver: 'ethereal' | 'uses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'leobrizolla@leobrizolla.com.br',
      name: 'Leonardo Brizolla',
    },
  },
} as IMailConfig;
