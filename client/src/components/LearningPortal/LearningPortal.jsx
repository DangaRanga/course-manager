import React from "react";
import { PortalNav } from "./PortalNav";

function LearningPortal({ portalComponent }) {
  return (
    <div id="portal">
      <PortalNav />
      <main id="portal-content"></main>
    </div>
  );
}
