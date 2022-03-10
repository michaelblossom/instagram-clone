import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Story from "./pages/storyPage";
import LoginPage from "./pages/signupPage";
import SavedImages from "./pages/savedImages";
import { Route, Routes } from "react-router-dom";
import { user } from "./image";
import { user2 } from "./image";
import { user3 } from "./image";
import { user4 } from "./image";

function App() {
  const images = [
    { id: 1, url: user },
    { id: 2, url: user2 },
    { id: 3, url: user3 },
    { id: 4, url: user },
    { id: 5, url: user4 },
    { id: 6, url: user2 },
  ];

  const [activeStatus, setActiveStatus] = useState(user);

  const [saveImage, setSaveImage] = useState([]);

  const onsave = () => {
    setSaveImage([...saveImage, { url: activeStatus }]);
    alert("Image Saved ");
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/status"
        element={
          <Story
            images={images}
            activeStatus={activeStatus}
            saveImage={saveImage}
            setActiveStatus={setActiveStatus}
            setSaveImage={setSaveImage}
            onsave={onsave}
          />
        }
      />
      <Route path="/saved" element={<SavedImages saveImage={saveImage} />} />
    </Routes>
    // <div className="grid grid-cols-2 gap-6">
    //   <div>
    //     <Story
    //       images={images}
    //       activeStatus={activeStatus}
    //       saveImage={saveImage}
    //       setActiveStatus={setActiveStatus}
    //       setSaveImage={setSaveImage}
    //       onsave={onsave}
    //     />
    //   </div>
    //   <div>
    //     <SavedImages saveImage={saveImage} />
    //   </div>

    //   {/* <LoginPage /> */}
  );
}

export default App;
