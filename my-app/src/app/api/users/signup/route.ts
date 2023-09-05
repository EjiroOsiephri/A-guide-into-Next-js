import { connect } from "@/mogo-config/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function Post(request: NextRequest) {
  try {
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
