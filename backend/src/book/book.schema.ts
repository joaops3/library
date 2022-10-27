import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose"
import mongoose, { Document, Types } from "mongoose"

export type BookDocument = Book & Document

@Schema()
export class Book {

  @Prop({required: true})
  _id: string

  @Prop()
  author: string

  @Prop()
  country: string

  @Prop()
  imageLink: string

  @Prop()
  title: string

}

export const BookSchema = SchemaFactory.createForClass(Book)
