import { DynamicModule, Module } from '@nestjs/common';
import { OrmAlarmPersistenceModule } from './persistence/orm/orm-persistence.module';
import { InMemoryAlarmPersistenceModule } from './persistence/in-memory/in-memory-persistence.module';

@Module({})
export class AlarmsInfrastructureModule {
  static use(driver: 'orm' | 'in-memory'): DynamicModule {
    const presistenceModule =
      driver === 'orm'
        ? OrmAlarmPersistenceModule
        : InMemoryAlarmPersistenceModule;

    console.log('presistenceModule ', presistenceModule);
    return {
      module: AlarmsInfrastructureModule,
      imports: [presistenceModule],
      exports: [presistenceModule],
    };
  }
}
