import React,{ useState } from "react";
import user from "../../assests/images/user.png";
import "./profile.css";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";

function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("userinfo")) || {};

  // console.log("adsad", userInfo);
  const { name, username, email, phone, password, _id } = userInfo;

  const [imagePreview, setImagePreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [filepath, setFilepath] = useState("");

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setImagePreview(URL.createObjectURL(file));
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post("http://localhost:3000/api/upload/upload-image", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("sada", response.data.image.file_path);
      setFilepath(response.data.image.file_path);
      
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  console.log("filepath", filepath);

  const handleRemoveImage = () => {
    setImagePreview(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUserInfo = {
      name: event.target[0].value || name,
      phone: event.target[3].value || phone,
      // image: filepath,
    };
    localStorage.setItem(
      "userinfo",
      JSON.stringify({ ...userInfo, ...updatedUserInfo })
    );
    alert("Profile updated successfully!");
    window.location.href = "/profile";
  };
  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <div className="wrap">
                  <h2>Update Profile Information</h2>
                  <div></div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col-4">
                    <div className="bg-pale-green p-4 rounded-xl">
                      <div className="">
                        {imagePreview ? (
                          <div className="relative">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="rounded-md w-full h-full object-cover"
                            />
                            <button
                              onClick={handleRemoveImage}
                              className="absolute top-2 right-2 bg-black bg-opacity-40 hover:bg-opacity-80 duration-700 text-white rounded-full font-bold p-2"
                            >
                              <RxCross1 className="font-bold text-xl" />
                            </button>
                          </div>
                        ) : (
                          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                  {/* <span>Upload a file</span> */}
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                    onChange={handleImageUpload}
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="info">
                      <label htmlFor="">Name</label>
                      <input type="text" placeholder={name} />
                      <label htmlFor="">Username</label>
                      <input type="text" value={username} disabled />
                      <label htmlFor="">Email</label>
                      <input type="text" value={email} disabled />
                      <label htmlFor="">Phone</label>
                      <input type="text" placeholder={phone} />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-success">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
