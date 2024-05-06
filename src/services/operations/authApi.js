import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiconnector";
import { endPoints } from "../apis";
import { resetCart } from "../../slices/cartSlice";

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSWORD_API,
  RESETPASSTOKEN_API,
} = endPoints;

export function sendOTP(email, navigate) {
  return async (dispatch) => {
    // const toastID = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      console.log("Inside try");
      //console.log(SENDOTP_API);
      const result = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      });

      //console.log("Printing result: ", result);
      //console.log(result.data.success);
      if (!result.data.success) {
        throw new Error(result.data.message);
      }
      toast.success("OTP Sent Successfully");
      navigate("/verify-email");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error.message);
      toast.error("Could Not Send OTP");
    }
    dispatch(setLoading(false));
    // toast.dismiss(toastID);
  };
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    // const toastID = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      console.log("Try passed");
      const result = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      });
      // console.log("SignUp Api response->", result);
      if (!result.data.success) {
        throw new Error(result.data.message);
      }
      toast.success("SignUp successful");
      navigate("/login");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error.message);
      toast.error("SignUp failed");
      navigate("/signUp");
    }
    dispatch(setLoading(false));
    // toast.dismiss(toastID);
  };
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const result = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });
      //console.log("Login api response->", result);
      if (!result.data.success) {
        throw new Error(result.data.message);
      }
      toast.success("Login successful");
      dispatch(setToken(result.data.token));
      const userImage = result.data?.user?.image
        ? result.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${result.data.user.firstName} ${result.data.user.lastName}`;

      dispatch(setUser({ ...result.data.user, image: userImage }));
      localStorage.setItem("token", JSON.stringify(result.data.token));
      localStorage.setItem("user", JSON.stringify(result.data.user));
      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("LOGIN API ERROR ->", error.message);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
  };
}
export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    dispatch(resetCart());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/home");
  };
}

export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const result = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      });
      //console.log("ResetTOken API response->", result);
      if (!result.data.success) {
        throw new Error(result.data.message);
      }
      toast.success("Reset Email Sent");
      setEmailSent(true);
    } catch (error) {
      console.log("RESET PASSWORD TOKEN Error", error.message);
      toast.error("Failed to send email for resetting password");
    }
    dispatch(setLoading(false));
  };
}

export function resetPassword(password, confirmPassword, token) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const result = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });
      // console.log("Rest Password response->", result);
      if (!result.data.success) {
        throw new Error(result.data.message);
      }
      toast.success("Password reset successful");
      // navigate("/login");
    } catch (error) {
      console.log("RESET PASSWORD TOKEN Error", error);
      toast.error("Unable to reset password");
    }
    dispatch(setLoading(false));
  };
}
