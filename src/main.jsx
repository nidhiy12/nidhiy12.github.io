import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Experiment from "./routes/experiment";
import CriminalLaw from "./routes/CriminalLaw";
import CivilLaw from "./routes/civil";
import MockTrialGame from "./routes/game";
import CorporateLaw from "./routes/CorporateLaw";
import ConstitutionalLaw from "./routes/ConstitutionalLaw";
import IpLaw from "./routes/IpLaw";
import EnvironmentalLaw from "./routes/EnvironmentalLaw"
import FamilyLaw from "./routes/FamilyLaw"

import Amendments from "./routes/Amendments"




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
  },{
    path: "/experiment",
    element: <Experiment></Experiment>
  
 
    
  },
  {
    path: "/CriminalLaw",
    element: <CriminalLaw></CriminalLaw>

  },
  {
    path: "/civillaw",
    element: <CivilLaw></CivilLaw>




  },
  {
    path: "/mocktrialgame",
    element: <MockTrialGame></MockTrialGame>
  },

  {path: "/mocktrialgame",
    element: <constitutional></constitutional>


  },
  {
    path: "/CorporateLaw",
    element: <CorporateLaw></CorporateLaw>

  },
  {
    path: "/ConstitutionalLaw",
    element: <ConstitutionalLaw></ConstitutionalLaw>
  },

  {
    path: "/IpLaw",
    element: <IpLaw></IpLaw>


  },
  {
    path: "/EnvironmentalLaw",
    element: <EnvironmentalLaw></EnvironmentalLaw>
  },

{
  path: "/Amendments",
  element: <Amendments></Amendments>

},

{
  path: "/FamilyLaw",
  element: <FamilyLaw></FamilyLaw>
}



   


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
