// Define quais sao as propriedades que o nosso serviço de email vai ter que oforeçer para a nosso aplicaçao
export default interface IMailProvider {
  sendEmail(to: string, body: string): Promise<void>;
}
