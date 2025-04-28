import React from "react";
import { EmptyState } from "@innovaccer/design-system";

function Paywall() {
  console.log({
    a: EmptyState,
    b: EmptyState.Image,
    c: EmptyState.Title,
    d: EmptyState.Description,
  });
  return (
    <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
      <EmptyState
        imageSrc="https://mds.innovaccer.com/static/media/no-files-empty-files.442ee36a.svg"
        title="Usage Limit Exceeded"
        description="You’ve reached your free usage limit. Please upgrade to a premium plan
          to continue."
      ></EmptyState>
    </div>
  );
}

export default Paywall;
