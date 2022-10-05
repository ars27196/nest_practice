import { DataSourceOptions } from "typeorm";
import { Tag } from "./tags/entities/tag.entity";

const configType: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'medium_clone',
    entities: [__dirname+'/**/*.entity{.js,.ts}'],
    synchronize: true,
  };

  export default configType;