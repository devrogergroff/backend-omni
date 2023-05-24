import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { QueueChatMessageController } from "../queueChatMessage.controller";
import { QueueChatMessageService } from "../queueChatMessage.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  agente: "exampleAgente",
  dataHora: new Date(),
  id: "exampleId",
  inOut: 42,
  mailMessageId: 42,
  repliedIdMsg: 42,
  texto: "exampleTexto",
};
const CREATE_RESULT = {
  agente: "exampleAgente",
  dataHora: new Date(),
  id: "exampleId",
  inOut: 42,
  mailMessageId: 42,
  repliedIdMsg: 42,
  texto: "exampleTexto",
};
const FIND_MANY_RESULT = [
  {
    agente: "exampleAgente",
    dataHora: new Date(),
    id: "exampleId",
    inOut: 42,
    mailMessageId: 42,
    repliedIdMsg: 42,
    texto: "exampleTexto",
  },
];
const FIND_ONE_RESULT = {
  agente: "exampleAgente",
  dataHora: new Date(),
  id: "exampleId",
  inOut: 42,
  mailMessageId: 42,
  repliedIdMsg: 42,
  texto: "exampleTexto",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("QueueChatMessage", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: QueueChatMessageService,
          useValue: service,
        },
      ],
      controllers: [QueueChatMessageController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /queueChatMessages", async () => {
    await request(app.getHttpServer())
      .post("/queueChatMessages")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dataHora: CREATE_RESULT.dataHora.toISOString(),
      });
  });

  test("GET /queueChatMessages", async () => {
    await request(app.getHttpServer())
      .get("/queueChatMessages")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          dataHora: FIND_MANY_RESULT[0].dataHora.toISOString(),
        },
      ]);
  });

  test("GET /queueChatMessages/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/queueChatMessages"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /queueChatMessages/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/queueChatMessages"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        dataHora: FIND_ONE_RESULT.dataHora.toISOString(),
      });
  });

  test("POST /queueChatMessages existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/queueChatMessages")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dataHora: CREATE_RESULT.dataHora.toISOString(),
      })
      .then(function () {
        agent
          .post("/queueChatMessages")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
