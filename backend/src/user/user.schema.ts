import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import mongoose, {Document} from "mongoose"
import {Book} from "../book/book.schema"

export type UserDocument = User & Document

@Schema()
export class User{

  @Prop({required: true})
  _id: string

  @Prop()
  email: string

  @Prop({select: false})
  password: string

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Book"}]})
  book: Book[]

  @Prop({default: ["USER"]})
  role: Role[]
}


enum Role {
  "USER",
  "SELLER",
  "ADMIN"
}

export const UserSchema = SchemaFactory.createForClass(User)