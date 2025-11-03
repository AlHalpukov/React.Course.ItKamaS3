import { useState } from "react";
import TrackDetail from "./TrackDetail";
import TrackList from "./TrackList";

function MainPage() {
  const [trackId, setTrackId] = useState<string | null>(null);

  const handleTrackSelect = (id: string | null) => {
    setTrackId(id);
  };

  return (
    <>
      {/* <Header />
      <SidebarMenu />
      <PageTitle /> */}
      <div style={{ display: "flex", gap: "40px" }}>
        <TrackList
          selectedTrackId={trackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetail trackId={trackId} />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default MainPage;
