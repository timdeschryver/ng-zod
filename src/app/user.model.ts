import { z } from "zod";

const AddressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: z.object({
    lat: z.string(),
    lng: z.string()
  })
}).strict();

const CompanySchema = z.object({
  name: z.string(),
  catchPhrase: z.string(),
  bs: z.string(),
}).strict();

export const UserSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  address: AddressSchema,
  phone : z.string(),
  website: z.string(),
  company: CompanySchema,
}).strict();

export const UsersSchema = z.array(UserSchema);

export type User = z.infer<typeof UserSchema>;
export type Users = z.infer<typeof UsersSchema>;
