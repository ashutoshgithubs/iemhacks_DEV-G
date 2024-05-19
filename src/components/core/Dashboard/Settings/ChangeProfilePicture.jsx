import { useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { updateDisplayPicture, removeProfilePicture} from "../../../../services/operations/settingsApi";
import { AiOutlineSelect } from "react-icons/ai";
import toast from "react-hot-toast";

export default function ChangeProfilePicture() {
  const { token } = useSelector((state) => state.auth);
  //console.log("TOKEN FROM AUTH: ", token);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const userImage =  `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName} ${user.lastName}`;
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);
  const[imageData,setImageData] = useState({url: "", public_id: ""});

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      // previewFile(file);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFileUpload = () => {
    try {
      console.log("uploading...");
      setLoading(true);
      const formData = new FormData();
      formData.append("displayPicture", imageFile);
      //console.log("formdata", formData);
      //console.log("BEFORE SENDING PROFILE IMG TOKEN: ", token);
      dispatch(updateDisplayPicture(token, formData, setImageData)).then(() => {
        setLoading(false);
      });
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };

  const handleRemoveProfilePicture = () => {
    try {
      setImageFile(null)
      setPreviewSource(userImage)
      //if image is not uploaded just selected then we'll just return
      if(previewSource !== userImage && user?.image === userImage){
        return;
      }
      //there is no profile picture present for removal
      if(user?.image === userImage){
        toast.error("Could not remove the image")
        return;
      }
      dispatch(removeProfilePicture(token, imageData.public_id));
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile);
    }
  }, [imageFile]);
  
  return (
    <>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5">
        <div className="flex items-center gap-x-4">
          <img
            src={previewSource || user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-2">
            <p>Change Profile Picture</p>
            <div className="flex flex-row gap-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/png, image/gif, image/jpeg"
              />
              <button
                onClick={handleClick}
                disabled={loading}
                className="cursor-pointer flex gap-x-1 items-center rounded-md bg-richblack-700 py-2 px-3 font-semibold text-richblack-50 hover:scale-95 transition-all duration-200"
              >
                Select
                <AiOutlineSelect />
              </button>
              <button
                onClick={handleFileUpload}
                className="flex gap-x-1 items-center cursor-pointer rounded-md py-2 px-3 font-semibold text-richblack-900 border border-yellow-50 bg-yellow-50 hover:scale-95 transition-all duration-200"
              >
                {loading ? "Uploading..." : "Upload"}
                {!loading && (
                  <FiUpload className="text-md text-richblack-900" />
                )}
              </button>
              <button
                onClick={handleRemoveProfilePicture}
                className="flex gap-x-1 items-center cursor-pointer rounded-md py-2 px-3 font-semibold text-richblack-900 border border-yellow-50 bg-yellow-50 hover:scale-95 transition-all duration-200"
                disabled={loading}>
                Remove
                  <RxCross2 className="text-md text-richblack-900" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
