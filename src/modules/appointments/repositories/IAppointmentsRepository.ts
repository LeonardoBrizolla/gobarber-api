import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppoitmentsRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
