import { EventEmitter } from "node:events";

type Events = {
  open: [];
  data: [Buffer];
  close: [];
};

export abstract class Socket extends EventEmitter<Events> {
  constructor() {
    super();
  }
  abstract write(data: Buffer): void;
}
