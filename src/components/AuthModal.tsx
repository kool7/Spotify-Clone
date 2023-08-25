import useAuthModal from "@/hooks/useAuthModal";
import { Login } from "@/types/login";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import Modal from "./Modal";

interface AuthModalProps {
  login: Login;
}

const AuthModal: React.FC<AuthModalProps> = ({ login }) => {
  const { data, status } = useSession();
  const { onClose, isOpen } = useAuthModal();
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const { email, password } = userInfo;

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      console.log("authenticated");
    }
  }, [status]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // const res = await fetch("/api/auth/users", {
    //   method: "POST",
    //   body: JSON.stringify(userInfo),
    // }).then((res) => res.json());

    // console.log(res);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    // if (res?.error) {
    //   return setError(res.error);
    // }

    // console.log(res, error);

    onClose();
  };

  return (
    <Modal
      title={login.title}
      description={login.description}
      isOpen={isOpen}
      onChange={onChange}
    >
      <div className="flex items-center justify-center">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="emailOrUsername"
                className="block font-medium mb-2"
              >
                {login.username}
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                id="emailOrUsername"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email or username"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block font-medium mb-2">
                {login.password}
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                id="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition duration-200"
            >
              {login.loginButton}
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm">
              {login.signUpMessage}
              <Link className="text-green-500" href="/signup">
                &nbsp;{login.signUpLink}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
