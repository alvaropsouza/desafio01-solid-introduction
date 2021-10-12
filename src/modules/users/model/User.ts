import { v4 as uuidv4 } from "uuid";

class User {
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }

    if (!this.admin) {
      this.admin = false;
    }
  }

  id?: string;
  name: string;
  admin?: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export { User };
