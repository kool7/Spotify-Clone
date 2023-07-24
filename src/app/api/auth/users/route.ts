import UserModel from "@/models/userModel";
import startDb from "@/utils/mongodb";
import { NextResponse } from "next/server";

interface NewUserRequest {
  email: string;
  password: string;
}

interface NewUserResponse {
  id: string;
  email: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest;

  await startDb();

  const existingUser = await UserModel.findOne({ email: body.email });
  if (existingUser) {
    return NextResponse.json(
      { error: "email is already in use" },
      { status: 422 }
    );
  }

  const user = await UserModel.create({ ...body });

  return NextResponse.json({
    user: {
      id: user._id.toString(),
      email: user.email,
    },
  });
};
