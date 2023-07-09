import mongoose, { Mongoose } from "mongoose";
import { Course } from "./types"

export function searchCourses(db: Mongoose, search: string, term: string, year: string, type: string) {
    const results: Course[] = []

}