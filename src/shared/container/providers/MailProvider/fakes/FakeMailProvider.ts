import IMailProvider from '../models/IMailProvider';

interface IMessage {
  to: string;
  body: string;
}

export default class FakeMailProvider implements IMailProvider {
  private message: IMessage[] = [];

  public async sendEmail(to: string, body: string): Promise<void> {
    this.message.push({
      to,
      body,
    });
  }
}
