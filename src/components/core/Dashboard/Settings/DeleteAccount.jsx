import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdDangerous } from "react-icons/md";
import { deleteProfile } from "../../../../services/operations/settingsApi";

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  }

  return (
    <>
      <div className="my-10 flex flex-col md:flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-8 px-12">
        {/* <div className="hidden md:flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
          <FiTrash2 className="text-3xl text-pink-200" />
        </div> */}
        <div className="flex flex-col space-y-2">
          <div className="text-lg flex font-semibold text-richblack-5">
            <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
              <FiTrash2 className="text-3xl text-pink-200" />
            </div>
            <p className="text-center items-center mt-4 ml-4">Delete Account</p>
          </div>
          <div className="w-full md:w-3/5 text-pink-25">
            <p>Would you like to delete account?</p>
            <p>
              This account may contain Paid Courses. Deleting your account is
              permanent and will remove all the contents associated with it.
            </p>
          </div>
          <button
            type="button"
            className="w-fit cursor-pointer italic text-pink-300"
            onClick={handleDeleteAccount}
          >
            I want to delete my account.
          </button>
        </div>
        <MdDangerous className="text-4xl text-pink-600 " />
      </div>
    </>
  );
}
