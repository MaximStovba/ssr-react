import {
  DataType,
  Model,
  // Table,
  // Column
} from 'sequelize-typescript';
import { ModelAttributes } from 'sequelize/types';
// import { sequelize } from '../init';

export interface IUser {
  firstName: string;
  lastName: string;
}

export const userModel: ModelAttributes<Model, IUser> = {
  firstName: {
    type: DataType.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataType.STRING,
  },
};
