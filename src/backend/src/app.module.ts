// // import { MiddlewareConsumer, Module } from "@nestjs/common";
// // import { TypeOrmModule } from "@nestjs/typeorm";
// // import { AppController } from "./app.controller";
// // import { TimeBookingEntity } from "./core/entities/time-booking.entity";
// // import { AuthMiddleware } from "./core/middleware/auth.middleware";
// // import { TimeBookingService } from "./core/services/time-booking.service";

// // config();

// const entities = [TimeBookingEntity];

// @Module({
//     imports: [
//         TypeOrmModule.forRoot({
//             type: "mongodb",
//             url: process.env.MONGO_DB_CONNECTION_STRING,
//             username: process.env.MONGO_DB_USERNAME,
//             password: process.env.MONGO_DB_PASSWORD,
//             database: process.env.MONGO_DB_DATABASE,
//             entities,
//             synchronize: true,
//         }),
//         TypeOrmModule.forFeature(entities),
//     ],
//     controllers: [AppController],
//     providers: [TimeBookingService],
// })
// export class AppModule {
//     configure(consumer: MiddlewareConsumer) {
//         consumer.apply(AuthMiddleware).exclude("/", "/status", "/app").forRoutes("**");
//     }
// }
