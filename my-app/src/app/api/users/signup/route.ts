import { connect } from "@/mogo-config/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function Post(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exist" },
        { status: 500 }
      );
    }
    const bcrypt = require("bcryptjs");
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json(
      { message: "User created succesfully", savedUser },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
