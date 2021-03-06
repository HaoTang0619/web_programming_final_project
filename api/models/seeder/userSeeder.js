import Debug from "debug";
import bcrypt from "bcrypt";
import { User } from "../user";

const debug = Debug("seeder:user");
const saltRounds = 12;

export default async function seedUser() {
  try {
    const doc = await User.create([
      {
        name: "Howard",
        icon: 0,
        username: "howard41436",
        passwordHash: await bcrypt.hash("admin", saltRounds),
        matched: false,
        inviteCode: 41436,
      },
      {
        name: "Peipei",
        icon: 0,
        username: "wujun_pei",
        passwordHash: await bcrypt.hash("jim", saltRounds),
        matched: true,
        pairId: 0,
        inviteCode: 89890,
      },
      {
        name: "Fiona",
        icon: 2,
        username: "fionahsu_1004",
        passwordHash: await bcrypt.hash("fiona", saltRounds),
        matched: true,
        pairId: 0,
        inviteCode: 12345,
      },
    ]);
    debug("Created document:\n%O", doc);
  } catch (err) {
    debug("Error creating seed document:\n%O", err);
  }
}
