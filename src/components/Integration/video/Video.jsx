import { useEffect } from "react";

export default function Video() {
  useEffect(() => {
    // Replace the current URL with the YouTube video link when the component mounts
    window.location.replace("https://www.youtube.com/watch?v=NR-JywFofY0");
  }, []);

  return <div>Video</div>;
}
